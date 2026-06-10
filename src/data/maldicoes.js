// Maldições e Itens Amaldiçoados — Capítulo 5, p.144+ (Ordem Paranormal RPG v1.3)
// Maldições funcionam como modificações: a primeira aumenta a categoria do item em II,
// as subsequentes em I cada. Maldições iguais não se acumulam e um item não pode ter
// maldições de elementos opressores entre si. Itens amaldiçoados são liberados apenas
// para Agente especial ou superior.

// Cada elemento oprime o seguinte: Sangue→Conhecimento→Energia→Morte→Sangue. Medo é neutro.
export const ELEMENTO_OPRESSOR = {
  Sangue: 'Conhecimento',
  Conhecimento: 'Energia',
  Energia: 'Morte',
  Morte: 'Sangue',
}

// Preço da maldição: penalidade cumulativa por elemento dos itens usados
export const PRECO_MALDICAO = {
  Conhecimento: 'Sempre que falha em um teste baseado em Intelecto, perde 2 SAN por maldição de Conhecimento em seus itens.',
  Energia: 'Sempre que falha em um teste baseado em Agilidade, perde 2 SAN por maldição de Energia em seus itens.',
  Morte: 'Sempre que falha em um teste baseado em Presença, perde 2 SAN por maldição de Morte em seus itens.',
  Sangue: 'Sempre que falha em um teste baseado em Força ou Vigor, perde 2 SAN por maldição de Sangue em seus itens.',
  Medo: 'Cada item de Medo possui um preço específico, determinado pelo mestre.',
}

export const MALDICOES_ARMA = [
  { nome: 'Antielemento', elemento: 'Conhecimento', efeito: 'Ao atacar criatura de um elemento (definido na criação), pode gastar 2 PE para causar +4d8 de dano.' },
  { nome: 'Ritualística', elemento: 'Conhecimento', efeito: 'Armazena um ritual (alvo: ser ou área), descarregado como ação livre ao acertar um ataque.' },
  { nome: 'Senciente', elemento: 'Conhecimento', efeito: 'Ação de movimento e 2 PE: a arma flutua e ataca sozinha um ser em alcance curto, uma vez por rodada (1 PE/turno para manter).' },
  { nome: 'Empuxo', elemento: 'Energia', efeito: 'Arma corpo a corpo pode ser arremessada em alcance curto com +1 dado de dano e volta voando para você.', aplicavel: ['corpoACorpo'] },
  { nome: 'Energética', elemento: 'Energia', efeito: '2 PE por ataque: +5 no teste de ataque, ignora resistência a dano e converte o dano para Energia.' },
  { nome: 'Vibrante', elemento: 'Energia', efeito: 'Você recebe a habilidade Ataque Extra (Operações Especiais). Se já a possui, o custo diminui em –1 PE.' },
  { nome: 'Consumidora', elemento: 'Morte', efeito: 'Alvos atingidos ficam lentos até o fim da cena. 2 PE: alvo fica imóvel por uma rodada.' },
  { nome: 'Erosiva', elemento: 'Morte', efeito: '+1d8 de dano de Morte. 2 PE: vítima sofre 2d4 de Morte no início dos turnos por 2 rodadas.' },
  { nome: 'Repulsora', elemento: 'Morte', efeito: '+2 de Defesa enquanto empunhada. Ao bloquear, pode gastar 2 PE para +5 adicional na Defesa.' },
  { nome: 'Lancinante', elemento: 'Sangue', efeito: '+1d8 de dano de Sangue. Este dado é multiplicado em acertos críticos.' },
  { nome: 'Predadora', elemento: 'Sangue', efeito: 'Anula penalidades por camuflagem e cobertura leves, aumenta alcance em uma categoria (à distância) e duplica a margem de ameaça.' },
  { nome: 'Sanguinária', elemento: 'Sangue', efeito: 'Alvos ficam sangrando (cumulativo). Em críticos, alvo fica fraco e você ganha 2d10 PV temporários.' },
]

