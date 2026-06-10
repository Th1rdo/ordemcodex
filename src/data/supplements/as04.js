// Arquivos Secretos 04 — Fatal Error (v1.0). Conteúdo de jogador.
export const AS04 = {
  id: 'as04',

  origens: [
    { nome: 'Influencer Paranormal', desc: 'Produzindo conteúdos falsos sobre o paranormal para a internet, você descobriu a dura verdade por trás da Membrana.', pericias: ['Enganação', 'Tecnologia'], poder: 'Registrar o Paranormal', poderDesc: 'Uma vez por cena, ação padrão e 2 PE: registra uma criatura ou ritual da cena. +5 em testes contra presença perturbadora de criaturas registradas. Pode memorizar um ritual registrado em interlúdio e conjurá-lo até o próximo interlúdio (respeitando o círculo pelo NEX).' },
    { nome: 'Caçador de Recompensas', desc: 'Sua sede pelo dinheiro fácil sempre o guiou na exploração dos locais mais obscuros.', pericias: ['Crime', 'Investigação'], poder: 'Quem Não Arrisca, Não Petisca', poderDesc: '+2 em testes para resistir a condições mentais e de medo. Se falhar em um desses testes, recebe +1d20 no próximo teste que fizer (até o fim da cena).' },
  ],

  poderesClasse: {
    Combatente: [
      { nome: 'Chuva de Balas', desc: 'Pacotes de munição duram o dobro de cenas. Antes de rolar dano com arma de fogo, pode sacrificar pacotes: +2 dados de dano por pacote.', prereq: null },
      { nome: 'Combatente Esforçado', desc: 'Você recebe +1 PE para cada NEX.', prereq: (c) => (c.atributos['Força'] ?? 1) >= 3 || (c.atributos['Vigor'] ?? 1) >= 3, prereqText: 'For 3 ou Vig 3' },
      { nome: 'Treinamento Militarizado', desc: 'O bônus por exercitar-se no interlúdio muda para +1d8 e também pode ser gasto em rolagens de dano.', prereq: null },
    ],
    Especialista: [
      { nome: 'Análise Conturbada', desc: 'Em cena de investigação, ação padrão: voluntários rolam 1d6 e recebem o resultado como bônus em testes de Int/Pre até o fim da cena, mas perdem o valor em SAN.', prereq: null },
      { nome: 'Profissão Perigo', desc: 'Ação completa e 4 PE: desmonta um item do inventário e o transforma em um item operacional de categoria/espaços iguais ou menores. Uma vez por missão.', prereq: null },
      { nome: 'Quase Novo', desc: 'Itens reparados em manutenção recebem +10 PV e podem ganhar uma modificação temporária (de categoria acessível) até o próximo interlúdio.', prereq: null },
    ],
    Ocultista: [
      { nome: 'Terrores Noturnos', desc: 'Ao dormir, 50% de chance de pesadelos: descanso precário e –1d4 SAN, mas escolhe 1 poder paranormal ou ritual (com pré-requisitos atendidos) para usar uma vez até o próximo interlúdio.', prereq: null },
      { nome: 'Explorador da Névoa', desc: 'Uma vez por cena, 2 PE: distingue o estado da Membrana. Se danificada ou pior, perde 1 SAN mas reduz o custo de todos os seus rituais em 1 PE.', prereq: null },
      { nome: 'Sinestesia Paranormal', desc: 'Em cena com Membrana danificada ou pior, pode aceitar a sinestesia: perde 1d6 SAN e troca os atributos entre dois pares de perícias à sua escolha.', prereq: null },
    ],
  },

  poderesGerais: [
    { nome: 'Gororoba', desc: 'Em interlúdio, pode alimentar-se uma vez sem gastar ação e sem precisar de refeição (improvisa com restos).', prereq: null },
    { nome: 'Ruído Branco', desc: 'Em ambientes movimentados: +1d6 em Investigação e Percepção. Uma vez por cena, 1 PE: ouve uma conversa com informação útil.', prereq: null },
    { nome: 'Uma Última Olhada', desc: 'Na última rodada de uma cena de investigação, 2 PE: o número de rodadas disponíveis aumenta em +1.', prereq: null },
  ],

  poderesParanormais: [
    { nome: 'Foco Gravitacional', elemento: 'Energia', desc: 'Escolha um equipamento: ocupa 0 espaços guardado, mas ao ser empunhado tem 25% de chance de sair voando para um espaço próximo.', afinidade: 'Aumenta para três equipamentos.' },
    { nome: 'Sobrepor Imprevisível', elemento: 'Energia', desc: 'No início da rodada, 2 PE: role 1d20 — par soma, ímpar subtrai da sua iniciativa, mudando sua posição.', afinidade: 'Rola 2d20 e escolhe qual usar.' },
    { nome: 'Traço de Inconsistência', elemento: 'Energia', desc: '2 PE (reação): esconde sua identidade em imagens digitais no momento da captura.', afinidade: 'Permanentemente incapturável em imagens digitais; voz distorcida em gravações.' },
  ],

  rituais: {
    Energia: {
      2: [{ nome: 'Backup', execucao: 'padrão', alcance: 'curto', alvo: 'veja texto', duracao: '24 horas', desc: 'Cria um chamariz de Energia com sua aparência (conexão de 50km). Reação: troca de lugar com ele, perdendo 2d4 SAN. Dissipa-se com dano.', discente: '(+2 PE) duração permanente; pode ver/ouvir através da cópia. Requer 2º círculo.', verdadeiro: '(+5 PE) também fala pela cópia e escolhe sua aparência; ao trocar, pode dissipá-la causando 6d6 de Energia. Requer 3º círculo.' }],
    },
  },

  trilhas: {
    Especialista: [{ nome: 'Granadeiro Blaster', desc: 'Nerd de explosivos: granadas, bombas e nitroglicerina são mais eficientes nas suas mãos.' }],
  },

  trilhaPoderes: {
    Especialista: {
      'Granadeiro Blaster': [
        { nex: 10, nome: 'Meus Bebês', desc: 'Treinamento em Profissão (químico) (ou +5). Começa a missão com 1 explosivo autoral (+1 em NEX 40/65/99%), fabricável com Fabricação em Campo.' },
        { nex: 40, nome: 'Fogo Amigo', desc: 'Recebe Perito em Explosivos (ou dobra seus valores). A área dos seus explosivos aumenta em +6m.' },
        { nex: 65, nome: 'O Calor do Momento', desc: 'Ação completa e 4 PE: fabrica um explosivo autoral às pressas (25% de chance de explodir na mão).' },
        { nex: 99, nome: 'Memória Muscular', desc: 'Explosivos autorais são empunháveis como ação livre; 4 PE para usá-los como ação de movimento. Seus explosivos autorais causam o dobro dos dados de dano.' },
      ],
    },
  },

  modificacoes: [
    { nome: 'Adesiva', tipo: 'granada', efeito: 'A granada gruda no alvo (teste de ataque à distância; grudado, o alvo falha automaticamente na resistência).' },
    { nome: 'Dupla', tipo: 'granada', efeito: 'A granada tem o efeito adicional de outra granada (exceto amaldiçoadas).' },
    { nome: 'Programada', tipo: 'granada', efeito: 'Temporizador programável: defina em quantos turnos ela explode.' },
  ],

  itens: [
    { nome: 'Granada de gás lacrimogêneo', grupo: 'Explosivo', categoria: 1, espacos: 1, desc: 'Raio 6m: 4d6 químico, enjoado e dificuldade de respirar (Fortitude DT Agi reduz/evita).' },
    { nome: 'Granada de tinta', grupo: 'Explosivo', categoria: 0, espacos: 1, desc: 'Raio 6m: vulnerável e –2d20 em Furtividade até o fim da cena (Reflexos DT Agi evita).' },
    { nome: 'Lançador de granadas', grupo: 'Arma', categoria: 2, espacos: 2, desc: 'Arma de fogo pesada de duas mãos, alcance longo. Comporta 6 granadas 40mm; recarregar 1 gasta ação de movimento.' },
  ],

  itensAmaldicoados: [
    { nome: 'Granada Ctrl+C Ctrl+V', elemento: 'Energia', categoria: 2, desc: 'Granada: raio 6m, 8d6 de Energia (Reflexos DT Agi reduz). 50% de gerar uma cópia que explode de novo (até 4 explosões).' },
  ],
}
