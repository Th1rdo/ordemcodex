// Arquivos Secretos 03 — O Mais (v1.0.1). Conteúdo de jogador.
// A trilha Combatente Performático é uma "trilha geral": pode ser escolhida
// por qualquer classe (o nome se adapta).
const PERFORMATICO = [
  { nex: 10, nome: 'Ensaio', desc: 'Nova ação de interlúdio: ensaiar combate. +1 na margem de ameaça até a próxima cena de interlúdio (+2 em NEX 40%, +3 em 65%, +4 em 99%). Outros podem ensaiar com você.' },
  { nex: 40, nome: 'Frase de Efeito', desc: 'Quando você ou aliado próximo crita, 2 PE: o multiplicador de crítico muda para sua Presença (ou +1 se Presença for menor).' },
  { nex: 65, nome: 'Mosh Pit', desc: 'Flanqueando um alvo, você e aliados cercando-o recebem +1d6 de dano contra ele por aliado (até +5d6).' },
  { nex: 99, nome: 'Ritmo Contagiante', desc: 'No início de um combate, você e aliados em alcance médio recebem +5 na Defesa até o fim. Cada crítico seu aumenta o bônus em +1.' },
]

export const AS03 = {
  id: 'as03',

  poderesGerais: [
    { nome: 'Ambidestria', desc: 'Empunhando duas armas (uma leve), pode fazer dois ataques com a ação agredir (–1d20 nos ataques até o próximo turno). Com Combater com Duas Armas: sem penalidade e pode usar duas armas de uma mão.', prereq: (c) => ((c.atributos['Força'] ?? 1) >= 2 || (c.atributos['Agilidade'] ?? 1) >= 2) && c.pericias.includes('Luta'), prereqText: 'For 2 ou Agi 2, treinado em Luta' },
    { nome: 'Entrada Triunfal', desc: 'Uma vez por sessão, anuncie sua chegada: +1d20 no primeiro teste que fizer no ambiente (exceto Furtividade), ou transfira o bônus a um aliado.', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 2, prereqText: 'Pre 2' },
    { nome: 'Papinho Sedutor', desc: 'Em teste de Presença para seduzir, 1 PE: +5. Se passar, o alvo fica apaixonado por você (com complicações a critério do mestre).', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 2, prereqText: 'Pre 2' },
  ],

  poderesParanormais: [
    { nome: 'Instrumento Elétrico de Combate', elemento: 'Energia', desc: 'Transforma um instrumento musical em arma tática amaldiçoada de Energia: ataca à distância (alcance curto) com Artes, 2d8 de Energia + Presença, crítico 20/x2, categoria II, 2 espaços.', afinidade: 'Atinge todos os alvos à sua escolha em alcance curto.' },
    { nome: 'Conhecimento de Direção Precognitiva', elemento: 'Conhecimento', desc: '+5 em Percepção ou Sobrevivência para se localizar ou se orientar até um local, mesmo sem nunca tê-lo visto.', afinidade: 'O bônus aumenta para +10.' },
  ],

  trilhas: {
    Combatente: [{ nome: 'Combatente Performático', desc: 'Uma luta é uma performance violentamente cativante e colaborativa. (Trilha geral: disponível para todas as classes.)' }],
    Especialista: [{ nome: 'Especialista Performático', desc: 'Uma luta é uma performance violentamente cativante e colaborativa. (Trilha geral: disponível para todas as classes.)' }],
    Ocultista: [{ nome: 'Ocultista Performático', desc: 'Uma luta é uma performance violentamente cativante e colaborativa. (Trilha geral: disponível para todas as classes.)' }],
  },

  trilhaPoderes: {
    Combatente: { 'Combatente Performático': PERFORMATICO },
    Especialista: { 'Especialista Performático': PERFORMATICO },
    Ocultista: { 'Ocultista Performático': PERFORMATICO },
  },

  itens: [
    { nome: 'Garra do Harpia', grupo: 'Arma', categoria: 1, espacos: 2, desc: 'Arma tática ágil corpo a corpo de duas mãos: 2d8 de corte, arremessável em alcance curto, crítico 19/x2. Ao causar dano, 2 PE: manobra agarrar como ação livre. Item único.' },
    { nome: 'Bloody Mary Batizada', grupo: 'Equipamento', categoria: 2, espacos: 1, desc: 'Beber remove uma condição mental e/ou de medo, mas causa 2d4 de dano mental.' },
    { nome: 'Paçoca', grupo: 'Equipamento', categoria: 0, espacos: 0.5, desc: 'Prato rápido. Em ocasiões especiais, uma vez por dia, recupera 1d8+1 PV, PE e SAN.' },
    { nome: 'Crânio Dominador', grupo: 'Paranormal', categoria: 3, espacos: 1, desc: 'Ação padrão e 2 PE: correntes paralisam até dois alvos em alcance curto (Reflexos DT Pre evita). Recarga de 24h.' },
    { nome: 'Gaiola do Corvo', grupo: 'Paranormal', categoria: 4, espacos: 2, desc: 'Abrir no chão: raio de 18m vira Lodo (terreno difícil; 3d10 de Morte por rodada, Fortitude DT Vig reduz). Quem morrer no Lodo é consumido para sempre.' },
  ],

  itensAmaldicoados: [
    { nome: 'Camiseta Psikolera', elemento: 'Sangue', categoria: 2, desc: 'Vestimenta: enquanto estiver machucado, todas as rolagens de dano causam +2d8 de Sangue.' },
    { nome: 'Dupla Obsessiva', elemento: 'Sangue', categoria: 3, desc: 'Maça (2d4 perfuração + 1d6 Sangue, 20/x3) e florete ágil (1d6 perfuração + 2d4 Sangue, 18/x2). Empunhando ambas: ação padrão para dois ataques; 2 PE (reação) para se tornar alvo de ataque a aliado próximo.' },
    { nome: 'Armadura de Guevara (Couraças)', elemento: 'Sangue', categoria: 3, desc: 'Proteção pesada amaldiçoada: Defesa +10 (+1/semana até +20), 0 espaços, dispensa proficiência, RD balístico/impacto/perfuração 5 e Sangue 10, vulnerável a Morte. O Sangue pode controlar o usuário (testes de Vontade/Fortitude com DT 6d6).' },
  ],
}
