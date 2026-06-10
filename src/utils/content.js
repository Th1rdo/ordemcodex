// Resolvedor central de conteúdo: combina o livro básico com os suplementos
// ativados no personagem (char.suplementos). Todo consumo de conteúdo de jogo
// (origens, trilhas, poderes, rituais, armas, itens) deve passar por aqui.
import { ORIGENS as ORIGENS_CORE, TRILHAS as TRILHAS_CORE } from '../data'
import { PODERES as PODERES_CORE } from '../data/poderes'
import { TRILHA_PODERES as TRILHA_PODERES_CORE } from '../data/trilhaPoderes'
import { PODERES_PARANORMAIS as PARANORMAIS_CORE } from '../data/podoresParanormais'
import { RITUAIS as RITUAIS_CORE, ELEMENTOS, CUSTO_POR_CIRCULO, circuloMaximo } from '../data/rituais'
import { ARMAS as ARMAS_CORE } from '../data/equipamento'
import { SOBREVIVENDO } from '../data/supplements/sobrevivendo'
import { AS01 } from '../data/supplements/as01'
import { AS02 } from '../data/supplements/as02'
import { AS03 } from '../data/supplements/as03'
import { AS04 } from '../data/supplements/as04'
import { AS05 } from '../data/supplements/as05'
import { ORIGENS_EXTRA } from '../data/supplements/origensExtra'

const SUPPLEMENTS = {
  sobrevivendo: SOBREVIVENDO,
  as01: AS01,
  as02: AS02,
  as03: AS03,
  as04: AS04,
  as05: AS05,
  'origens-extra': ORIGENS_EXTRA,
}

function activePacks(char) {
  return (char?.suplementos ?? []).map((id) => SUPPLEMENTS[id]).filter(Boolean)
}

export function getOrigens(char) {
  const extra = activePacks(char).flatMap((p) =>
    (p.origens ?? []).map((o) => ({ ...o, fonte: p.id }))
  )
  return [...ORIGENS_CORE, ...extra]
}

export function getTrilhas(char, classe = null) {
  const cls = classe ?? char?.classe
  const merged = {}
  for (const c of ['Combatente', 'Especialista', 'Ocultista']) {
    merged[c] = [...(TRILHAS_CORE[c] ?? [])]
    for (const p of activePacks(char)) {
      merged[c] = [...merged[c], ...((p.trilhas?.[c] ?? []).map((t) => ({ ...t, fonte: p.id })))]
    }
  }
  return cls ? merged[cls] : merged
}

export function getTrilhaPoderes(char) {
  const merged = {}
  for (const c of ['Combatente', 'Especialista', 'Ocultista']) {
    merged[c] = { ...(TRILHA_PODERES_CORE[c] ?? {}) }
    for (const p of activePacks(char)) {
      Object.assign(merged[c], p.trilhaPoderes?.[c] ?? {})
    }
  }
  return merged
}

// Poderes de classe (da própria classe), com fontes ativas
export function getPoderesClasse(char, classe = null) {
  const cls = classe ?? char?.classe
  if (!cls) return []
  let list = [...(PODERES_CORE[cls] ?? [])]
  for (const p of activePacks(char)) {
    list = [...list, ...((p.poderesClasse?.[cls] ?? []).map((x) => ({ ...x, fonte: p.id })))]
  }
  return list
}

// Poderes gerais: existem apenas com Sobrevivendo ao Horror (que cria a categoria)
// ou outros pacotes que adicionem poderes gerais. Os poderes de classe marcados
// geral:true contam como gerais quando a categoria existe.
export function getPoderesGerais(char) {
  const packs = activePacks(char)
  const temCategoria = packs.some((p) => p.id === 'sobrevivendo' || (p.poderesGerais ?? []).length > 0)
  if (!temCategoria) return []
  let gerais = []
  for (const p of packs) {
    if (p.id === 'sobrevivendo') gerais = [...gerais, ...(PODERES_CORE['Geral'] ?? [])]
    gerais = [...gerais, ...((p.poderesGerais ?? []).map((x) => ({ ...x, fonte: p.id })))]
  }
  // poderes de classe que contam como gerais (de outras classes)
  const sobrevivendoAtivo = packs.some((p) => p.id === 'sobrevivendo')
  if (sobrevivendoAtivo) {
    for (const c of ['Combatente', 'Especialista', 'Ocultista']) {
      if (c === char?.classe) continue
      gerais = [...gerais, ...(PODERES_CORE[c] ?? []).filter((x) => x.geral)]
    }
  }
  // dedupe por nome
  const seen = new Set()
  return gerais.filter((x) => (seen.has(x.nome) ? false : (seen.add(x.nome), true)))
}

export function getPoderesParanormais(char) {
  const extra = activePacks(char).flatMap((p) =>
    (p.poderesParanormais ?? []).map((x) => ({ ...x, fonte: p.id }))
  )
  return [...PARANORMAIS_CORE, ...extra]
}

// Rituais combinados por elemento/círculo
export function getRituais(char) {
  const merged = {}
  for (const el of ELEMENTOS) {
    merged[el] = {}
    for (let c = 1; c <= 4; c++) {
      merged[el][c] = [...(RITUAIS_CORE[el]?.[c] ?? [])]
      for (const p of activePacks(char)) {
        const extras = p.rituais?.[el]?.[c] ?? []
        merged[el][c] = [...merged[el][c], ...extras.map((r) => ({ ...r, fonte: p.id }))]
      }
    }
  }
  return merged
}

export function getRituaisDisponiveis(char, nex, { incluirMedoTrilha = false } = {}) {
  const rituais = getRituais(char)
  const max = circuloMaximo(nex)
  const out = []
  for (const el of ELEMENTOS) {
    for (let c = 1; c <= max; c++) {
      for (const r of rituais[el][c]) {
        if (r.trilhaLock && !incluirMedoTrilha) continue
        out.push({ ...r, elemento: el, circulo: c, custo: CUSTO_POR_CIRCULO[c] })
      }
    }
  }
  return out
}

export function getArmas(char) {
  const extra = activePacks(char).flatMap((p) =>
    (p.armas ?? []).map((a) => ({ ...a, fonte: p.id }))
  )
  return [...ARMAS_CORE, ...extra]
}

export function getItensAmaldicoadosExtras(char) {
  return activePacks(char).flatMap((p) =>
    (p.itensAmaldicoados ?? []).map((i) => ({ ...i, fonte: p.id }))
  )
}

export function getItensExtras(char) {
  return activePacks(char).flatMap((p) =>
    (p.itens ?? []).map((i) => ({ ...i, fonte: p.id }))
  )
}
