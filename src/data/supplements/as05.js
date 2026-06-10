// Arquivos Secretos 05 (v1.0). Conteúdo de jogador.
export const AS05 = {
  id: 'as05',

  origens: [
    { nome: 'Ufólogo', desc: 'Você sempre soube que não estávamos sozinhos no universo. Onde há medo, há algo incompreensível para espreitar.', pericias: ['Ciências', 'Ocultismo'], poder: 'Minha Teoria Absurda', poderDesc: 'Uma vez por missão com algo a investigar, gaste 10 minutos para apresentar sua tese. Se ao fim da missão ela se provar correta, recebe +3 PE máximos e atuais.' },
    { nome: 'Funcionário de Beira de Estrada', desc: 'Em paradeiros e postos, as lendas urbanas chegaram aos seus ouvidos e atiçaram sua curiosidade.', pericias: ['Fortitude', 'Intuição'], poder: 'Turno Invertido', poderDesc: 'Uma vez por missão, em interlúdio, recebe os benefícios da ação dormir sem realizá-la. +2 em testes contra efeitos que tentem deixá-lo inconsciente.' },
  ],

  poderesClasse: {
    Combatente: [
      { nome: 'Aura de Confiança', desc: 'Aliados em um raio de 18m recebem +5 em Iniciativa e em testes contra presença perturbadora (você não recebe).', prereq: null },
      { nome: 'Fôlego de Emergência', desc: 'Uma vez por cena, ação de movimento: recupera 1d8+Vig PV ou PE. Requer ameaça presente.', prereq: null },
      { nome: 'Parede de Carne', desc: 'Seu corpo fornece cobertura leve (+5 na Defesa) para aliados adjacentes.', prereq: (c) => (c.atributos['Vigor'] ?? 1) >= 3 || (c.atributos['Força'] ?? 1) >= 3, prereqText: 'Vig 3 ou For 3' },
    ],
    Especialista: [
      { nome: 'Adepto do Escuro', desc: 'Ignora camuflagem leve e total por escuridão. +2 em testes de investigação em penumbra.', prereq: null },
      { nome: 'Saudosista Hi-Tech', desc: '+5 em Tecnologia com aparelhos anteriores aos anos 2000; faz gambiarras para integrá-los aos digitais.', prereq: null },
      { nome: 'Treinado nas Telas', desc: 'Em testes de Iniciativa ou Reflexos, 2 PE: usa Intelecto em vez de Agilidade.', prereq: null },
    ],
    Ocultista: [
      { nome: 'Meditação Ocultista', desc: 'Nova ação de interlúdio: meditar. Recupera PE igual ao dobro do seu limite de PE por turno (modificado pela condição de descanso).', prereq: null },
      { nome: 'Ruído de Comunicação', desc: 'Reação e 4 PE: inverte um efeito de dados (bônus vira penalidade ou vice-versa) em um alvo em alcance curto, até o fim da cena.', prereq: null },
    ],
  },

  poderesGerais: [
    { nome: 'Apaixonado por Veículos', desc: 'Treinamento em Pilotagem (ou +2). +1d20 em testes para garantir a segurança do veículo.', prereq: (c) => (c.atributos['Agilidade'] ?? 1) >= 2, prereqText: 'Agi 2' },
    { nome: 'Catálogo de Criaturas Ambulante', desc: '+5 em Ocultismo para identificar criaturas paranormais, mesmo sem vê-las (apenas por vestígios).', prereq: null },
    { nome: 'Desafiar o Ego', desc: 'Uma vez por rodada, reação e 1 PE ao ver um aliado atacar: se acertar, dano extra igual à sua Presença; se errar, recupera o PE.', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 2, prereqText: 'Pre 2' },
    { nome: 'Direção Defensiva', desc: 'Treinamento em Pilotagem (ou +2). Dirigindo, todos no veículo recebem +2 na Defesa e em resistências.', prereq: null },
  ],

  poderesParanormais: [
    { nome: 'Ácido Corrosivo', elemento: 'Energia', desc: '1 PE: ácido nas mãos até o fim da cena — +2 em ataques desarmados, +5 no dano desarmado, dano vira químico. Pode imbuir arma corpo a corpo (não amaldiçoada é destruída no fim da cena).', afinidade: 'Bônus mudam para +4 em ataques e +10 no dano.' },
    { nome: 'Dead Man Switch', elemento: 'Conhecimento', desc: 'Machucado, escolha um alvo em alcance médio e uma perícia treinada: ele recebe seu grau de treinamento nela até você se recuperar (ou morrer).', afinidade: 'Até três alvos e uma perícia adicional; se você morrer, dura até o fim da missão.' },
    { nome: 'Paralinguística Ampliada', elemento: 'Conhecimento', desc: '+5 para compreender "linguagens" do Outro Lado. Aprende o ritual Compreensão Paranormal (ou custo –1 PE se já conhecer).', afinidade: 'Bônus +10 e efeito permanente de Compreensão Paranormal em forma discente.' },
  ],

  trilhas: {
    Ocultista: [{ nome: 'Criptologista do Oculto', desc: 'Estudioso das linguagens do Outro Lado: mestre na criação e uso de Selos Paranormais.' }],
  },

  trilhaPoderes: {
    Ocultista: {
      'Criptologista do Oculto': [
        { nex: 10, nome: 'Método Intuitivo', desc: 'Recebe o poder Criar Selo (ou dobra o máximo de selos). Cria 2 selos por ação de interlúdio (+1 por habilidade desta trilha adquirida).' },
        { nex: 40, nome: 'Caligrafia Eficiente', desc: 'Selos seus: o teste para usar ritual desconhecido muda para Ocultismo DT 10 + custo. +5 para identificar rituais.' },
        { nex: 65, nome: 'Decifrar à Distância', desc: 'Usa Selos sem empunhar nem ler em voz alta (alcance curto). +5 para compreender linguagens do Outro Lado.' },
        { nex: 99, nome: 'Selo Supremo', desc: 'Selos seus dispensam testes. Rituais dos seus Selos: DT +5, +3 dados de dano e formas avançadas sem custo adicional.' },
      ],
    },
  },

  itens: [
    { nome: 'Câmera Filmadora', grupo: 'Acessório', categoria: 0, espacos: 1, desc: 'Utensílio: +2 em Investigação e Percepção; funciona como lanterna e visão noturna.' },
  ],

  itensAmaldicoados: [
    { nome: 'Faixas da Vidência', elemento: 'Morte', categoria: 3, desc: 'Vestimenta: +5 na Defesa/resistências contra origens em alcance curto, –5 contra origens além de 9m. +2 em Intimidação.' },
    { nome: 'Joias da Mente', elemento: 'Conhecimento', categoria: 3, desc: 'Vestimenta (par): +2 em Diplomacia e resistência mental 10.' },
    { nome: 'Larva da Fúria', elemento: 'Sangue', categoria: 2, desc: 'Ingerível (ação de movimento): fúria até o fim da cena — +4 em ataques e dano corpo a corpo, mas sem ações que exijam calma.' },
    { nome: 'Skate Caótico', elemento: 'Energia', categoria: 2, desc: 'Skate amaldiçoado de Energia: transporte e utilidades caóticas (ver suplemento).' },
  ],
}
