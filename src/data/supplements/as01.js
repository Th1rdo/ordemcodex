// Arquivos Secretos 01 — Ritos & Maldições (v1.2)
export const AS01 = {
  id: 'as01',

  origens: [
    { nome: 'Ferido por Ritual', desc: 'Sua vida ordinária foi deturpada pelo Outro Lado após sofrer os efeitos de um ritual (escolha o elemento).', pericias: ['Ocultismo', '(Fortitude/Vontade/Reflexos conforme o elemento)'], poder: 'Mácula Ritualística', poderDesc: 'A entidade o marcou com um ritual de 1º círculo do elemento, que você aprende. Uma vez por cena, pode conjurá-lo sem gastar PE. Não conta no limite de rituais. Sofre –1d20 em resistências contra efeitos desse elemento.' },
    { nome: 'Transtornado Arrependido', desc: 'Você caminhou entre os Transtornados e se libertou, mas ainda sente o Sangue sussurrando na carne.', pericias: ['Luta', 'Ocultismo'], poder: 'Sofrimento de Sangue', poderDesc: 'RD 2/mental; +1 para cada dois rituais ou poderes paranormais de Sangue que possua. Sua condição de descanso é sempre uma categoria pior.' },
  ],

  poderesClasse: {
    Ocultista: [
      { nome: 'Acostumado à Maldição de (Elemento)', desc: 'Escolha um elemento (exceto Medo): ao falhar em testes do preço da maldição de itens amaldiçoados desse elemento, você não perde Sanidade.', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 2 && (c.nex ?? 5) >= 25, prereqText: 'Int 2, conjurar ritual de 2º círculo' },
      { nome: 'Ritual Intenso', desc: 'Você soma sua Presença nas rolagens de dano e de cura de seus rituais.', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 2, prereqText: 'Pre 2' },
      { nome: 'Saúde Sobrenatural', desc: 'Uma vez por cena, ação de movimento e 3 PE: PV temporários iguais a Presença × 10 (até o fim da cena).', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 2 && (c.atributos['Presença'] ?? 1) >= 2, prereqText: 'Int 2, Pre 2, conjurar ritual de 1º círculo' },
      { nome: 'Dominar Habilidade Ritualística', desc: 'Recebe a primeira habilidade de uma trilha de Ocultista que não a sua (a segunda, se já tiver Versatilidade nela). Pode ser escolhido uma segunda vez. Requer o NEX necessário para a habilidade.', prereq: null, prereqText: 'Escolhido pelo Outro Lado', repeatable: true },
    ],
  },

  poderesGerais: [
    { nome: 'Habilidade Aprimorada', desc: 'Escolha uma habilidade ou ritual com DT: a DT aumenta em +2. Pode ser escolhido outras vezes (até duas para a mesma habilidade, total +5).', prereq: null, repeatable: true },
    { nome: 'Cicatrizes Expostas', desc: 'Ação de movimento para expor sua cicatriz: +1d8 de dano do mesmo tipo em todo dano causado, mas –1d20 em Vontade e testes que exijam calma, até o fim da cena.', prereq: null, prereqText: 'Ter cicatrizes' },
    { nome: 'Curiosidade Oculta', desc: 'Treinamento em Ocultismo (ou +2). Em testes de Vontade, gaste 2 PE para trocar a perícia por Ocultismo.', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 2, prereqText: 'Int 2' },
    { nome: 'Instintos Urbanos', desc: 'Treinamento em Crime (ou +2). Ao entrar em ambiente fechado, Crime DT 20: identifica rota de fuga (ação de movimento extra na fuga e +2 na Defesa).', prereq: (c) => (c.atributos['Agilidade'] ?? 1) >= 2, prereqText: 'Agi 2' },
    { nome: 'Especialista Esotérico', desc: 'Ao conjurar um ritual, pode combinar os efeitos de até três catalisadores ritualísticos diferentes.', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 3 && (c.poderes ?? []).includes('Domínio Esotérico'), prereqText: 'Int 3, conjurar ritual de 2º círculo, Domínio Esotérico (SaH)' },
  ],

  trilhas: {
    Ocultista: [
      { nome: 'Maledictólogo', desc: 'Estudioso de maldições: identifica, compreende, reproduz e transfere maldições de itens amaldiçoados.' },
    ],
  },

  trilhaPoderes: {
    Ocultista: {
      Maledictólogo: [
        { nex: 10, nome: 'Identificação Macabra', desc: 'Em testes para identificar item amaldiçoado ou ritual, 1 PE: +1d10. Identifica itens amaldiçoados como ação completa com apenas –1d20.' },
        { nex: 40, nome: 'Compreensão de Maldições', desc: 'Ação de interlúdio e 3 PE + Ocultismo (DT 10 +5/categoria): aprende ritual contido no item (perdendo 1d4+1 SAN) ou transfere maldições para outro item/tatuagem. Falha: perde 2d4+2 SAN.' },
        { nex: 65, nome: 'Reproduzir Maldição', desc: 'Memoriza uma maldição com a qual já lidou (3 PE) e a aplica a um novo item até o fim da missão (Ocultismo DT 10 +5/categoria; custos em SAN).' },
        { nex: 99, nome: 'Maldição Suprema', desc: 'Ao usar Reproduzir Maldição, considera o item três categorias efetivas a menos, permitindo empilhar maldições até categoria IV.' },
      ],
    },
  },

  poderesParanormais: [
    { nome: 'Ferro Maculado', elemento: 'Sangue', desc: 'Ao atacar com arma de disparo, gaste 2 PV: a munição se torna amaldiçoada e causa +1d6 de Sangue (multiplicado em críticos).', afinidade: 'O dano muda para +1d8 de Sangue.' },
    { nome: 'Sangue Corrosivo', elemento: 'Sangue', desc: 'Ação de movimento e 1 PE: sangue corrosivo até o fim da cena — quem o ferir adjacente sofre 1d10 de Sangue.', afinidade: 'O dano muda para +2d10 de Sangue.' },
    { nome: 'Placas Sanguinolentas', elemento: 'Sangue', desc: 'Ao conjurar um ritual de Sangue, recebe Defesa igual ao círculo do ritual até seu próximo turno.', prereqText: 'Conjurar ritual de Sangue', afinidade: 'O bônus passa a ser círculo +2.' },
    { nome: 'Sangue Prazeroso', elemento: 'Sangue', desc: 'Enquanto estiver machucado, você recebe resistência a dano 5.', prereqElemento: { elemento: 'Sangue', count: 1 }, afinidade: 'Machucado, também recebe +20 PV temporários (uma vez por cena).' },
  ],

  rituais: {
    Sangue: {
      2: [{ nome: 'Passagem de Conhecimento', execucao: 'completa', alcance: 'toque', alvo: '1 pessoa', duracao: 'cena', resistencia: 'Vontade evita', desc: 'Transfere sua consciência para o corpo do alvo (sobrepor a mente dele ou troca completa), trocando atributos físicos. Ritual de Sangue E Conhecimento.', discente: '(+3 PE) alcance curto, duração 1 dia.', verdadeiro: '(+7 PE) alcance médio, duração permanente. Requer 4º círculo e afinidade.' }],
      4: [{ nome: 'Passagem de Conhecimento Expandido', execucao: '1 dia', alcance: 'curto', alvo: 'até 10 pessoas', duracao: 'permanente', desc: 'Versão de Agatha Volkomenn: troca consciências entre dois grupos de pessoas. Requer conhecer Passagem de Conhecimento. Ritual de Sangue E Conhecimento.' }],
    },
  },

  itensAmaldicoados: [
    { nome: 'Arpão do Pescador', elemento: 'Sangue', categoria: 3, desc: 'Arma simples 1 mão arremessável: 1d8 perfuração + 1d12 Sangue, crítico 20/x3. Arremessado, deixa o alvo lento até remover (ação padrão + Atletismo DT For).' },
    { nome: 'Combustível de Sangue', elemento: 'Sangue', categoria: 3, desc: 'Munição para lança-chamas: troca o dano para Sangue e aumenta os dados em uma categoria (d6→d8).' },
    { nome: 'Marreta Transtornada', elemento: 'Sangue', categoria: 4, desc: 'Arma tática 2 mãos: 2d10 impacto + 2d12 Sangue, crítico 20/x4. Empunhar/atacar custa 1d6 PV. Crítico: Fortitude (DT For) ou o alvo fica fraco (depois debilitado).' },
  ],
}
