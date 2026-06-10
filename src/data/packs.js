// Registro de pacotes de conteúdo (suplementos oficiais).
// O livro básico (core) está sempre ativo. Suplementos são ativados por personagem
// em char.suplementos (array de ids). Conteúdo de suplemento só aparece se ativado.

export const PACKS = [
  {
    id: 'sobrevivendo',
    nome: 'Sobrevivendo ao Horror',
    desc: 'Novas origens, trilhas, poderes (incluindo os poderes gerais), rituais, armas e itens amaldiçoados.',
  },
  {
    id: 'as01',
    nome: 'Arquivos Secretos 01 — Ritos & Maldições',
    desc: 'Novas origens, poderes de ocultista, poderes gerais, maldições e itens amaldiçoados.',
  },
  {
    id: 'as02',
    nome: 'Arquivos Secretos 02',
    desc: 'Novos poderes e opções de trilha.',
  },
  {
    id: 'as03',
    nome: 'Arquivos Secretos 03',
    desc: 'Poderes gerais, poderes paranormais, itens amaldiçoados e a trilha Combatente Performático.',
  },
  {
    id: 'as04',
    nome: 'Arquivos Secretos 04',
    desc: 'Novas origens, poderes gerais, trilha de especialista, modificações e itens.',
  },
  {
    id: 'as05',
    nome: 'Arquivos Secretos 05',
    desc: 'Novas origens, poderes gerais, itens e nova trilha de ocultista.',
  },
  {
    id: 'origens-extra',
    nome: 'Origens Extra',
    desc: 'Origens oficiais avulsas: Professor, Jornalista, Gaudério Abutre, Dublê, Revoltado, Blaster, Body Builder, Escritor, Cientista Forense e Personal Trainer.',
  },
]

export function getPack(id) {
  return PACKS.find((p) => p.id === id) ?? null
}
