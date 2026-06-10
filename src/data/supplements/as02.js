// Arquivos Secretos 02 — Hexatombe (v1.1). Conteúdo de jogador (poderes, modificação e itens).
export const AS02 = {
  id: 'as02',

  poderesClasse: {
    Combatente: [
      { nome: 'Predador Perfeito', desc: 'Uma vez por rodada, 5 PE: ação padrão adicional com intenção de causar dano.', prereq: (c) => ((c.periciaGraus?.['Luta'] === 'veterano' || c.periciaGraus?.['Luta'] === 'expert') || (c.periciaGraus?.['Pontaria'] === 'veterano' || c.periciaGraus?.['Pontaria'] === 'expert')) && c.pericias.includes('Sobrevivência'), prereqText: 'Veterano em Luta ou Pontaria e Sobrevivência' },
      { nome: 'Golpes de Arena', desc: 'Ao acertar um ataque desarmado, 2 PE: ataque desarmado adicional ou manobra de combate contra o mesmo alvo.', prereq: (c) => c.pericias.includes('Luta'), prereqText: 'Treinado em Luta' },
    ],
    Especialista: [
      { nome: 'Assassinato Furtivo', desc: 'O dano do Ataque Furtivo aumenta em +1d6. Ao acertar um furtivo, 2 PE: muda os dados de d6 para d8.', prereq: (c) => c.trilha === 'Infiltrador', prereqText: 'Ataque Furtivo (trilha Infiltrador)' },
      { nome: 'Especialista em Matar', desc: 'Mirar e fintar exigem um passo a menos de ação. Após uma delas, 2 PE: +5 em ataque ou dano (3 PE/+10 em NEX 40%; 4 PE/+15 em NEX 70%).', prereq: (c) => c.pericias.includes('Luta') || c.pericias.includes('Pontaria'), prereqText: 'Treinado em Luta ou Pontaria, habilidade Perito' },
    ],
    Ocultista: [
      { nome: 'Dominar Habilidade Ritualística', desc: 'Recebe a primeira habilidade de uma trilha de Ocultista que não a sua. Pode ser escolhido uma segunda vez.', prereq: null, prereqText: 'Escolhido pelo Outro Lado', repeatable: true },
    ],
  },

  poderesGerais: [
    { nome: 'Revidar Violento', desc: 'Pode fazer uma segunda reação especial de defesa na mesma rodada, desde que seja um contra-ataque.', prereq: (c) => (c.atributos['Força'] ?? 1) >= 2 || (c.atributos['Agilidade'] ?? 1) >= 2, prereqText: 'For 2 ou Agi 2' },
    { nome: 'Corpo Fechado', desc: 'Pode fazer uma segunda reação especial de defesa na mesma rodada, desde que seja um bloqueio.', prereq: (c) => (c.atributos['Vigor'] ?? 1) >= 2, prereqText: 'Vig 2' },
    { nome: 'Esquiva Tática', desc: 'Pode fazer uma segunda reação especial de defesa na mesma rodada, desde que seja uma esquiva.', prereq: (c) => (c.atributos['Agilidade'] ?? 1) >= 2, prereqText: 'Agi 2' },
    { nome: 'Palpite Confiante', desc: 'Em testes de perícia de Int ou Pre, 1 PE: soma seu Intelecto no teste.', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 2, prereqText: 'Int 2' },
    { nome: 'Especialista em Correntes', desc: 'Prende itens em correntes ao corpo (não podem ser desarmados). Alcance corpo a corpo com correntes +3m e +2 em manobras com elas.', prereq: (c) => (c.atributos['Agilidade'] ?? 1) >= 2, prereqText: 'Agi 2' },
    { nome: 'Puxar pra Briga', desc: 'Ao acertar com corrente/chicote/corda, 2 PE: puxa o alvo para espaço adjacente. Se ele se afastar, sofre –1d20 contra outros alvos por 1 rodada.', prereq: (c) => ((c.atributos['Força'] ?? 1) >= 2 || (c.atributos['Agilidade'] ?? 1) >= 2) && c.pericias.includes('Luta') && (c.poderes ?? []).includes('Especialista em Correntes'), prereqText: 'For 2 ou Agi 2, treinado em Luta, Especialista em Correntes' },
    { nome: 'Estágio Terminal', desc: 'Uma vez por rodada, machucado, 2 PE: ação de movimento extra.', prereq: (c) => (c.atributos['Agilidade'] ?? 1) >= 2, prereqText: 'Agi 2' },
    { nome: 'Kian Vai Nos Salvar', desc: 'Com sua fé em Kian envolvida, aprende a conjurar um ritual de Conhecimento de 1º círculo (2º em NEX 25%, 3º em 55%) até o fim da cena.', prereq: (c) => (c.atributos['Presença'] ?? 1) >= 2 && c.classe === 'Ocultista', prereqText: 'Pre 2, capacidade de conjurar rituais, adorar o Kian' },
    { nome: 'Prática com Materiais Ritualísticos', desc: 'Em conjurações complexas, não sofre –1d20 para empregar materiais específicos de uma Entidade na 1ª etapa.', prereq: (c) => (c.atributos['Intelecto'] ?? 1) >= 2 && c.pericias.includes('Ocultismo') && c.classe === 'Ocultista', prereqText: 'Int 2, treinado em Ocultismo, conjurar rituais' },
    { nome: 'Arte da Música Macabra', desc: 'Ação padrão e 2 PE: sua música causa um efeito do Outro Lado em 1 ser em alcance curto. Inclui usar Sintonização Mental com Arma/Proteção como se as tivesse.', prereq: (c) => c.pericias.includes('Artes') && c.pericias.includes('Ocultismo'), prereqText: 'Treinado em Artes e Ocultismo' },
    { nome: 'Sintonização Mental com Arma', desc: 'Ação de interlúdio e 3 PE: uma arma empunhada passa a usar um atributo à sua escolha para ataque e dano até o próximo interlúdio.', prereq: (c) => ((c.atributos['Intelecto'] ?? 1) >= 2 || (c.atributos['Presença'] ?? 1) >= 2) && c.pericias.includes('Ocultismo') && c.classe === 'Ocultista', prereqText: 'Int 2 ou Pre 2, treinado em Ocultismo, conjurar rituais' },
    { nome: 'Sintonização Mental com Proteção', desc: 'Ação de interlúdio e 3 PE: uma proteção vestida passa a usar um atributo à sua escolha para Defesa, em vez de Agilidade, até o próximo interlúdio.', prereq: (c) => ((c.atributos['Intelecto'] ?? 1) >= 2 || (c.atributos['Presença'] ?? 1) >= 2) && c.pericias.includes('Ocultismo') && c.classe === 'Ocultista', prereqText: 'Int 2 ou Pre 2, treinado em Ocultismo, conjurar rituais' },
  ],

  poderesParanormais: [
    { nome: 'Predador de Sangue', elemento: 'Sangue', desc: 'Ação padrão e 3 PE: memoriza o odor de uma vítima (precisa de uma fonte do odor): +1d20 para rastreá-la, percebê-la e atacá-la. Uma vítima por vez.', afinidade: 'Pode memorizar até três vítimas simultaneamente.' },
    { nome: 'Pressão Atmosférica', elemento: 'Energia', desc: 'Ao acertar corpo a corpo um alvo agarrado, 2 PE: +1d10 de Energia e o alvo fica atordoado por 1 rodada (Fortitude DT For evita; uma vez por cena por alvo).', afinidade: null },
    { nome: 'Zona dos Sussurros', elemento: 'Conhecimento', desc: 'Ação completa e 3 PE: marca uma área (cômodo) com símbolos "X". Nela: +5 em ataques e sem penalidade de Furtividade após atacar. Máximo de três áreas.', prereqElemento: { elemento: 'Conhecimento', count: 1 }, afinidade: 'Ao causar dano em alvo desprevenido/flanqueado, rola novamente dados de dano com 1 ou 2.' },
    { nome: 'Disparo da Morte', elemento: 'Morte', desc: 'Antes de um ataque com arma de fogo/disparo, 2 PE: +2 na margem de ameaça.', afinidade: 'O ataque ignora cobertura leve e 10 pontos de resistência a dano.' },
  ],

  modificacoes: [
    { nome: 'Encaixe', tipo: 'arma', efeito: 'O cabo permite acoplar a outra arma com a mesma modificação: vira arma de duas mãos com +1 dado de dano, +1 em margem ou multiplicador de crítico, espaços dobrados. Apenas armas corpo a corpo de uma mão, leves, simples e táticas.' },
  ],

  itensAmaldicoados: [
    { nome: 'Machado do Mutilador', elemento: 'Sangue', categoria: 4, desc: 'Arma tática 1 mão: 1d8 corte + 1d8 Sangue (multiplicado em críticos), crítico 20/x3. Ao atingir, 1 PE: alvo sangrando (cumulativo).' },
    { nome: 'Elmo do Colosso', elemento: 'Energia', categoria: 4, desc: 'Item amaldiçoado de Energia do campeão da arena (ver suplemento).' },
    { nome: 'Manoplas do Colosso', elemento: 'Energia', categoria: 4, desc: 'Par de manoplas (funcionam em par): cada uma 1d8 impacto + 1d10 Energia, crítico 20/x3. Contam como ataque desarmado.' },
    { nome: 'Punhal X', elemento: 'Conhecimento', categoria: 4, desc: 'Faca simples corpo a corpo amaldiçoada de Conhecimento (ver suplemento).' },
    { nome: 'Sniper Fantasma', elemento: 'Morte', categoria: 4, desc: 'Fuzil de precisão sombrio amaldiçoado de Morte (ver suplemento).' },
    { nome: 'A Antena', elemento: 'Conhecimento', categoria: 3, desc: 'Item amaldiçoado (ver suplemento).' },
  ],
}