export const MALDICOES_PROTECAO = [
  { nome: 'Abascanta', elemento: 'Conhecimento', efeito: '+5 em resistência contra rituais. Uma vez por cena, reflita um ritual de volta (reação + PE igual ao custo).' },
  { nome: 'Profética', elemento: 'Conhecimento', efeito: 'Resistência a Conhecimento 10. 2 PE: role novamente um teste de resistência.' },
  { nome: 'Sombria', elemento: 'Conhecimento', efeito: '+5 em Furtividade, ignora penalidade de carga nela. 1 PE: aparência de roupa comum.' },
  { nome: 'Cinética', elemento: 'Energia', efeito: '+2 de Defesa e resistência a dano 2 (leve/escudo) ou 5 (pesada).' },
  { nome: 'Lépida', elemento: 'Energia', efeito: '+10 em Atletismo e +3m de deslocamento. 2 PE: ignora terreno difícil, escala e imune a queda de 9m até o fim do turno.' },
  { nome: 'Voltaica', elemento: 'Energia', efeito: 'Resistência a Energia 10. Ação de movimento e 2 PE: 2d6 de Energia em todos os seres adjacentes no fim dos seus turnos.' },
  { nome: 'Letárgica', elemento: 'Morte', efeito: '+2 de Defesa e 25% (leve/escudo) ou 50% (pesada) de chance de ignorar dano extra de críticos e ataques furtivos.' },
  { nome: 'Repulsiva', elemento: 'Morte', efeito: 'Resistência a Morte 10. Ação de movimento e 2 PE: quem o atacar corpo a corpo sofre 2d8 de Morte.' },
  { nome: 'Regenerativa', elemento: 'Sangue', efeito: 'Resistência a Sangue 10. Ação de movimento e 1 PE: recupera 1d12 PV.' },
  { nome: 'Sádica', elemento: 'Sangue', efeito: '+1 em ataque e dano para cada 10 pontos de dano sofridos desde o fim do seu último turno.' },
]

export const MALDICOES_ACESSORIO = [
  { nome: 'Carisma', elemento: 'Conhecimento', efeito: '+1 em Presença (não fornece PE adicionais).' },
  { nome: 'Conjuração', elemento: 'Conhecimento', efeito: 'Contém um ritual de 1º círculo, conjurável ao empunhar. Se conhecer o ritual, custo –1 PE.' },
  { nome: 'Escudo Mental', elemento: 'Conhecimento', efeito: 'Resistência mental 10.' },
  { nome: 'Reflexão', elemento: 'Conhecimento', efeito: 'Uma vez por rodada, reflita um ritual de volta ao conjurador (PE igual ao custo).' },
  { nome: 'Sagacidade', elemento: 'Conhecimento', efeito: '+1 em Intelecto (não fornece perícias e graus de treinamento).' },
  { nome: 'Defesa', elemento: 'Energia', efeito: '+5 de Defesa.' },
  { nome: 'Destreza', elemento: 'Energia', efeito: '+1 em Agilidade.' },
  { nome: 'Potência', elemento: 'Energia', efeito: '+1 na DT contra suas habilidades, poderes e rituais.' },
  { nome: 'Esforço Adicional', elemento: 'Morte', efeito: '+5 PE. Ativa após um dia de uso.' },
  { nome: 'Disposição', elemento: 'Sangue', efeito: '+1 em Vigor.' },
  { nome: 'Pujança', elemento: 'Sangue', efeito: '+1 em Força.' },
  { nome: 'Vitalidade', elemento: 'Sangue', efeito: '+15 PV. Ativa após um dia de uso.' },
  { nome: 'Proteção Elemental', elemento: 'Varia', efeito: 'Resistência 10 contra um elemento (o acessório conta como item desse elemento).' },
]

