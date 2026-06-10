import { CLASSES } from '../data'
import { getOrigens } from './content'

export function calcStats(char) {
  const cls = CLASSES[char.classe]
  if (!cls) return { pv: 0, pe: 0, san: 0 }
  const vig = char.atributos['Vigor'] ?? 1
  const pre = char.atributos['Presença'] ?? 1
  return {
    pv: cls.pvBase + vig,
    pe: cls.peBase + pre,
    san: cls.sanBase,
  }
}

export function getLockedSkills(char) {
  const cls = CLASSES[char.classe]
  const origem = getOrigens(char).find((o) => o.nome === char.origem)
  const origemFixas = origem
    ? origem.pericias.filter((p) => p && !p.startsWith('('))
    : []
  const classeFixas = cls
    ? cls.periciaFixas.filter((p) => !p.includes(' ou '))
    : []
  return [...new Set([...origemFixas, ...classeFixas])]
}

export function getSkillSlots(char) {
  const cls = CLASSES[char.classe]
  if (!cls) return { extraSlots: 0, locked: [] }
  const int = char.atributos['Intelecto'] ?? 1
  const locked = getLockedSkills(char)
  return { extraSlots: cls.periciaExtras(int), locked }
}

export function getAllSkills(char) {
  const cls = CLASSES[char.classe]
  const origem = getOrigens(char).find((o) => o.nome === char.origem)
  const origemFixas = origem
    ? origem.pericias.filter((p) => p && !p.startsWith('('))
    : []
  const classeFixas = cls
    ? cls.periciaFixas.filter((p) => !p.includes(' ou '))
    : []
  return [...new Set([...origemFixas, ...classeFixas, ...char.pericias])]
}

export function pontosDisponiveis(atributos) {
  const total = Object.values(atributos).reduce((a, b) => a + b, 0)
  const hasZero = Object.values(atributos).some((v) => v === 0)
  const pontosGastos = total - 5
  return 4 + (hasZero ? 1 : 0) - pontosGastos
}
