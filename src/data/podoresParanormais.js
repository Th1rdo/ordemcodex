// Poderes paranormais (via Transcender) — Ordem Paranormal RPG v1.3
// elemento: null = sem elemento específico.
// prereqElemento: { elemento, count } = exige já possuir N poderes daquele elemento.
// afinidade: benefício extra ao escolher o poder pela 2ª vez (requer Afinidade Elemental no elemento).
// Ao transcender, o personagem NÃO ganha Sanidade naquele aumento de NEX.

export const ELEMENTOS_PARANORMAIS = ['Conhecimento', 'Energia', 'Morte', 'Sangue']

export const PODERES_PARANORMAIS = [
  // ── Especiais ────────────────────────────────────────────────────────────
  {
    nome: 'Afinidade Elemental',
    elemento: null,
    desc: 'Ao atingir NEX 50% você se conecta com um elemento à sua escolha (Conhecimento, Energia, Morte ou Sangue). Na primeira vez que transcender após isso, desenvolve afinidade: dispensa componentes ritualísticos do elemento, recebe +2d20 em testes contra efeitos do seu elemento (–2d20 contra o elemento opressor) e pode escolher poderes paranormais do seu elemento uma segunda vez para receber o benefício de Afinidade.',
    nexMin: 50,
    afinidade: null,
  },
  {
    nome: 'Aprender Ritual',
    elemento: null,
    desc: 'Você aprende e pode conjurar um ritual de 1º círculo à sua escolha, e pode substituir um ritual que já conhece por outro. A partir de NEX 45%, aprende um ritual de até 2º círculo; a partir de NEX 75%, de até 3º círculo. Conta como um poder do elemento do ritual escolhido.',
    repeatable: true,
    afinidade: null,
  },
  {
    nome: 'Resistir a Elemento',
    elemento: null,
    desc: 'Escolha entre Conhecimento, Energia, Morte ou Sangue. Você recebe resistência 10 contra esse elemento. Conta como um poder do elemento escolhido.',
    afinidade: 'Aumenta a resistência para 20.',
  },
  // ── Conhecimento ─────────────────────────────────────────────────────────
  {
    nome: 'Expansão de Conhecimento',
    elemento: 'Conhecimento',
    desc: 'Você aprende um poder de classe que não pertença à sua classe (cumprindo os pré-requisitos).',
    prereqElemento: { elemento: 'Conhecimento', count: 1 },
    afinidade: 'Você aprende um segundo poder de classe que não pertença à sua classe.',
  },
  {
    nome: 'Percepção Paranormal',
    elemento: 'Conhecimento',
    desc: 'Em cenas de investigação, sempre que fizer um teste para procurar pistas, você pode rolar novamente um dado com resultado menor que 10 (deve aceitar a segunda rolagem).',
    afinidade: 'Você pode rolar novamente até dois dados com resultado menor que 10.',
  },
  {
    nome: 'Precognição',
    elemento: 'Conhecimento',
    desc: 'Um "sexto sentido" o avisa do perigo. Você recebe +2 em Defesa e em testes de resistência.',
    prereqElemento: { elemento: 'Conhecimento', count: 1 },
    afinidade: 'Você fica imune à condição desprevenido.',
  },
  {
    nome: 'Sensitivo',
    elemento: 'Conhecimento',
    desc: 'Você sente as emoções e intenções de outros seres, recebendo +5 em testes de Diplomacia, Intimidação e Intuição.',
    afinidade: 'Quando faz um teste oposto usando uma dessas perícias, o oponente sofre –1d20.',
  },
  {
    nome: 'Visão do Oculto',
    elemento: 'Conhecimento',
    desc: 'Você enxerga pela percepção do Conhecimento: recebe +5 em testes de Percepção e enxerga no escuro.',
    afinidade: 'Você ignora camuflagem.',
  },
  // ── Energia ──────────────────────────────────────────────────────────────
  {
    nome: 'Afortunado',
    elemento: 'Energia',
    desc: 'Uma vez por rolagem, você pode rolar novamente um resultado 1 em qualquer dado que não seja d20.',
    afinidade: 'Além disso, uma vez por teste, você pode rolar novamente um resultado 1 em d20.',
  },
  {
    nome: 'Campo Protetor',
    elemento: 'Energia',
    desc: 'Quando usa a ação esquiva, você pode gastar 1 PE para receber +5 em Defesa.',
    prereqElemento: { elemento: 'Energia', count: 1 },
    afinidade: 'Você também recebe +5 em Reflexos e, até seu próximo turno, se passar em um teste de Reflexos que reduziria o dano à metade, não sofre nenhum dano.',
  },
  {
    nome: 'Causalidade Fortuita',
    elemento: 'Energia',
    desc: 'Em cenas de investigação, a DT para procurar pistas diminui em –5 para você até você encontrar uma pista.',
    afinidade: 'A DT para procurar pistas sempre diminui em –5 para você.',
  },
  {
    nome: 'Golpe de Sorte',
    elemento: 'Energia',
    desc: 'Seus ataques recebem +1 na margem de ameaça.',
    prereqElemento: { elemento: 'Energia', count: 1 },
    afinidade: 'Seus ataques recebem +1 no multiplicador de crítico.',
  },
  {
    nome: 'Manipular Entropia',
    elemento: 'Energia',
    desc: 'Quando outro ser em alcance curto faz um teste de perícia, você pode gastar 2 PE para fazê-lo rolar novamente um dos dados desse teste.',
    prereqElemento: { elemento: 'Energia', count: 1 },
    afinidade: 'O alvo rola novamente todos os dados que você escolher.',
  },
  // ── Morte ────────────────────────────────────────────────────────────────
  {
    nome: 'Encarar a Morte',
    elemento: 'Morte',
    desc: 'Durante cenas de ação, seu limite de gasto de PE aumenta em +1 (isso não afeta a DT de seus efeitos).',
    afinidade: 'O limite aumenta em +2 (para um total de +3).',
  },
  {
    nome: 'Escapar da Morte',
    elemento: 'Morte',
    desc: 'Uma vez por cena, quando receber dano que o deixaria com 0 PV, você fica com 1 PV. Não funciona contra dano massivo.',
    prereqElemento: { elemento: 'Morte', count: 1 },
    afinidade: 'Você evita completamente o dano. Em caso de dano massivo, fica com 1 PV.',
  },
  {
    nome: 'Potencial Aprimorado',
    elemento: 'Morte',
    desc: 'Você recebe +1 ponto de esforço por NEX (retroativo e cresce conforme sobe de NEX).',
    afinidade: 'Você recebe +1 PE adicional por NEX (total de +2 PE por NEX).',
  },
  {
    nome: 'Potencial Reaproveitado',
    elemento: 'Morte',
    desc: 'Uma vez por rodada, quando passa num teste de resistência, você ganha 2 PE temporários cumulativos. Os pontos desaparecem no final da cena.',
    afinidade: 'Você ganha 3 PE temporários, em vez de 2.',
  },
  {
    nome: 'Surto Temporal',
    elemento: 'Morte',
    desc: 'Uma vez por cena, durante seu turno, você pode gastar 3 PE para realizar uma ação padrão adicional.',
    prereqElemento: { elemento: 'Morte', count: 2 },
    afinidade: 'Você pode usar este poder uma vez por turno, em vez de uma vez por cena.',
  },
  // ── Sangue ───────────────────────────────────────────────────────────────
  {
    nome: 'Anatomia Insana',
    elemento: 'Sangue',
    desc: 'Você tem 50% de chance (resultado par em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo.',
    prereqElemento: { elemento: 'Sangue', count: 2 },
    afinidade: 'Você é imune aos efeitos de acertos críticos e ataques furtivos.',
  },
  {
    nome: 'Arma de Sangue',
    elemento: 'Sangue',
    desc: 'Ação de movimento e 2 PE para produzir garras, chifres ou lâmina de sangue cristalizado: arma simples, corpo a corpo e leve, que não precisa empunhar e causa 1d6 de dano de Sangue. Uma vez por turno, ao agredir, pode gastar 1 PE para um ataque adicional com ela. Dura até o final da cena.',
    afinidade: 'A arma se torna parte permanente de você e causa 1d10 pontos de dano de Sangue.',
  },
  {
    nome: 'Sangue de Ferro',
    elemento: 'Sangue',
    desc: 'Você recebe +2 pontos de vida por NEX (retroativo e cresce conforme sobe de NEX).',
    afinidade: 'Você recebe +5 em Fortitude e se torna imune a venenos e doenças.',
  },
  {
    nome: 'Sangue Fervente',
    elemento: 'Sangue',
    desc: 'Enquanto estiver machucado, você recebe +1 em Agilidade ou Força, à sua escolha.',
    prereqElemento: { elemento: 'Sangue', count: 2 },
    afinidade: 'O bônus em Agilidade ou Força aumenta para +2.',
  },
  {
    nome: 'Sangue Vivo',
    elemento: 'Sangue',
    desc: 'Na primeira vez que ficar machucado durante uma cena, você recebe cura acelerada 2 (nunca cura acima da metade dos PV máximos; termina no fim da cena).',
    prereqElemento: { elemento: 'Sangue', count: 1 },
    afinidade: 'A cura acelerada aumenta para 5.',
  },
]