// Itens amaldiçoados especiais: categoria II e 1 espaço, salvo indicação. Contam como 1 maldição.
export const ITENS_AMALDICOADOS = [
  { nome: 'Coração Pulsante', elemento: 'Sangue', desc: 'Empunhado, ao sofrer dano: reação para reduzi-lo à metade. Cada uso: Fortitude (DT 15 +5/uso no dia) ou o item é destruído.' },
  { nome: 'Coroa de Espinhos', elemento: 'Sangue', desc: 'Uma vez por rodada (reação), converte dano mental em dano de Sangue, mas impede recuperar SAN por descanso. Requer uma semana de uso.' },
  { nome: 'Frasco de Vitalidade', elemento: 'Sangue', desc: 'Armazene até 20 PV de seu sangue (1 min). Beber (ação padrão) recupera os PV (Fortitude DT 20 ou enjoado 1 rodada).' },
  { nome: 'Pérola de Sangue', elemento: 'Sangue', desc: 'Absorvida na pele: +5 em testes de Agi/For/Vig até o fim da cena. Depois, Fortitude DT 20 ou fica fatigado (falha por 5+: morrendo).' },
  { nome: 'Punhos Enraivecidos', elemento: 'Sangue', desc: 'Soqueiras: ataques desarmados causam +1d8 de Sangue e letal; ataques extras encadeados pagando 2/4/6… PE.' },
  { nome: 'Seringa de Transfiguração', elemento: 'Sangue', desc: 'Suga sangue de um alvo e injeta em outro, transfigurando a aparência (como Distorcer Aparência) por um dia.' },
  { nome: 'Amarras Mortais', elemento: 'Morte', desc: 'Uma vez por rodada (ação padrão, 2 PE): agarrar alvo Grande ou menor em alcance curto com +10. Ação de movimento: puxar o alvo.' },
  { nome: 'Casaco de Lodo', elemento: 'Morte', desc: 'Resistência a corte, impacto, Morte e perfuração 5; vulnerabilidade a balístico e Energia.' },
  { nome: 'Coletora', elemento: 'Morte', desc: 'Punhal que mata um alvo morrendo e armazena 1d8 PE (máx. 20). Impõe pesadelos e condições de descanso ruins.' },
  { nome: 'Crânio Espiral', elemento: 'Morte', desc: 'Ação livre: ação padrão adicional na rodada. Cada uso: Vontade (DT 15 +5/uso no dia) ou envelhece 1d4 anos.' },
  { nome: 'Frasco de Lodo', elemento: 'Morte', desc: 'Aplicado em ferimento recente: recupera 6d8+20 PV. Em feridas antigas: 50% de chance de infectar (3d8+10 de dano).' },
  { nome: 'Vislumbre do Fim', elemento: 'Morte', desc: 'Óculos: revela contagem de morte de pessoas comuns; em Marcados/criaturas, pior resistência e vulnerabilidades.' },
  { nome: 'Anéis do Elo Mental', elemento: 'Conhecimento', desc: 'Par de anéis: ligação telepática permanente; testes de Vontade usam o melhor bônus, mas dano mental é compartilhado.' },
  { nome: 'Lanterna Reveladora', elemento: 'Conhecimento', desc: 'Ação padrão e 1 PE: luz com as propriedades do ritual Terceiro Olho por uma cena. Incomoda criaturas de Sangue.' },
  { nome: 'Máscara das Pessoas nas Sombras', elemento: 'Conhecimento', desc: 'Resistência a Conhecimento 10. Ação de movimento e 2 PE: teletransporte entre sombras em alcance médio.' },
  { nome: 'Munição Jurada', elemento: 'Conhecimento', desc: 'Vinculada a um ser: +10 no ataque, dobra margem de ameaça, +6d12 de Conhecimento. Obsessão: –2 contra outros alvos.' },
  { nome: 'Pergaminho da Pertinácia', elemento: 'Conhecimento', desc: 'Ação padrão: 5 PE temporários até o fim da cena. Cada uso: Ocultismo (DT 15 +5/uso no dia) ou o pergaminho se desfaz.' },
  { nome: 'Arcabuz dos Moretti', elemento: 'Energia', desc: 'Arma de fogo de uma mão: +2 em ataque, dano de Energia variável (1d6 define: 2d4 a 2d20), crítico x3, sem munição.' },
  { nome: 'Bateria Reversa', elemento: 'Energia', desc: 'Absorve/transfere carga de dispositivos eletrônicos. Cada uso: Ocultismo (DT 15 +5/uso no dia) ou explode (12d6 em 3m).' },
  { nome: 'Peitoral da Segunda Chance', elemento: 'Energia', desc: 'A 0 PV: gasta 5 PE seus e reanima com 4d10 PV. 1 em 1d10: morte instantânea.' },
  { nome: 'Relógio de Arnaldo', elemento: 'Energia', desc: 'Uma vez por rodada, 1 PE: role novamente qualquer dado com resultado 1 (custo +1 por uso no dia). Item único.' },
  { nome: 'Talismã da Sorte', elemento: 'Energia', desc: 'Reação e 3 PE ao sofrer dano: 1d4 — 2/3 evita o dano; 4 evita mas queima o talismã; 1 sofre o dobro e queima.' },
  { nome: 'Teclado de Conexão Neural', elemento: 'Energia', desc: 'Conecta sua mente ao computador: +10 para hackear, metade do tempo, mas 1d6 de dano mental por rodada.' },
  { nome: 'Tela do Pesadelo', elemento: 'Energia', desc: 'Ação padrão e 2 PE: quem tocar a tela vê horror (Vontade DT do usuário +5; falha: atordoado e 4d6 mental por rodada).' },
  { nome: 'Veículo Energizado', elemento: 'Energia', desc: 'Não precisa de combustível. Reação + Pilotagem DT 25: forma de energia para atravessar um obstáculo.' },
  { nome: 'Jaqueta de Veríssimo', elemento: 'Medo', desc: 'Resistência a dano paranormal 15. Reação e 2 PE: torna-se o alvo do dano de um aliado adjacente. Item único, categoria IV.', categoria: 4 },
  { nome: 'Dedo Decepado', elemento: 'Varia', desc: 'Concede um poder paranormal do antigo dono. 25% de chance de não recuperar PV/PE/SAN ao descansar. –10 em Diplomacia se visto.' },
  { nome: 'Selos Paranormais', elemento: 'Varia', desc: 'Sigilo com um ritual; ativável lendo em voz alta (Ocultismo DT 20 + custo se não conhecer). Categoria = círculo do ritual.' },
]
