// Sobrevivendo ao Horror (v1.2) — conteúdo de jogador como pacote opcional.
// Apenas conteúdo (origens, trilhas, poderes, rituais, armas, itens). Regras opcionais
// do suplemento (cenas de perseguição/furtividade, Sobrevivente, NEX duplo etc.) não
// são implementadas; poderes que as referenciam mantêm o texto original.

export const SOBREVIVENDO = {
  id: 'sobrevivendo',

  origens: [
    { nome: 'Amigo dos Animais', desc: 'Você desenvolveu uma conexão muito forte com os animais e leva a vida ao lado de um melhor amigo de quatro patas.', pericias: ['Adestramento', 'Percepção'], poder: 'Companheiro Animal', poderDesc: 'Você entende as intenções de animais e pode usar Adestramento para mudar a atitude deles. Possui um melhor amigo: aliado que fornece +2 em uma perícia; em NEX 35% fornece o bônus de um tipo de aliado e em NEX 70% a habilidade do tipo. Se ele morrer, você perde 10 SAN permanentemente.' },
    { nome: 'Astronauta', desc: 'Explorador espacial acostumado à pressão extrema. Foi na escuridão do espaço que você descobriu que não estamos sozinhos.', pericias: ['Ciências', 'Fortitude'], poder: 'Acostumado ao Extremo', poderDesc: 'Quando sofre dano de fogo, de frio ou mental, pode gastar 1 PE para reduzir esse dano em 5. Cada uso adicional na mesma cena custa +1 PE.' },
    { nome: 'Chef do Outro Lado', desc: 'Você descobriu um talento tabu: cozinhar e ingerir entidades do Outro Lado.', pericias: ['Ocultismo', 'Profissão (cozinheiro)'], poder: 'Fome do Outro Lado', poderDesc: 'Usa partes de criaturas como ingredientes (Categoria I, 0,5 espaço). Ação de interlúdio + 1 ingrediente: prato que dá RD 10 contra o elemento da criatura (Profissão DT 15; falha causa vulnerabilidade). Cada refeição: –1 SAN permanente.' },
    { nome: 'Colegial', desc: 'Aluno do colegial que descobriu que sua verdadeira força está nos amigos.', pericias: ['Atualidades', 'Tecnologia'], poder: 'Poder da Amizade', poderDesc: 'Escolha um personagem como melhor amigo. Em alcance médio dele (trocando olhares), você recebe +2 em todos os testes de perícia. Se ele morrer, –1 PE por 5% de NEX até o fim da missão.' },
    { nome: 'Cosplayer', desc: 'Apaixonado pela arte do cosplay, você colocou sua arte e resiliência a serviço da Ordem.', pericias: ['Artes', 'Vontade'], poder: 'Não É Fantasia, É Cosplay!', poderDesc: 'Testes de disfarce usam Artes em vez de Enganação. Usando um cosplay relacionado ao teste, recebe +2.' },
    { nome: 'Diplomata', desc: 'Habilidades sociais e políticas eram suas ferramentas, até descobrir entidades com as quais não se negocia.', pericias: ['Atualidades', 'Diplomacia'], poder: 'Conexões', poderDesc: '+2 em Diplomacia. Se puder contatar um NPC capaz de auxiliar, gaste 10 minutos e 2 PE para substituir um teste de perícia relacionada ao conhecimento desse NPC por um teste de Diplomacia.' },
    { nome: 'Explorador', desc: 'Interessado por história e geografia, suas trilhas e explorações fortaleceram seu corpo.', pericias: ['Fortitude', 'Sobrevivência'], poder: 'Manual do Sobrevivente', poderDesc: 'Ao resistir a armadilhas, clima, doenças, fome, sede, fumaça, sono, sufocamento ou veneno (incluindo paranormais), gaste 2 PE para +5. Condições de sono precárias contam como normais.' },
    { nome: 'Experimento', desc: 'Cobaia de um experimento que causou alterações permanentes em seu corpo.', pericias: ['Atletismo', 'Fortitude'], poder: 'Mutação', poderDesc: 'Resistência a dano 2 e +2 em uma perícia baseada em Força, Agilidade ou Vigor. Sofre –1d20 em Diplomacia.' },
    { nome: 'Fanático por Criaturas', desc: 'Obcecado pelo sobrenatural, um "caçador de monstros" dedicado a localizar as feras dos rumores.', pericias: ['Investigação', 'Ocultismo'], poder: 'Conhecimento Oculto', poderDesc: 'Identifica criaturas a partir de imagens, rastros ou pistas com Ocultismo. Ao passar em um teste para identificar criatura, recebe +2 em todos os testes contra ela até o fim da missão.' },
    { nome: 'Fotógrafo', desc: 'Artista visual que encontrou o paranormal através de sua lente.', pericias: ['Artes', 'Percepção'], poder: 'Através da Lente', poderDesc: 'Em testes de Investigação/Percepção ou para adquirir pistas através de uma câmera ou fotos, gaste 2 PE para +5.' },
    { nome: 'Inventor Paranormal', desc: 'Um "cientista louco" que usa o desconhecido em suas invenções.', pericias: ['Profissão (engenheiro)', 'Vontade'], poder: 'Invenção Paranormal', poderDesc: 'Escolha um ritual de 1º círculo: você tem um invento (categoria 0, 1 espaço) que o executa sem custo de PE (Profissão DT 15, +5 por ativação na missão; falha enguiça). Manutenção em interlúdio conserta.' },
    { nome: 'Jovem Místico', desc: 'Profunda conexão com a espiritualidade que o tornou suscetível ao paranormal.', pericias: ['Ocultismo', 'Religião'], poder: 'A Culpa é das Estrelas', poderDesc: 'Escolha um número da sorte (1–6). No início de cada cena, 1 PE e 1d6: se cair no número, +2 em perícias até o fim da cena; senão, adiciona mais um número da sorte para a próxima vez.' },
    { nome: 'Legista do Turno da Noite', desc: 'No necrotério à noite, você descobriu que nem sempre a morte é o fim.', pericias: ['Ciências', 'Medicina'], poder: 'Luto Habitual', poderDesc: 'Metade do dano mental por cenas da rotina de um legista (cadáveres, mortes). Em Medicina para primeiros socorros ou necropsia, gaste 2 PE para +5.' },
    { nome: 'Mateiro', desc: 'Guia florestal ou entusiasta da vida selvagem: a natureza foi sua porta para o Outro Lado.', pericias: ['Percepção', 'Sobrevivência'], poder: 'Mapa Celeste', poderDesc: 'Vendo o céu, sempre sabe as direções e chega a qualquer lugar já visitado. Em Sobrevivência, gaste 2 PE para rolar novamente e escolher o melhor. Sono precário conta como normal.' },
    { nome: 'Mergulhador', desc: 'Aventureiro subaquático. No dia em que você olhou para o abismo, ele encarou de volta.', pericias: ['Atletismo', 'Fortitude'], poder: 'Fôlego de Nadador', poderDesc: '+5 PV e prende a respiração por rodadas iguais ao dobro do Vigor. Ao passar em Atletismo para natação, avança o deslocamento normal.' },
    { nome: 'Motorista', desc: 'Condutor profissional cujas viagens cruzaram o caminho do Outro Lado.', pericias: ['Pilotagem', 'Reflexos'], poder: 'Mãos no Volante', poderDesc: 'Sem penalidades em ataques em veículo em movimento. Pilotando, gaste 2 PE para +5 em testes de Pilotagem ou resistência.' },
    { nome: 'Nerd Entusiasta', desc: 'Especialista em videogames, RPGs e ficção científica — sua obsessão chamou a atenção da Ordem.', pericias: ['Ciências', 'Tecnologia'], poder: 'O Inteligentão', poderDesc: 'O bônus da ação de interlúdio ler aumenta em +1 dado (de +1d6 para +2d6).' },
    { nome: 'Profetizado', desc: 'Você sabe como vai morrer — por pesadelos ou visões, conhece sua "cena de morte".', pericias: ['Vontade', '(uma relacionada à premonição)'], poder: 'Luta ou Fuga', poderDesc: '+2 em Vontade. Quando surge uma referência à sua premonição, recebe +2 PE temporários até o fim da cena.' },
    { nome: 'Psicólogo', desc: 'Especialista da mente que descobriu que algumas aflições têm origens sombrias.', pericias: ['Intuição', 'Profissão (psicólogo)'], poder: 'Terapia', poderDesc: 'Usa Profissão (psicólogo) como Diplomacia. Uma vez por rodada, quando você ou aliado em alcance curto falha em resistência contra dano mental, gaste 2 PE para substituir pelo resultado de um teste de Profissão (psicólogo).' },
    { nome: 'Repórter Investigativo', desc: 'Sempre em busca da verdade por trás dos acontecimentos.', pericias: ['Atualidades', 'Investigação'], poder: 'Encontrar a Verdade', poderDesc: 'Usa Investigação no lugar de Diplomacia para persuadir e mudar atitude. Em Investigação, gaste 2 PE para +5.' },
  ],

  poderesClasse: {
    Combatente: [
      { nome: 'Apego Angustiado', desc: 'Você não fica inconsciente por estar morrendo, mas ao terminar uma rodada nessa condição e consciente, perde 2 SAN.', prereq: null },
      { nome: 'Caminho para Forca', desc: 'Na ação sacrifício (perseguição), 1 PE fornece +2d20 aos testes dos outros; na ação chamar atenção (furtividade), 1 PE diminui a visibilidade dos aliados em –2.', prereq: null },
      { nome: 'Ciente das Cicatrizes', desc: 'Em testes para encontrar pistas relacionadas a armas ou ferimentos, pode usar Luta ou Pontaria no lugar da perícia original.', prereq: (c) => c.pericias.includes('Luta') || c.pericias.includes('Pontaria'), prereqText: 'Treinado em Luta ou Pontaria' },
      { nome: 'Correria Desesperada', desc: '+3m de deslocamento e +1d20 em testes de perícia para fugir em uma perseguição.', prereq: null },
      { nome: 'Engolir o Choro', desc: 'Não sofre penalidades por condições em testes de perícia para fugir e em testes de Furtividade.', prereq: null },
      { nome: 'Instinto de Fuga', desc: 'Quando uma cena de perseguição começa, recebe +2 em todos os testes de perícia durante a cena.', prereq: (c) => c.pericias.includes('Intuição'), prereqText: 'Treinado em Intuição' },
      { nome: 'Mochileiro', desc: 'Limite de carga +5 espaços e pode se beneficiar de uma vestimenta adicional.', prereq: (c) => (c.atributos['Vigor'] ?? 1) >= 2, prereqText: 'Vig 2' },
      { nome: 'Paranoia Defensiva', desc: 'Uma vez por cena, 1 rodada e 3 PE: você e cada aliado escolhe +5 na Defesa contra o próximo ataque ou +5 em um teste de perícia até o fim da cena.', prereq: null },
      { nome: 'Sacrificar os Joelhos', desc: 'Uma vez por cena de perseguição, na ação esforço extra, gaste 2 PE para passar automaticamente no teste.', prereq: (c) => c.pericias.includes('Atletismo'), prereqText: 'Treinado em Atletismo' },
      { nome: 'Sem Tempo, Irmão', desc: 'Uma vez por cena de investigação, ao facilitar investigação, passa automaticamente no teste de auxílio, mas faz uma rolagem adicional na tabela de eventos.', prereq: null },
      { nome: 'Valentão', desc: 'Usa Força no lugar de Presença para Intimidação. Uma vez por cena, 1 PE: teste de Intimidação para assustar como ação livre.', prereq: null },
    ],
    Especialista: [
      { nome: 'Acolher o Terror', desc: 'Você pode se entregar para o medo uma vez por sessão de jogo adicional.', prereq: null },
      { nome: 'Contatos Oportunos', desc: 'Ação de interlúdio: recebe um aliado de um tipo à sua escolha até o fim da missão (um por vez).', prereq: (c) => c.pericias.includes('Crime'), prereqText: 'Treinado em Crime' },
      { nome: 'Disfarce Sutil', desc: 'Ao se disfarçar com Enganação, gaste 1 PE para fazê-lo como ação completa e sem kit (com kit, +5).', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 2 && c.pericias.includes('Enganação'), prereqText: 'Pre 2, treinado em Enganação' },
      { nome: 'Esconderijo Desesperado', desc: 'Sem –1d20 em Furtividade por se mover no deslocamento normal. Em cenas de furtividade, esconder-se reduz a visibilidade em –2.', prereq: null },
      { nome: 'Especialista Diletante', desc: 'Aprende um poder que não pertença à sua classe (exceto poderes de trilha ou paranormais), cumprindo pré-requisitos.', prereq: (c) => (c.nex ?? 5) >= 30, prereqText: 'NEX 30%' },
      { nome: 'Flashback', desc: 'Escolha uma origem que não seja a sua: você recebe o poder dessa origem.', prereq: null },
      { nome: 'Leitura Fria', desc: 'Uma vez por interlúdio, faça 3 perguntas pessoais sobre um NPC; cada não-resposta dá 2 PE temporários até o fim da missão.', prereq: (c) => c.pericias.includes('Intuição'), prereqText: 'Treinado em Intuição' },
      { nome: 'Mãos Firmes', desc: 'Em Furtividade para esconder-se ou ação discreta com objeto, gaste 2 PE para +1d20.', prereq: (c) => c.pericias.includes('Furtividade'), prereqText: 'Treinado em Furtividade' },
      { nome: 'Plano de Fuga', desc: 'Usa Intelecto no lugar de Força para criar obstáculos em perseguição. Uma vez por cena, 2 PE: sucesso automático nessa ação.', prereq: null },
      { nome: 'Remoer Memórias', desc: 'Uma vez por cena, em teste de perícia de Int ou Pre, gaste 2 PE para substituí-lo por um teste de Intelecto (DT 15).', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 1, prereqText: 'Int 1' },
      { nome: 'Resistir à Pressão', desc: 'Uma vez por cena de investigação, 5 PE: urgência +1 rodada e todos recebem +2 em perícias nessa rodada.', prereq: (c) => c.pericias.includes('Investigação'), prereqText: 'Treinado em Investigação' },
    ],
    Ocultista: [
      { nome: 'Deixe os Sussurros Guiarem', desc: 'Uma vez por cena, 2 PE e uma rodada: +2 em perícias de investigação até o fim da cena, mas cada falha em perícia custa 1 SAN.', prereq: null },
      { nome: 'Domínio Esotérico', desc: 'Ao lançar um ritual, pode combinar os efeitos de até dois catalisadores ritualísticos diferentes.', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 3, prereqText: 'Int 3' },
      { nome: 'Estalos Macabros', desc: 'Em ações para atrapalhar a atenção (distrair, fintar), 1 PE: usa Ocultismo no lugar da perícia (+5 contra pessoas/animais).', prereq: null },
      { nome: 'Minha Dor me Impulsiona', desc: 'Em Acrobacia, Atletismo ou Furtividade, 1 PE: +1d6 no teste. Requer estar com pelo menos 5 de dano nos PV.', prereq: (c) => (c.atributos['Vigor'] ?? 1) >= 2, prereqText: 'Vig 2' },
      { nome: 'Nos Olhos do Monstro', desc: 'Em cena com criatura paranormal, 1 rodada e 3 PE encarando-a: +5 em testes contra ela (exceto ataque) até o fim da cena.', prereq: null },
      { nome: 'Olhar Sinistro', desc: 'Usa Presença no lugar de Intelecto para Ocultismo e pode usar Ocultismo para coagir.', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 1, prereqText: 'Pre 1' },
      { nome: 'Sentido Premonitório', desc: '3 PE: déjà vu de uma rodada do futuro (eventos de investigação, ações de inimigos em furtividade/perseguição). 1 PE/rodada para manter. Sem efeito em combate.', prereq: null },
      { nome: 'Sincronia Paranormal', desc: 'Ação padrão e 2 PE: sincronia mental com personagens que sobreviveram ao paranormal com você; distribua dados de bônus iguais à sua Presença por rodada (perícias de Int/Pre). 1 PE/rodada.', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 2, prereqText: 'Pre 2' },
      { nome: 'Traçado Conjuratório', desc: '1 PE e ação completa: símbolo no chão (1,5m). Dentro dele: +2 em Ocultismo e resistência, e DT dos seus rituais +2. Dura a cena.', prereq: null },
    ],
  },

  trilhas: {
    Combatente: [
      { nome: 'Agente Secreto', desc: 'Treinado para operações confidenciais, com documentos especiais, lábia e disfarces.' },
      { nome: 'Caçador', desc: 'Reúne informações para caçar as coisas que espreitam na escuridão.' },
      { nome: 'Monstruoso', desc: 'Desfigura o próprio corpo para que as Entidades o invadam. Caminho sem volta que cobra a humanidade (em NEX 75%+ o personagem é banido pela Ordem).' },
    ],
    Especialista: [
      { nome: 'Bibliotecário', desc: 'Vasto conhecimento como a chave dos segredos — e das situações desesperadoras.' },
      { nome: 'Perseverante', desc: 'O último sobrevivente: resiliência e fugas obstinadas.' },
      { nome: 'Muambeiro', desc: 'Produz e encontra os itens certos em qualquer ocasião.' },
    ],
    Ocultista: [
      { nome: 'Exorcista', desc: 'Fé como escudo e palavras como espada contra o paranormal.' },
      { nome: 'Possuído', desc: 'O paranormal escolheu você — e aflora cada vez mais em seu interior.' },
      { nome: 'Parapsicólogo', desc: 'Usa o paranormal para sanar a mente humana. Requer treino em Profissão (psicólogo).' },
    ],
  },

  trilhaPoderes: {
    Combatente: {
      'Agente Secreto': [
        { nex: 10, nome: 'Carteirada', desc: 'Treinamento em Diplomacia ou Enganação (ou +2). Recebe documentos com privilégios jurídicos especiais a cada missão (acesso a locais restritos, porte de armas, jurisdição).' },
        { nex: 40, nome: 'O Sorriso', desc: '+2 em Diplomacia e Enganação; ao falhar nelas, 2 PE para repetir a rolagem (uma vez por teste). Uma vez por cena, Diplomacia para acalmar a si mesmo.' },
        { nex: 65, nome: 'Método Investigativo', desc: 'Urgência das investigações +1 rodada. 2 PE: transforma um evento de investigação em "sem evento" (custo +2 PE por uso adicional).' },
        { nex: 99, nome: 'Multifacetado', desc: 'Uma vez por cena, 5 SAN: recebe todas as habilidades até NEX 65% de outra trilha de combatente ou especialista até o fim da cena.' },
      ],
      Caçador: [
        { nex: 10, nome: 'Rastrear o Paranormal', desc: 'Treinamento em Sobrevivência (ou +2). Usa-a no lugar de Ocultismo para identificar criaturas e de Investigação/Percepção para rastros paranormais.' },
        { nex: 40, nome: 'Estudar Fraquezas', desc: 'Ação de interlúdio com uma pista ligada a um ser: recebe uma informação útil e +1 em testes contra ele por pista, até o fim da missão.' },
        { nex: 65, nome: 'Atacar das Sombras', desc: 'Sem penalidade de Furtividade por mover-se normalmente; com arma silenciosa, penalidade por atacar reduzida para –1d20. Visibilidade inicial –1.' },
        { nex: 99, nome: 'Estudar a Presa', desc: 'Estudar Fraquezas pode marcar um tipo de ser como presa: +1d20 em perícias, +1 em margem de ameaça e multiplicador, resistência a dano 5 contra ele.' },
      ],
      Monstruoso: [
        { nex: 10, nome: 'Ser Amaldiçoado', desc: 'Treinamento em Ocultismo (ou +2). Escolha um elemento; executando uma etapa ritualística diária, recebe resistências e efeitos do elemento (com penalidades em perícias).' },
        { nex: 40, nome: 'Ser Macabro', desc: 'Resistência da etapa ritualística aumenta para 10 (penalidade –2d20) e efeitos adicionais por elemento (ex.: usar outro atributo para PE).' },
        { nex: 65, nome: 'Ser Assustador', desc: 'Resistência aumenta para 15, Presença –1 permanente e efeitos maiores por elemento (mordida, retorno da morte, dados de bônus, absorver energia).' },
        { nex: 99, nome: 'Ser Aterrorizante', desc: 'Efeitos permanentes, resistência 20, conta como criatura paranormal e recebe o poder/ritual supremo do elemento (Forma Monstruosa, Fim Inevitável, ritual de 4º círculo ou Deflagração de Energia).' },
      ],
    },
    Especialista: {
      Bibliotecário: [
        { nex: 10, nome: 'Conhecimento Prático', desc: 'Em testes de perícia (exceto Luta/Pontaria), 2 PE: muda o atributo-base para Int. Com Conhecimento Aplicado, custo –1 PE.' },
        { nex: 40, nome: 'Leitor Contumaz', desc: 'Dados da ação ler viram 1d8 e valem para qualquer perícia. 2 PE: +1 dado ao usar o bônus.' },
        { nex: 65, nome: 'Rato de Biblioteca', desc: 'Em ambiente com muitos livros, alguns minutos (ou 1 rodada em investigação): benefícios de ler ou revisar caso. Uma vez por cena.' },
        { nex: 99, nome: 'A Força do Saber', desc: 'Intelecto +1 e soma Int no total de PE. Escolha uma perícia: seu atributo-base vira Intelecto.' },
      ],
      Perseverante: [
        { nex: 10, nome: 'Soluções Improvisadas', desc: '2 PE: rola novamente 1 dado de um teste recém-realizado (uma vez por teste) e fica com o melhor.' },
        { nex: 40, nome: 'Fuga Obstinada', desc: '+1d20 em testes para fugir. Em perseguições, como presa, acumula até 4 falhas antes de ser pego.' },
        { nex: 65, nome: 'Determinação Inquestionável', desc: 'Uma vez por cena, 5 PE e ação padrão: remove uma condição de medo, mental ou de paralisia.' },
        { nex: 99, nome: 'Só Mais um Passo...', desc: 'Uma vez por rodada, ao ser reduzido a 0 PV, 5 PE: fica com 1 PV (não funciona contra dano massivo).' },
      ],
      Muambeiro: [
        { nex: 10, nome: 'Mascate', desc: 'Treinamento em Profissão (armeiro/engenheiro/químico), +5 de capacidade de carga e DT de itens improvisados –10.' },
        { nex: 40, nome: 'Fabricação Própria', desc: 'Metade do tempo para fabricar itens mundanos (2 consumíveis por ação de manutenção; 1 ação para equipamentos).' },
        { nex: 65, nome: 'Laboratório de Campo', desc: 'Treinamento extra em Profissão (ou +5). Fabrica e conserta itens paranormais em campo (3 ações de interlúdio).' },
        { nex: 99, nome: 'Achado Conveniente', desc: 'Ação completa e 5 PE: "produz" um item de até categoria III (exceto paranormais), funcional até o fim da cena.' },
      ],
    },
    Ocultista: {
      Exorcista: [
        { nex: 10, nome: 'Revelação do Mal', desc: 'Treinamento em Religião (ou +2). Usa-a no lugar de Investigação/Percepção para traços paranormais e no lugar de Ocultismo.' },
        { nex: 40, nome: 'Poder da Fé', desc: 'Veterano em Religião (ou +1d20). Ao falhar em resistência, 2 PE: repete o teste usando Religião (aceita o novo resultado).' },
        { nex: 65, nome: 'Parareligiosidade', desc: 'Ao conjurar um ritual, +2 PE: adiciona efeito equivalente a um catalisador ritualístico à sua escolha.' },
        { nex: 99, nome: 'Chagas da Resistência', desc: 'Quando sua Sanidade seria reduzida a 0, gaste 10 PV para ficar com SAN 1.' },
      ],
      Possuído: [
        { nex: 10, nome: 'Poder Não Desejado', desc: 'Novos poderes de ocultista viram Transcender. Reserva de pontos de possessão (3 +2 por Transcender): cada PP recupera 10 PV ou 2 PE (limite por turno = Presença). Recupera 1 PP por ação dormir.' },
        { nex: 40, nome: 'As Sombras Dentro de Mim', desc: 'Recupera 2 PP por dormir. 2 PE: +1d20 em Acrobacia, Atletismo e Furtividade por uma rodada.' },
        { nex: 65, nome: 'Ele Me Ensina', desc: 'Escolha entre transcender ou receber o primeiro poder de uma trilha de ocultista que não a sua.' },
        { nex: 99, nome: 'Tornamo-nos Um', desc: 'Conforme a afinidade: Presente da Obsessão (Sangue), do Tempo (Morte), do Saber (Conhecimento) ou do Espaço (Energia) — poderes de 6 PE por rodada/cena.' },
      ],
      Parapsicólogo: [
        { nex: 10, nome: 'Terapia', desc: 'Usa Profissão (psicólogo) como Diplomacia. Uma vez por rodada, 2 PE: substitui resistência falha contra dano mental (sua ou de aliado próximo) por teste de Profissão (psicólogo).' },
        { nex: 40, nome: 'Palavras-chave', desc: 'Ao passar em teste para acalmar, gaste PE (até seu limite): cada 1 PE recupera 1 SAN da pessoa tratada.' },
        { nex: 65, nome: 'Reprogramação Mental', desc: '5 PE e ação de interlúdio: pessoa voluntária recebe um poder geral, da própria classe ou o primeiro de outra trilha até o próximo interlúdio.' },
        { nex: 99, nome: 'A Sanidade Está Lá Fora', desc: 'Ação de movimento e 5 PE: remove todas as condições de medo ou mentais de uma pessoa adjacente (incluindo você).' },
      ],
    },
  },

  poderesParanormais: [
    { nome: 'Espreitar da Besta', elemento: 'Sangue', desc: '+5 em Furtividade. Em perseguições, como caçador, pode usar Furtividade em vez de Atletismo. Ações discretas sem penalidade de –1d20.', afinidade: 'O bônus em Furtividade aumenta para +10.' },
    { nome: 'Instintos Sanguinários', elemento: 'Sangue', desc: 'Você recebe visão no escuro e faro.', afinidade: 'Não pode ser flanqueado, não fica desprevenido e +5 em resistência contra armadilhas.' },
    { nome: 'Antecipar Vitalidade', elemento: 'Morte', desc: 'Acumule cargas de antecipação (máx. = Vigor) para +1d20 em testes; cada carga impede recuperar PV em uma ação dormir.', afinidade: 'Limite +2 cargas e perde 2 cargas por ação dormir.' },
    { nome: 'Aura de Pavor', elemento: 'Morte', desc: '2 PE e ação de movimento: pessoa ou animal em alcance médio fica apavorado (Vontade DT Pre reduz para abalado). Uma vez por dia por alvo.', afinidade: 'DT +5 e afeta quaisquer pessoas ou animais escolhidos no alcance.' },
    { nome: 'Absorver Conhecimento', elemento: 'Conhecimento', desc: 'Empunhando uma fonte escrita, 1 PE e ação completa: obtém resposta armazenada na fonte. Com a ação ler, aumenta o dado de bônus em um passo.', afinidade: 'Rituais de Conhecimento com alvo 1 pessoa (tocando-a) custam –1 PE.' },
    { nome: 'Apatia Herege', elemento: 'Conhecimento', desc: 'Contra condições de medo, 2 PE: rola o teste novamente (aceita o segundo resultado).', prereqElemento: { elemento: 'Conhecimento', count: 1 }, afinidade: 'Pode usar após saber o resultado e escolher a melhor rolagem.' },
    { nome: 'Conexão Empática', elemento: 'Energia', desc: 'Ação completa e 2 PE: conversa com um objeto elétrico ligado (atitude indiferente; persuadível com Diplomacia).', prereqElemento: { elemento: 'Energia', count: 1 }, afinidade: '+5 em perícias de Int/Pre com o item.' },
    { nome: 'Valer-se do Caos', elemento: 'Energia', desc: 'Em um teste, receba +1d20; se falhar ou se o dado extra der 5 ou menos, perde 1d4 SAN.', afinidade: 'Só perde SAN em falha ou se o dado extra der 1 ou 2.' },
  ],

  // Novos rituais (resumo mecânico; custos por círculo padrão)
  rituais: {
    Sangue: {
      1: [{ nome: 'Esfolar', execucao: 'padrão', alcance: 'curto', alvo: '1 ser', duracao: 'instantânea', resistencia: 'Reflexos parcial', desc: 'Agulhas e lâminas rubras: 3d4+3 de corte e sangrando (resistir: metade e evita).', discente: '(+2 PE) alcance médio, dano 5d4+5, alvo explosão de 6m. Requer 2º círculo.', verdadeiro: '(+5 PE) alcance longo, 10d4+10, explosão 6m; resistir não evita a condição. Requer 3º círculo.' }],
      2: [{ nome: 'Sede de Adrenalina', execucao: 'reação', alcance: 'pessoal', alvo: 'você', duracao: 'instantânea', desc: 'Repete teste falho de Acrobacia/Atletismo usando Presença, ou reduz dano de impacto em 20 (fica 1 rodada atordoado). Uma vez por rodada.', discente: '(+3 PE) redução de impacto 40.', verdadeiro: '(+7 PE) redução 70. Requer 4º círculo e afinidade.' }],
      3: [{ nome: 'Odor da Caçada', execucao: 'padrão', alcance: 'pessoal', alvo: 'você', duracao: 'cena', desc: 'Recebe faro; em perseguições, +5 em Atletismo e sem perda de PV por esforço extra (contra alvos com odor). Depois: fome e sede.', discente: '(+4 PE) alcance toque, alvo 1 ser.', verdadeiro: '(+9 PE) alcance curto, até 5 seres. Requer afinidade.' }],
      4: [{ nome: 'Martírio de Sangue', execucao: 'padrão', alcance: 'pessoal', alvo: 'você', duracao: 'veja texto', desc: 'Forma bestial: faro, visão no escuro, cura acelerada 10, +10 em ataque/dano corpo a corpo e Defesa, 30 PV temporários. Ao fim da cena o personagem se torna permanentemente uma criatura de Sangue.', discente: '(+5 PE) bônus +20 e 50 PV temporários. Requer afinidade.' }],
    },
    Morte: {
      1: [{ nome: 'Apagar as Luzes', execucao: 'padrão', alcance: 'pessoal', alvo: 'você', duracao: 'instantânea', desc: 'Apaga fontes de luz em alcance curto; você recebe visão no escuro até o fim da cena.', discente: '(+2 PE) alcance longo. Requer 2º círculo.', verdadeiro: '(+5 PE) e até 5 outros seres recebem visão no escuro. Requer 3º círculo.' }],
      2: [{ nome: 'Língua Morta', execucao: 'padrão', alcance: 'toque', alvo: '1 cadáver', duracao: 'sustentada', desc: 'Cadáver responde 1 pergunta por rodada (máx. 3); ao final, vira esqueleto de Lodo.', discente: '(+3 PE) 4 rodadas; vira enraizado.', verdadeiro: '(+7 PE) 5 rodadas; vira marionete. Requer 4º círculo e afinidade.' }],
      3: [{ nome: 'Fedor Pútrido', execucao: 'padrão', alcance: 'pessoal', alvo: 'você', duracao: 'sustentada', desc: 'Funções biológicas param: +5 em Furtividade, +10 em Enganação para fingir-se de morto, –3d20 em Diplomacia. 1d4 de dano de Morte por rodada (ignora resistências).', discente: '(+4 PE) toque, 1 ser voluntário.', verdadeiro: '(+9 PE) curto, até 5 seres voluntários. Requer afinidade.' }],
      4: [{ nome: 'Singularidade Temporal', execucao: 'padrão', alcance: 'curto', alvo: '1 objeto não paranormal Médio', duracao: 'instantânea', resistencia: 'veja texto', desc: 'Avança um objeto ao estado máximo de decomposição (danificado ou destruído). Objeto em uso permite Fortitude para proteger.', discente: '(+5 PE) objeto Grande.', verdadeiro: '(+10 PE) objeto Enorme.' }],
    },
    Conhecimento: {
      1: [{ nome: 'Desfazer Sinapses', execucao: 'padrão', alcance: 'curto', alvo: '1 ser', duracao: 'instantânea', resistencia: 'Vontade parcial', desc: 'Inexiste neurônios: 2d6+2 de Conhecimento e frustrado por 1 rodada (resistir: metade e evita). Alvo precisa ter cérebro.', discente: '(+2 PE) alcance longo, 3d6+3, até 5 seres. Requer 2º círculo.', verdadeiro: '(+5 PE) alcance extremo, 8d6+8, condição esmorecido. Requer 3º círculo.' }],
      2: [{ nome: 'Aurora da Verdade', execucao: 'padrão', alcance: 'curto', alvo: 'esfera de 3m', duracao: 'sustentada', resistencia: 'Vontade parcial', desc: 'Todos na área (inclusive você) só falam a verdade; esconder-se/invisibilidade é revelada.', discente: '(+3 PE) alcance médio, esfera 9m, conjurador imune.', verdadeiro: '(+7 PE) alcance longo, duração cena; você ouve tudo na área. Requer 4º círculo e afinidade.' }],
      3: [{ nome: 'Relembrar Fragmento', execucao: 'padrão', alcance: 'toque', alvo: '1 objeto', duracao: 'instantânea', desc: 'Restaura uma fonte de conhecimento escrita danificada enquanto você a tocar.', discente: '(+4 PE) restaurado até o fim da missão.', verdadeiro: '(+9 PE) pode alterar o objeto de forma imperceptível até o fim da missão. Requer afinidade.' }],
      4: [{ nome: 'Pronunciar Sigilo', execucao: 'padrão', alcance: 'curto', alvo: '1 ser', duracao: 'instantânea', resistencia: 'Vontade parcial', desc: 'Escolha: Esquecer (atordoado 1d4+1 rodadas), Cegar (cego) ou Inexistir (deixa de existir por 1d4+1 rodadas).', discente: '(+5 PE) alcance extremo.', verdadeiro: '(+10 PE) até 5 seres. Requer afinidade.' }],
    },
    Energia: {
      1: [{ nome: 'Overclock', execucao: 'reação', alcance: 'pessoal', alvo: 'você', duracao: 'instantânea', desc: 'Após um teste de Tecnologia com objeto eletrônico, obtém a informação de outra forma (minigame de "estátua" na mesa). O aparelho fica inutilizável.', discente: '(+2 PE) tolera 1 erro. Requer 2º círculo.', verdadeiro: '(+5 PE) tolera 2 erros. Requer 3º círculo.' }],
      2: [{ nome: 'Tremeluzir', execucao: 'padrão', alcance: 'pessoal', alvo: 'você', duracao: 'sustentada', desc: 'Atravessa objetos sólidos (ação de movimento por objeto, 25% de falha). 1d4 de dano de Energia por rodada (ignora resistência).', discente: '(+3 PE) toque, 1 ser voluntário.', verdadeiro: '(+7 PE) curto, até 5 seres voluntários. Requer 4º círculo.' }],
      3: [
        { nome: 'Mutar', execucao: 'padrão', alcance: 'pessoal', alvo: 'você', duracao: 'cena', desc: 'Isola você das frequências sonoras: +10 em Furtividade, mas nenhum som o alcança.', discente: '(+4 PE) toque, 1 ser.', verdadeiro: '(+9 PE) curto, até 5 seres. Requer afinidade.' },
        { nome: 'Milagre Ionizante', execucao: 'completa', alcance: 'toque', alvo: '1 ser', duracao: 'instantânea', desc: 'Cura uma condição (lista ampla), doença ou veneno — exceto efeitos de Energia e permanentes. Depois, Fortitude DT 30 ou incubado pelo infectcídio.' },
      ],
      4: [],
    },
    Medo: { 1: [], 2: [], 3: [], 4: [] },
  },

  armas: [
    { nome: 'Baioneta', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 0, dano: '1d4', critico: '19', alcance: null, tipoDano: 'P', espacos: 1, desc: 'Fixável em arma de fogo de duas mãos: vira arma de duas mãos ágil com dano 1d6.' },
    { nome: 'Bastão policial', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 1, dano: '1d6', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 1, agil: true, desc: 'Na ação esquiva, o bônus de Defesa aumenta em +1.' },
    { nome: 'Espingarda de cano duplo', proficiencia: 'tatica', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 1, dano: '4d6', critico: 'x3', alcance: 'Curto', tipoDano: 'B', espacos: 2, municao: 'Cartuchos', desc: 'Pode disparar os dois canos: –1d20 no ataque, dano 6d6. Recarrega com ação de movimento.' },
    { nome: 'Estilingue', proficiencia: 'simples', tipoArma: 'disparo', empunhadura: 'umaMao', categoria: 0, dano: '1d4', critico: 'x2', alcance: 'Curto', tipoDano: 'I', espacos: 1, desc: 'Aplica Força no dano. Pode lançar granadas em alcance longo.' },
    { nome: 'Faca tática', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 1, dano: '1d6', critico: '19', alcance: 'Curto', tipoDano: 'C', espacos: 1, agil: true, arremessavel: true, desc: '+2 para contra-atacar; no bloqueio, 2 PE e sacrificar a faca: +20 de RD.' },
    { nome: 'Gancho de carne', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 0, dano: '1d4', critico: 'x4', alcance: null, tipoDano: 'P', espacos: 1, desc: 'Amarrado a corda/corrente: alcance 4,5m (espaço 2).' },
    { nome: 'Picareta', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 0, dano: '1d6', critico: 'x4', alcance: null, tipoDano: 'P', espacos: 1 },
    { nome: 'Pistola pesada', proficiencia: 'simples', tipoArma: 'fogo', empunhadura: 'leve', categoria: 1, dano: '2d8', critico: '19/x3', alcance: 'Curto', tipoDano: 'B', espacos: 1, municao: 'Balas curtas', desc: '–1d20 em ataques se empunhada com uma só mão.' },
    { nome: 'Pregador pneumático', proficiencia: 'simples', tipoArma: 'fogo', empunhadura: 'umaMao', categoria: 0, dano: '1d4', critico: 'x4', alcance: 'Curto', tipoDano: 'P', espacos: 1, desc: 'Conta como arma de fogo para poderes. Dispara pregos sob pressão.' },
    { nome: 'Revólver compacto', proficiencia: 'simples', tipoArma: 'fogo', empunhadura: 'leve', categoria: 1, dano: '2d4', critico: '19/x3', alcance: 'Curto', tipoDano: 'B', espacos: 1, municao: 'Balas curtas' },
  ],

  itensAmaldicoados: [
    { nome: 'Ampulheta do Tempo Sofrido', elemento: 'Morte', categoria: 2, desc: 'Item amaldiçoado de Morte (ver suplemento).' },
    { nome: 'Arreio Neural', elemento: 'Energia', categoria: 2, desc: 'Item amaldiçoado de Energia (ver suplemento).' },
    { nome: 'Câmera Obscura', elemento: 'Conhecimento', categoria: 3, desc: 'Item amaldiçoado de Conhecimento (ver suplemento).' },
    { nome: 'Centrifugador Existencial', elemento: 'Energia', categoria: 3, desc: 'Item amaldiçoado de Energia (ver suplemento).' },
    { nome: 'Conector de Membros', elemento: 'Sangue', categoria: 3, desc: 'Reconecta membro/cabeça decepados (até 3 rodadas): remove morrendo/morto, deixando inconsciente com 1 PV. 25% da parte ganhar "vida própria" (efeitos bizarros).' },
    { nome: "Dose d'A Praga", elemento: 'Sangue', categoria: 3, desc: 'Concede Arma de Sangue, Sangue de Ferro e Sangue Vivo até o fim da cena. Depois, Fortitude DT 20 (+5/dose) ou 2d4 mental e Ódio Incontrolável.' },
    { nome: 'Espelho Refletor', elemento: 'Energia', categoria: 2, desc: 'Item amaldiçoado de Energia (ver suplemento).' },
    { nome: 'Fuzil Alheio', elemento: 'Energia', categoria: 4, desc: 'Item amaldiçoado de Energia (ver suplemento).' },
    { nome: 'Injeção de Lodo', elemento: 'Morte', categoria: 2, espacos: 0.5, desc: 'Item amaldiçoado de Morte (ver suplemento).' },
    { nome: 'Instantâneo Mortal', elemento: 'Morte', categoria: 2, espacos: 0.5, desc: 'Item amaldiçoado de Morte (ver suplemento).' },
    { nome: 'Mandíbula Agonizante', elemento: 'Sangue', categoria: 2, desc: 'Arremessada, grita acobertando sons em 30m até o fim da cena; distrai automaticamente. Criaturas de Sangue são atraídas (Vontade DT 35).' },
    { nome: 'A Primeira Adaga', elemento: 'Medo', categoria: 3, desc: 'Item amaldiçoado de Medo (ver suplemento).' },
    { nome: 'Projétil de Lodo (curto)', elemento: 'Morte', categoria: 1, desc: 'Munição amaldiçoada de Morte (ver suplemento).' },
    { nome: 'Projétil de Lodo (longo)', elemento: 'Morte', categoria: 2, desc: 'Munição amaldiçoada de Morte (ver suplemento).' },
    { nome: 'Rádio Chiador', elemento: 'Morte', categoria: 2, desc: 'Item amaldiçoado de Morte (ver suplemento).' },
    { nome: 'Retalho Tenebroso', elemento: 'Sangue', categoria: 2, desc: 'Máscara de carne: concede faro e instintos primais (ver suplemento).' },
  ],
}
