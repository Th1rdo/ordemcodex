// Regras centralizadas de inventário: categoria efetiva, validação de modificações,
// maldições e limites por patente — Ordem Paranormal RPG v1.3 (Capítulos 3 e 5).
import { MODS_ARMA, MODS_PROTECAO, MODS_ACESSORIO } from '../data/modificacoes'
import { MALDICOES_ARMA, MALDICOES_PROTECAO, MALDICOES_ACESSORIO, ELEMENTO_OPRESSOR } from '../data/maldicoes'
import { getPatente, podeUsarAmaldicoados } from '../data/patentes'

// item de inventário: { id, nome, tipo: 'arma'|'protecao'|'acessorio'|'geral'|'municao'|'amaldicoadoEspecial',
//   base: {...dados do catálogo}, mods: [nomes], maldicoes: [nomes] }

export function getModsDisponiveis(item) {
  if (item.tipo === 'arma') return MODS_ARMA
  if (item.tipo === 'municao') return MODS_ARMA.filter((m) => m.aplicavel.includes('municao'))
  if (item.tipo === 'protecao') return MODS_PROTECAO
  if (item.tipo === 'acessorio') return MODS_ACESSORIO
  return []
}

export function getMaldicoesDisponiveis(item) {
  if (item.tipo === 'arma') return MALDICOES_ARMA
  if (item.tipo === 'protecao') return MALDICOES_PROTECAO
  if (item.tipo === 'acessorio') return MALDICOES_ACESSORIO
  return []
}

// Categoria efetiva: base + I por modificação + (II pela primeira maldição, I pelas seguintes)
export function categoriaEfetiva(item) {
  let cat = item.base.categoria ?? 0
  cat += (item.mods ?? []).length
  const nMald = (item.maldicoes ?? []).length
  if (nMald > 0) cat += 2 + (nMald - 1)
  return cat
}

// Valida adicionar uma modificação. Retorna { ok, motivo? }
export function validarModificacao(item, modNome, char) {
  const catalogo = getModsDisponiveis(item)
  const mod = catalogo.find((m) => m.nome === modNome)
  if (!mod) return { ok: false, motivo: 'Modificação não aplicável a este tipo de item.' }
  if ((item.mods ?? []).includes(modNome)) return { ok: false, motivo: 'Modificações iguais não se acumulam.' }
  if (item.tipo === 'arma' && mod.aplicavel && !mod.aplicavel.includes(item.base.tipoArma)) {
    return { ok: false, motivo: `Aplicável apenas a armas: ${mod.aplicavel.join(', ')}.` }
  }
  if (mod.requerAutomatica && !item.base.automatica && !(item.mods ?? []).includes('Ferrolho automático')) {
    return { ok: false, motivo: 'Apenas para armas automáticas.' }
  }
  if (mod.incompativel?.some((n) => (item.mods ?? []).includes(n))) {
    return { ok: false, motivo: `Incompatível com: ${mod.incompativel.join(', ')}.` }
  }
  if (item.tipo === 'protecao' && mod.aplicavel && !mod.aplicavel.includes(item.base.tipoProtecao)) {
    return { ok: false, motivo: `Aplicável apenas a proteção ${mod.aplicavel.join('/')}.` }
  }
  return validarLimitePatente(item, char, { extraMods: 1 })
}

// Valida adicionar uma maldição. Retorna { ok, motivo? }
export function validarMaldicao(item, maldicaoNome, char) {
  if (!podeUsarAmaldicoados(char.patente)) {
    return { ok: false, motivo: 'Itens amaldiçoados são liberados apenas a partir de Agente especial.' }
  }
  const catalogo = getMaldicoesDisponiveis(item)
  const mald = catalogo.find((m) => m.nome === maldicaoNome)
  if (!mald) return { ok: false, motivo: 'Maldição não aplicável a este tipo de item.' }
  if ((item.maldicoes ?? []).includes(maldicaoNome)) return { ok: false, motivo: 'Maldições iguais não se acumulam.' }
  if (item.tipo === 'arma' && mald.aplicavel && !mald.aplicavel.includes(item.base.tipoArma)) {
    return { ok: false, motivo: `Aplicável apenas a armas: ${mald.aplicavel.join(', ')}.` }
  }
  // Elementos opressores não podem coexistir no mesmo item
  const elementosAtuais = (item.maldicoes ?? [])
    .map((n) => catalogo.find((m) => m.nome === n)?.elemento)
    .filter((e) => e && e !== 'Varia')
  for (const el of elementosAtuais) {
    if (ELEMENTO_OPRESSOR[el] === mald.elemento || ELEMENTO_OPRESSOR[mald.elemento] === el) {
      return { ok: false, motivo: `${mald.elemento} e ${el} são elementos opressores entre si.` }
    }
  }
  return validarLimitePatente(item, char, { extraMaldicoes: 1 })
}

