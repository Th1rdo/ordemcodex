// Cálculos derivados para a ficha (Defesa, ataques) a partir do inventário.
import { MALDICOES_PROTECAO } from '../../data/maldicoes'

// Defesa = 10 + Agilidade + proteções/escudo (+ mods e maldições com bônus fixo de Defesa)
export function defesaTotal(char) {
  const agi = char.atributos?.['Agilidade'] ?? 1
  let bonus = 0
  let melhorProtecao = 0
  for (const item of char.inventario ?? []) {
    if (item.tipo !== 'protecao') continue
    let d = item.base.defesa ?? 0
    if ((item.mods ?? []).includes('Reforçada')) d += 2
    for (const m of item.maldicoes ?? []) {
      const mald = MALDICOES_PROTECAO.find((x) => x.nome === m)
      if (mald && (m === 'Cinética' || m === 'Letárgica')) d += 2
    }
    if (item.base.tipoProtecao === 'escudo') bonus += d
    else melhorProtecao = Math.max(melhorProtecao, d)
  }
  return 10 + agi + melhorProtecao + bonus
}

// Perícia de ataque e bônus de dano de uma arma para o personagem
export function ataqueDaArma(char, item) {
  const base = item.base
  const agil = base.agil
  const forca = char.atributos?.['Força'] ?? 1
  const agi = char.atributos?.['Agilidade'] ?? 1
  const corpoACorpo = base.tipoArma === 'corpoACorpo'
  const pericia = corpoACorpo ? (agil && agi > forca ? 'Luta (ágil)' : 'Luta') : 'Pontaria'
  // dano: corpo a corpo e arremesso somam Força (ágil pode usar Agi); disparo/fogo não somam
  let danoBonus = 0
  if (corpoACorpo || base.tipoArma === 'arremesso') danoBonus = agil ? Math.max(forca, agi) : forca
  if (base.nome === 'Arco composto' || base.nome === 'Estilingue') danoBonus = forca
  const mods = item.mods ?? []
  let ataqueBonus = 0
  if (mods.includes('Certeira') || mods.includes('Alongada')) ataqueBonus += 2
  if (mods.includes('Cruel')) danoBonus += 2
  return { pericia, ataqueBonus, danoBonus }
}

export function descricaoDano(item, danoBonus) {
  const extra = []
  if ((item.mods ?? []).includes('Calibre grosso')) extra.push('+1 dado')
  if ((item.maldicoes ?? []).includes('Lancinante')) extra.push('+1d8 Sangue')
  if ((item.maldicoes ?? []).includes('Erosiva')) extra.push('+1d8 Morte')
  const bonusTxt = danoBonus > 0 ? `+${danoBonus}` : ''
  return `${item.base.dano}${bonusTxt}${extra.length ? ' (' + extra.join(', ') + ')' : ''}`
}
