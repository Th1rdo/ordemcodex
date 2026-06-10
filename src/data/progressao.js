// Progressão por NEX — Tabelas 1.3/1.4/1.5 (Ordem Paranormal RPG v1.3)
// As três classes compartilham a mesma estrutura de escolhas;
// as habilidades automáticas de 5/25/55/85% variam por classe (texto em CLASS_MILESTONES).
// Ocultistas também aprendem 1 ritual a cada aumento de NEX (qualquer círculo que possam lançar).

export const NEX_SEQUENCE = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 99]

// choices: 'trilha' (habilidade automática), 'poder', 'atributo', 'grau', 'versatilidade'
export const PROGRESSAO = [
  { nex: 10, choices: ['trilha'] },
  { nex: 15, choices: ['poder'] },
  { nex: 20, choices: ['atributo'] },
  { nex: 25, choices: [] }, // habilidade de classe (escala)
  { nex: 30, choices: ['poder'] },
  { nex: 35, choices: ['grau'] },
  { nex: 40, choices: ['trilha'] },
  { nex: 45, choices: ['poder'] },
  { nex: 50, choices: ['atributo', 'versatilidade'] },
  { nex: 55, choices: [] }, // habilidade de classe (escala)
  { nex: 60, choices: ['poder'] },
  { nex: 65, choices: ['trilha'] },
  { nex: 70, choices: ['grau'] },
  { nex: 75, choices: ['poder'] },
  { nex: 80, choices: ['atributo'] },
  { nex: 85, choices: [] }, // habilidade de classe (escala)
  { nex: 90, choices: ['poder'] },
  { nex: 95, choices: ['atributo'] },
  { nex: 99, choices: ['trilha'] },
]

// Habilidades automáticas de classe que escalam em NEX fixos
export const CLASS_MILESTONES = {
  Combatente: {
    5: 'Ataque Especial (2 PE: +5 em ataque ou dano)',
    25: 'Ataque Especial melhora (3 PE: +10)',
    55: 'Ataque Especial melhora (4 PE: +15)',
    85: 'Ataque Especial melhora (5 PE: +20)',
  },
  Especialista: {
    5: 'Eclético e Perito (2 PE: +1d6 em perícia escolhida)',
    25: 'Perito melhora (3 PE: +1d8)',
    40: 'Engenhosidade: Eclético pode dar benefícios de veterano (+2 PE)',
    55: 'Perito melhora (4 PE: +1d10)',
    75: 'Engenhosidade: Eclético pode dar benefícios de expert (+4 PE)',
    85: 'Perito melhora (5 PE: +1d12)',
  },
  Ocultista: {
    5: 'Escolhido pelo Outro Lado: lança rituais de 1º círculo (começa com 3)',
    25: 'Escolhido pelo Outro Lado: rituais de 2º círculo',
    55: 'Escolhido pelo Outro Lado: rituais de 3º círculo',
    85: 'Escolhido pelo Outro Lado: rituais de 4º círculo',
  },
}

// Em NEX 35% e 70%, número de perícias que sobem de grau (por classe): N + Intelecto
export const GRAU_UPGRADES_BASE = {
  Combatente: 2,
  Especialista: 5,
  Ocultista: 3,
}