// Verifica se a categoria resultante cabe nos limites da patente do personagem,
// considerando os demais itens já requisitados.
export function validarLimitePatente(item, char, { extraMods = 0, extraMaldicoes = 0 } = {}) {
  const patente = getPatente(char.patente)
  const simulado = {
    ...item,
    mods: [...(item.mods ?? []), ...Array(extraMods).fill('_')],
    maldicoes: [...(item.maldicoes ?? []), ...Array(extraMaldicoes).fill('_')],
  }
  const cat = categoriaEfetiva(simulado)
  if (cat === 0) return { ok: true }
  if (cat > 4) return { ok: false, motivo: 'Categoria resultante acima de IV.' }
  const usoPorCategoria = contarUsoPorCategoria(char, item.id)
  usoPorCategoria[cat] = (usoPorCategoria[cat] ?? 0) + 1
  for (let c = 1; c <= 4; c++) {
    if ((usoPorCategoria[c] ?? 0) > (patente.limiteItens[c] ?? 0)) {
      return {
        ok: false,
        motivo: `Limite da patente ${patente.nome}: ${patente.limiteItens[c]} item(ns) de categoria ${['', 'I', 'II', 'III', 'IV'][c]}.`,
      }
    }
  }
  return { ok: true }
}

// Conta itens do inventário por categoria efetiva (ignorando um item, para revalidações)
export function contarUsoPorCategoria(char, ignorarId = null) {
  const uso = {}
  for (const it of char.inventario ?? []) {
    if (ignorarId && it.id === ignorarId) continue
    const cat = categoriaEfetiva(it)
    if (cat >= 1) uso[cat] = (uso[cat] ?? 0) + 1
  }
  return uso
}

// Valida adicionar um item novo ao inventário
export function validarNovoItem(base, tipo, char) {
  if (tipo === 'amaldicoadoEspecial' && !podeUsarAmaldicoados(char.patente)) {
    return { ok: false, motivo: 'Itens amaldiçoados são liberados apenas a partir de Agente especial.' }
  }
  const fake = { id: null, tipo, base, mods: [], maldicoes: tipo === 'amaldicoadoEspecial' ? ['_especial'] : [] }
  // itens especiais contam como tendo 1 maldição mas usam a categoria do catálogo
  if (tipo === 'amaldicoadoEspecial') {
    const cat = base.categoria ?? 2
    const patente = getPatente(char.patente)
    const uso = contarUsoPorCategoria(char)
    uso[cat] = (uso[cat] ?? 0) + 1
    if (uso[cat] > (patente.limiteItens[cat] ?? 0)) {
      return { ok: false, motivo: `Limite da patente ${patente.nome} para categoria ${['', 'I', 'II', 'III', 'IV'][cat]} excedido.` }
    }
    return { ok: true }
  }
  return validarLimitePatente(fake, char)
}

// Espaços ocupados por um item (modificação Discreta/Blindada/Reforçada alteram)
export function espacosItem(item) {
  let esp = item.base.espacos ?? 1
  const mods = item.mods ?? []
  if (mods.includes('Discreta') || mods.includes('Discreto')) esp -= 1
  if (mods.includes('Blindada')) esp += 1
  if (mods.includes('Reforçada')) esp += 1
  return Math.max(0, esp)
}

export function espacosTotais(char) {
  return (char.inventario ?? []).reduce((acc, it) => acc + espacosItem(it), 0)
}

export const CATEGORIA_LABEL = ['0', 'I', 'II', 'III', 'IV', 'V']
