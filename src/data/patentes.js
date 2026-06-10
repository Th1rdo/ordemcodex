// Patentes da Ordem — Tabela 3.1 (Ordem Paranormal RPG v1.3)
// limiteItens: máximo de itens requisitáveis por categoria (I a IV) por missão.
// Categoria 0 é ilimitada (limitada apenas pela capacidade de carga).

export const PATENTES = [
  { nome: 'Recruta',              pp: 0,   credito: 'Baixo',     limiteItens: { 1: 2, 2: 0, 3: 0, 4: 0 } },
  { nome: 'Operador',             pp: 20,  credito: 'Médio',     limiteItens: { 1: 3, 2: 1, 3: 0, 4: 0 } },
  { nome: 'Agente especial',      pp: 50,  credito: 'Médio',     limiteItens: { 1: 3, 2: 2, 3: 1, 4: 0 } },
  { nome: 'Oficial de operações', pp: 100, credito: 'Alto',      limiteItens: { 1: 3, 2: 3, 3: 2, 4: 1 } },
  { nome: 'Agente de elite',      pp: 200, credito: 'Ilimitado', limiteItens: { 1: 3, 2: 3, 3: 3, 4: 2 } },
]

export const PATENTE_PADRAO = 'Recruta'

// Itens amaldiçoados são liberados apenas a partir de Agente especial
export const PATENTE_MIN_AMALDICOADOS = 'Agente especial'

export function getPatente(nome) {
  return PATENTES.find((p) => p.nome === nome) ?? PATENTES[0]
}

export function patenteIndex(nome) {
  return PATENTES.findIndex((p) => p.nome === nome)
}

export function podeUsarAmaldicoados(patenteNome) {
  return patenteIndex(patenteNome) >= patenteIndex(PATENTE_MIN_AMALDICOADOS)
}
