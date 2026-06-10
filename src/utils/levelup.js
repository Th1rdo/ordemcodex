import { PROGRESSAO, NEX_SEQUENCE, CLASS_MILESTONES, GRAU_UPGRADES_BASE } from '../data/progressao'
import { CLASSES } from '../data'
import { getPoderesClasse, getPoderesGerais, getTrilhaPoderes } from './content'

export function nextNex(currentNex) {
  const idx = NEX_SEQUENCE.indexOf(currentNex)
  return idx >= 0 && idx < NEX_SEQUENCE.length - 1 ? NEX_SEQUENCE[idx + 1] : null
}

export function isMaxNex(currentNex) {
  return currentNex === 99
}

// Stat gains when advancing to targetNex
export function statGains(char, targetNex) {
  const cls = CLASSES[char.classe]
  if (!cls) return { pv: 0, pe: 0, san: 0 }
  return {
    pv: cls.pvPerNex + (char.atributos['Vigor'] ?? 1),
    pe: cls.pePerNex + (char.atributos['Presença'] ?? 1),
    san: cls.sanPerNex,
  }
}

// Choices available when advancing to targetNex
export function getProgressaoStep(targetNex) {
  return PROGRESSAO.find((p) => p.nex === targetNex) ?? null
}

// Automatic class ability milestone (Ataque Especial / Perito / círculos de ritual)
export function getClassMilestone(char, targetNex) {
  return CLASS_MILESTONES[char.classe]?.[targetNex] ?? null
}

// Trilha milestone ability for the char's current trilha at the given NEX
export function getTrilhaPoder(char, nex) {
  if (!char.classe || !char.trilha) return null
  const trilhaList = getTrilhaPoderes(char)[char.classe]?.[char.trilha]
  if (!trilhaList) return null
  return trilhaList.find((p) => p.nex === nex) ?? null
}

// Powers the char can pick: own class powers + general powers (when a pack
// providing them is enabled), prereqs met.
export function getAvailablePoderes(char) {
  const chosen = char.poderes ?? []
  const own = getPoderesClasse(char).map((p) => ({ ...p, grupo: char.classe }))
  const gerais = getPoderesGerais(char)
    .filter((p) => !own.some((o) => o.nome === p.nome))
    .map((p) => ({ ...p, grupo: 'Geral' }))
  return [...own, ...gerais].filter((p) => {
    if (!p.repeatable && chosen.includes(p.nome)) return false
    if (p.prereq && !p.prereq(char)) return false
    return true
  })
}

// Versatilidade (NEX 50%): also allows the first power of another trilha of the same class
export function getVersatilidadeTrilhaPoderes(char) {
  if (!char.classe) return []
  const trilhas = getTrilhaPoderes(char)[char.classe] ?? {}
  return Object.entries(trilhas)
    .filter(([nome]) => nome !== char.trilha)
    .map(([nome, lista]) => {
      const first = lista.find((p) => p.nex === 10)
      return first ? { nome: `${first.nome} (${nome})`, desc: first.desc, grupo: 'Trilha' } : null
    })
    .filter(Boolean)
}

// Number of skills whose grade increases at NEX 35% / 70%: base (per class) + Int
export function getGrauUpgradeCount(char) {
  const base = GRAU_UPGRADES_BASE[char.classe] ?? 2
  return base + (char.atributos['Intelecto'] ?? 1)
}

// Skill grades available to upgrade at the given NEX
// 35%: treinado → veterano; 70%: veterano → expert (ou treinado → veterano)
export function getAvailableGradeUpgrades(char, targetNex) {
  const trained = char.pericias ?? []
  const grades = char.periciaGraus ?? {}
  const upgrades = []
  for (const skill of trained) {
    const current = grades[skill] ?? 'treinado'
    if (targetNex >= 35 && current === 'treinado') upgrades.push(skill)
    else if (targetNex >= 70 && current === 'veterano') upgrades.push(skill)
  }
  return upgrades
}

// Attributes that can still be increased (below max 5)
export function getUpgradableAttributes(char) {
  return Object.entries(char.atributos)
    .filter(([, v]) => v < 5)
    .map(([k]) => k)
}

// Count of chosen paranormal powers per element (for prereqs like "Morte 2")
export function countParanormaisPorElemento(char, allParanormais) {
  const counts = {}
  for (const nome of char.poderesParanormais ?? []) {
    const p = allParanormais.find((x) => x.nome === nome)
    if (p?.elemento) counts[p.elemento] = (counts[p.elemento] ?? 0) + 1
  }
  return counts
}

// Paranormal powers available when transcending
export function getAvailableParanormais(char, allParanormais) {
  const chosen = char.poderesParanormais ?? []
  const counts = countParanormaisPorElemento(char, allParanormais)
  return allParanormais.filter((p) => {
    if (!p.repeatable && chosen.includes(p.nome)) return false
    if (p.nexMin && (char.nex ?? 5) < p.nexMin) return false
    if (p.prereqElemento && (counts[p.prereqElemento.elemento] ?? 0) < p.prereqElemento.count) return false
    return true
  })
}
