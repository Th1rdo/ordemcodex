// Habilidades de trilha por NEX (10%, 40%, 65%, 99%) — Ordem Paranormal RPG v1.3
export const TRILHA_PODERES = {
  Combatente: {
    Aniquilador: [
      { nex: 10, nome: 'A Favorita', desc: 'Escolha uma arma para ser sua favorita, como katana ou fuzil de assalto. A categoria da arma escolhida é reduzida em I.' },
      { nex: 40, nome: 'Técnica Secreta', desc: 'A categoria da arma favorita passa a ser reduzida em II. Quando faz um ataque com ela, você pode gastar 2 PE para executar um efeito como parte do ataque (+2 PE por efeito adicional): Amplo (atinge um alvo adicional adjacente ao original) ou Destruidor (aumenta o multiplicador de crítico em +1).' },
      { nex: 65, nome: 'Técnica Sublime', desc: 'Adiciona efeitos à Técnica Secreta: Letal (aumenta a margem de ameaça em +2; pode escolher duas vezes para +5) e Perfurante (ignora até 5 pontos de resistência a dano de qualquer tipo do alvo).' },
      { nex: 99, nome: 'Máquina de Matar', desc: 'A categoria da arma favorita passa a ser reduzida em III, ela recebe +2 na margem de ameaça e seu dano aumenta em um dado do mesmo tipo.' },
    ],
    'Comandante de Campo': [
      { nex: 10, nome: 'Inspirar Confiança', desc: 'Você pode gastar uma reação e 2 PE para fazer um aliado em alcance curto rolar novamente um teste recém realizado.' },
      { nex: 40, nome: 'Estrategista', desc: 'Gaste uma ação padrão e 1 PE por aliado em alcance curto que quiser direcionar (limitado pelo seu Intelecto). No próximo turno, os aliados afetados ganham uma ação de movimento adicional.' },
      { nex: 65, nome: 'Brecha na Guarda', desc: 'Uma vez por rodada, quando um aliado causar dano em um inimigo em seu alcance curto, você pode gastar uma reação e 2 PE para que você ou outro aliado em alcance curto faça um ataque adicional contra o mesmo inimigo. O alcance de Inspirar Confiança e Estrategista aumenta para médio.' },
      { nex: 99, nome: 'Oficial Comandante', desc: 'Você pode gastar uma ação padrão e 5 PE para que cada aliado que você possa ver em alcance médio receba uma ação padrão adicional no próximo turno dele.' },
    ],
    Guerreiro: [
      { nex: 10, nome: 'Técnica Letal', desc: 'Você recebe um aumento de +2 na margem de ameaça com todos os seus ataques corpo a corpo.' },
      { nex: 40, nome: 'Revidar', desc: 'Sempre que bloquear um ataque, você pode gastar uma reação e 2 PE para fazer um ataque corpo a corpo no inimigo que o atacou.' },
      { nex: 65, nome: 'Força Opressora', desc: 'Quando acerta um ataque corpo a corpo, pode gastar 1 PE para fazer uma manobra derrubar ou empurrar contra o alvo como ação livre. Se empurrar, recebe +5 para cada 10 pontos de dano causados. Se derrubar e vencer, pode gastar 1 PE para um ataque adicional contra o alvo caído.' },
      { nex: 99, nome: 'Potência Máxima', desc: 'Quando usa seu Ataque Especial com armas corpo a corpo, todos os bônus numéricos são dobrados. Por exemplo, 5 PE para +5 no ataque e +15 no dano se tornam +10 no ataque e +30 no dano.' },
    ],
    'Operações Especiais': [
      { nex: 10, nome: 'Iniciativa Aprimorada', desc: 'Você recebe +5 em Iniciativa e uma ação de movimento adicional na primeira rodada.' },
      { nex: 40, nome: 'Ataque Extra', desc: 'Uma vez por rodada, quando faz um ataque, você pode gastar 2 PE para fazer um ataque adicional.' },
      { nex: 65, nome: 'Surto de Adrenalina', desc: 'Uma vez por rodada, você pode gastar 5 PE para realizar uma ação padrão ou de movimento adicional.' },
      { nex: 99, nome: 'Sempre Alerta', desc: 'Você recebe uma ação padrão adicional no início de cada cena de combate.' },
    ],
    'Tropa de Choque': [
      { nex: 10, nome: 'Casca Grossa', desc: 'Você recebe +1 PV para cada 5% de NEX e, quando faz um bloqueio, soma seu Vigor na resistência a dano recebida.' },
      { nex: 40, nome: 'Cai Dentro', desc: 'Sempre que um oponente em alcance curto ataca um de seus aliados, você pode gastar uma reação e 1 PE para forçar um teste de Vontade (DT Vig). Se falhar, o oponente deve atacar você em vez do aliado. Quem passa fica imune até o final da cena.' },
      { nex: 65, nome: 'Duro de Matar', desc: 'Ao sofrer dano não paranormal, você pode gastar uma reação e 2 PE para reduzir esse dano à metade. Em NEX 85%, funciona também contra dano paranormal.' },
      { nex: 99, nome: 'Inquebrável', desc: 'Enquanto estiver machucado, você recebe +5 na Defesa e resistência a dano 5. Enquanto estiver morrendo, você não fica indefeso e ainda pode realizar ações.' },
    ],
  },
  Especialista: {
    'Atirador de Elite': [
      { nex: 10, nome: 'Mira de Elite', desc: 'Você recebe proficiência com armas de fogo que usam balas longas e soma seu Intelecto em rolagens de dano com essas armas.' },
      { nex: 40, nome: 'Disparo Letal', desc: 'Quando faz a ação mirar, você pode gastar 1 PE para aumentar em +2 a margem de ameaça do próximo ataque que fizer até o final de seu próximo turno.' },
      { nex: 65, nome: 'Disparo Impactante', desc: 'Quando ataca com uma arma de fogo, você pode gastar 2 PE e, em vez de causar dano, fazer uma manobra entre derrubar, desarmar, empurrar ou quebrar.' },
      { nex: 99, nome: 'Atirar para Matar', desc: 'Quando faz um acerto crítico com uma arma de fogo, você causa dano máximo, sem precisar rolar dados.' },
    ],
    Infiltrador: [
      { nex: 10, nome: 'Ataque Furtivo', desc: 'Uma vez por rodada, quando atinge um alvo desprevenido (corpo a corpo ou alcance curto) ou que esteja flanqueando, você pode gastar 1 PE para causar +1d6 de dano do mesmo tipo da arma. Aumenta para +2d6 em NEX 40%, +3d6 em 65% e +4d6 em 99%.' },
      { nex: 40, nome: 'Gatuno', desc: 'Você recebe +5 em Atletismo e Crime e pode percorrer seu deslocamento normal quando se esconder, sem penalidade.' },
      { nex: 65, nome: 'Assassinar', desc: 'Você pode gastar uma ação de movimento e 3 PE para analisar um alvo em alcance curto. Até o fim de seu próximo turno, seu primeiro Ataque Furtivo contra ele tem os dados de dano extras dobrados; se sofrer dano, o alvo fica inconsciente ou morrendo, à sua escolha (Fortitude DT Agi evita).' },
      { nex: 99, nome: 'Sombra Fugaz', desc: 'Quando faz um teste de Furtividade após atacar ou fazer outra ação chamativa, você pode gastar 3 PE para não sofrer a penalidade de –3d20 no teste.' },
    ],
    'Médico de Campo': [
      { nex: 10, nome: 'Paramédico', desc: 'Você pode usar uma ação padrão e 2 PE para curar 2d10 PV de si mesmo ou de um aliado adjacente. Cura +1d10 PV em NEX 40%, 65% e 99%, gastando +1 PE por dado adicional. Requer treino em Medicina e um kit de medicina.' },
      { nex: 40, nome: 'Equipe de Trauma', desc: 'Você pode usar uma ação padrão e 2 PE para remover uma condição negativa (exceto morrendo) de um aliado adjacente.' },
      { nex: 65, nome: 'Resgate', desc: 'Uma vez por rodada, pode se aproximar de um aliado machucado ou morrendo em alcance curto com uma ação livre. Sempre que curar ou remover condições do aliado, você e o aliado recebem +5 na Defesa até o início de seu próximo turno.' },
      { nex: 99, nome: 'Reanimação', desc: 'Uma vez por cena, você pode gastar uma ação completa e 10 PE para trazer de volta à vida um personagem que tenha morrido na mesma cena (exceto morte por dano massivo).' },
    ],
    Negociador: [
      { nex: 10, nome: 'Eloquência', desc: 'Ação completa e 1 PE por alvo em alcance curto: teste de Diplomacia, Enganação ou Intimidação contra a Vontade dos alvos. Se vencer, os alvos ficam fascinados enquanto você se concentrar (uma ação padrão por rodada).' },
      { nex: 40, nome: 'Discurso Motivador', desc: 'Você pode gastar uma ação padrão e 4 PE para inspirar seus aliados. Você e todos os aliados em alcance curto ganham +1d20 em testes de perícia até o fim da cena. A partir de NEX 65%, pode gastar 8 PE para um bônus de +2d20.' },
      { nex: 65, nome: 'Eu Conheço um Cara', desc: 'Uma vez por missão, você pode ativar sua rede de contatos para pedir um favor, como trocar todo o equipamento do grupo, conseguir um local de descanso ou ser resgatado de uma cena.' },
      { nex: 99, nome: 'Truque de Mestre', desc: 'Você pode gastar 5 PE para simular o efeito de qualquer habilidade que tenha visto um aliado usar durante a cena, ignorando pré-requisitos mas pagando todos os custos.' },
    ],
    Técnico: [
      { nex: 10, nome: 'Inventário Otimizado', desc: 'Você soma seu Intelecto à sua Força para calcular sua capacidade de carga.' },
      { nex: 40, nome: 'Remendão', desc: 'Você pode gastar uma ação completa e 1 PE para remover a condição quebrado de um equipamento adjacente até o final da cena. Qualquer equipamento geral tem categoria reduzida em I para você.' },
      { nex: 65, nome: 'Improvisar', desc: 'Escolha um equipamento geral e gaste uma ação completa e 2 PE, mais 2 PE por categoria do item. Você cria uma versão funcional do equipamento, que se torna inútil ao final da cena.' },
      { nex: 99, nome: 'Preparado para Tudo', desc: 'Sempre que precisar de um item qualquer (exceto armas), pode gastar uma ação de movimento e 3 PE por categoria do item para encontrá-lo no fundo da bolsa. O item segue normalmente as regras de inventário.' },
    ],
  },
  Ocultista: {
    Conduíte: [
      { nex: 10, nome: 'Ampliar Ritual', desc: 'Quando lança um ritual, você pode gastar +2 PE para aumentar seu alcance em um passo (curto→médio, médio→longo, longo→extremo) ou dobrar sua área de efeito.' },
      { nex: 40, nome: 'Acelerar Ritual', desc: 'Uma vez por rodada, você pode aumentar o custo de um ritual em 4 PE para conjurá-lo como uma ação livre.' },
      { nex: 65, nome: 'Anular Ritual', desc: 'Quando for alvo de um ritual, você pode gastar PE igual ao custo pago por esse ritual e fazer um teste oposto de Ocultismo contra o conjurador. Se vencer, anula o ritual, cancelando todos os seus efeitos.' },
      { nex: 99, nome: 'Canalizar o Medo', desc: 'Você aprende o ritual Canalizar o Medo.' },
    ],
    Flagelador: [
      { nex: 10, nome: 'Poder do Flagelo', desc: 'Ao conjurar um ritual, você pode gastar seus próprios PV para pagar o custo em PE, à taxa de 2 PV por PE. PV gastos assim só são recuperados com descanso.' },
      { nex: 40, nome: 'Abraçar a Dor', desc: 'Sempre que sofrer dano não paranormal, você pode gastar uma reação e 2 PE para reduzir esse dano à metade.' },
      { nex: 65, nome: 'Absorver Agonia', desc: 'Sempre que reduz um ou mais inimigos a 0 PV com um ritual, você recebe PE temporários igual ao círculo do ritual utilizado.' },
      { nex: 99, nome: 'Medo Tangível', desc: 'Você aprende o ritual Medo Tangível.' },
    ],
    Graduado: [
      { nex: 10, nome: 'Saber Ampliado', desc: 'Você aprende um ritual de 1º círculo. Toda vez que ganha acesso a um novo círculo, aprende um ritual adicional daquele círculo. Esses rituais não contam no seu limite.' },
      { nex: 40, nome: 'Grimório Ritualístico', desc: 'Você cria um grimório que armazena uma quantidade de rituais de 1º ou 2º círculos igual ao seu Intelecto. Quando ganha acesso a um novo círculo, pode incluir um novo ritual desse círculo. Para conjurar um ritual do grimório, gaste uma ação completa o folheando.' },
      { nex: 65, nome: 'Rituais Eficientes', desc: 'A DT para resistir a todos os seus rituais aumenta em +5.' },
      { nex: 99, nome: 'Conhecendo o Medo', desc: 'Você aprende o ritual Conhecendo o Medo.' },
    ],
    Intuitivo: [
      { nex: 10, nome: 'Mente Sã', desc: 'Você recebe resistência paranormal +5 (+5 em testes de resistência contra efeitos paranormais).' },
      { nex: 40, nome: 'Presença Poderosa', desc: 'Você adiciona sua Presença ao seu limite de PE por turno, mas apenas para conjurar rituais (não para DT).' },
      { nex: 65, nome: 'Inabalável', desc: 'Você recebe resistência a dano mental e paranormal 10. Quando é alvo de um efeito paranormal que permite Vontade para reduzir o dano à metade, você não sofre dano algum se passar.' },
      { nex: 99, nome: 'Presença do Medo', desc: 'Você aprende o ritual Presença do Medo.' },
    ],
    'Lâmina Paranormal': [
      { nex: 10, nome: 'Lâmina Maldita', desc: 'Você aprende o ritual Amaldiçoar Arma. Pode gastar +1 PE ao lançá-lo para reduzir o tempo de conjuração para movimento, e pode usar Ocultismo em vez de Luta ou Pontaria para ataques com a arma amaldiçoada.' },
      { nex: 40, nome: 'Gladiador Paranormal', desc: 'Sempre que acerta um ataque corpo a corpo em um inimigo, você recebe 2 PE temporários (máximo por cena igual ao seu limite de PE). PE temporários desaparecem no final da cena.' },
      { nex: 65, nome: 'Conjuração Marcial', desc: 'Uma vez por rodada, quando lança um ritual com execução de ação padrão, pode gastar 2 PE para fazer um ataque corpo a corpo como ação livre.' },
      { nex: 99, nome: 'Lâmina do Medo', desc: 'Você aprende o ritual Lâmina do Medo.' },
    ],
  },
}
