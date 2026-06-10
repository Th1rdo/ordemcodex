// Equipamento — Capítulo 3 (Ordem Paranormal RPG v1.3)
// Tabelas 3.3 (Armas), 3.4 (Munições), 3.6 (Proteções), 3.8 (Equipamentos Gerais), 3.10 (Itens Paranormais)
// categoria: 0–4. proficiencia: 'simples' | 'tatica' | 'pesada'.
// tipoArma: 'corpoACorpo' | 'arremesso' | 'disparo' | 'fogo'. empunhadura: 'leve' | 'umaMao' | 'duasMaos'.
// dano "1d6/1d8" = uma mão / duas mãos. agil: usa Agi em vez de For no ataque/dano.

export const ARMAS = [
  // Armas Simples — Corpo a Corpo
  { nome: 'Faca', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 0, dano: '1d4', critico: '19', alcance: 'Curto', tipoDano: 'C', espacos: 1, agil: true, arremessavel: true, municao: null },
  { nome: 'Martelo', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 0, dano: '1d6', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 1, municao: null },
  { nome: 'Punhal', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 0, dano: '1d4', critico: 'x3', alcance: null, tipoDano: 'P', espacos: 1, agil: true, municao: null },
  { nome: 'Bastão', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 0, dano: '1d6/1d8', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 1, municao: null },
  { nome: 'Machete', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 0, dano: '1d6', critico: '19', alcance: null, tipoDano: 'C', espacos: 1, municao: null },
  { nome: 'Lança', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 0, dano: '1d6', critico: 'x2', alcance: 'Curto', tipoDano: 'P', espacos: 1, arremessavel: true, municao: null },
  { nome: 'Cajado', proficiencia: 'simples', tipoArma: 'corpoACorpo', empunhadura: 'duasMaos', categoria: 0, dano: '1d6/1d6', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 2, agil: true, municao: null },
  // Armas Simples — Disparo
  { nome: 'Arco', proficiencia: 'simples', tipoArma: 'disparo', empunhadura: 'duasMaos', categoria: 0, dano: '1d6', critico: 'x3', alcance: 'Médio', tipoDano: 'P', espacos: 2, municao: 'Flechas' },
  { nome: 'Besta', proficiencia: 'simples', tipoArma: 'disparo', empunhadura: 'duasMaos', categoria: 0, dano: '1d8', critico: '19', alcance: 'Médio', tipoDano: 'P', espacos: 2, municao: 'Flechas' },
  // Armas Simples — Fogo
  { nome: 'Pistola', proficiencia: 'simples', tipoArma: 'fogo', empunhadura: 'leve', categoria: 1, dano: '1d12', critico: '18', alcance: 'Curto', tipoDano: 'B', espacos: 1, municao: 'Balas curtas' },
  { nome: 'Revólver', proficiencia: 'simples', tipoArma: 'fogo', empunhadura: 'leve', categoria: 1, dano: '2d6', critico: '19/x3', alcance: 'Curto', tipoDano: 'B', espacos: 1, municao: 'Balas curtas' },
  { nome: 'Fuzil de caça', proficiencia: 'simples', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 1, dano: '2d8', critico: '19/x3', alcance: 'Médio', tipoDano: 'B', espacos: 2, municao: 'Balas longas' },
  // Armas Táticas — Corpo a Corpo
  { nome: 'Machadinha', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 0, dano: '1d6', critico: 'x3', alcance: 'Curto', tipoDano: 'C', espacos: 1, arremessavel: true, municao: null },
  { nome: 'Nunchaku', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'leve', categoria: 0, dano: '1d8', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 1, agil: true, municao: null },
  { nome: 'Corrente', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 0, dano: '1d8', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 1, municao: null },
  { nome: 'Espada', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 1, dano: '1d8/1d10', critico: '19', alcance: null, tipoDano: 'C', espacos: 1, municao: null },
  { nome: 'Florete', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 1, dano: '1d6', critico: '18', alcance: null, tipoDano: 'C', espacos: 1, agil: true, municao: null },
  { nome: 'Machado', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 1, dano: '1d8', critico: 'x3', alcance: null, tipoDano: 'C', espacos: 1, municao: null },
  { nome: 'Maça', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'umaMao', categoria: 1, dano: '2d4', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 1, municao: null },
  { nome: 'Acha', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'duasMaos', categoria: 1, dano: '1d12', critico: 'x3', alcance: null, tipoDano: 'C', espacos: 2, municao: null },
  { nome: 'Gadanho', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'duasMaos', categoria: 1, dano: '2d4', critico: 'x4', alcance: null, tipoDano: 'C', espacos: 2, municao: null },
  { nome: 'Katana', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'duasMaos', categoria: 1, dano: '1d10', critico: '19', alcance: null, tipoDano: 'C', espacos: 2, agil: true, municao: null },
  { nome: 'Marreta', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'duasMaos', categoria: 1, dano: '3d4', critico: 'x2', alcance: null, tipoDano: 'I', espacos: 2, municao: null },
  { nome: 'Montante', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'duasMaos', categoria: 1, dano: '2d6', critico: '19', alcance: null, tipoDano: 'C', espacos: 2, municao: null },
  { nome: 'Motosserra', proficiencia: 'tatica', tipoArma: 'corpoACorpo', empunhadura: 'duasMaos', categoria: 1, dano: '3d6', critico: 'x2', alcance: null, tipoDano: 'C', espacos: 2, municao: null },
  // Armas Táticas — Disparo
  { nome: 'Arco composto', proficiencia: 'tatica', tipoArma: 'disparo', empunhadura: 'duasMaos', categoria: 1, dano: '1d10', critico: 'x3', alcance: 'Médio', tipoDano: 'P', espacos: 2, municao: 'Flechas' },
  { nome: 'Balestra', proficiencia: 'tatica', tipoArma: 'disparo', empunhadura: 'duasMaos', categoria: 1, dano: '1d12', critico: '19', alcance: 'Médio', tipoDano: 'P', espacos: 2, municao: 'Flechas' },
  // Armas Táticas — Fogo
  { nome: 'Submetralhadora', proficiencia: 'tatica', tipoArma: 'fogo', empunhadura: 'umaMao', categoria: 1, dano: '2d6', critico: '19/x3', alcance: 'Curto', tipoDano: 'B', espacos: 1, automatica: true, municao: 'Balas curtas' },
  { nome: 'Espingarda', proficiencia: 'tatica', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 1, dano: '4d6', critico: 'x3', alcance: 'Curto', tipoDano: 'B', espacos: 2, municao: 'Cartuchos' },
  { nome: 'Fuzil de assalto', proficiencia: 'tatica', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 2, dano: '2d10', critico: '19/x3', alcance: 'Médio', tipoDano: 'B', espacos: 2, automatica: true, municao: 'Balas longas' },
  { nome: 'Fuzil de precisão', proficiencia: 'tatica', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 3, dano: '2d10', critico: '19/x3', alcance: 'Longo', tipoDano: 'B', espacos: 2, municao: 'Balas longas' },
  // Armas Pesadas
  { nome: 'Bazuca', proficiencia: 'pesada', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 3, dano: '10d8', critico: 'x2', alcance: 'Médio', tipoDano: 'I', espacos: 2, municao: 'Foguete' },
  { nome: 'Lança-chamas', proficiencia: 'pesada', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 3, dano: '6d6', critico: 'x2', alcance: 'Curto', tipoDano: 'Fogo', espacos: 2, municao: 'Combustível' },
  { nome: 'Metralhadora', proficiencia: 'pesada', tipoArma: 'fogo', empunhadura: 'duasMaos', categoria: 2, dano: '2d12', critico: '19/x3', alcance: 'Médio', tipoDano: 'B', espacos: 2, automatica: true, municao: 'Balas longas' },
]

export const MUNICOES = [
  { nome: 'Balas curtas', categoria: 0, espacos: 1, duracao: 'duas cenas' },
  { nome: 'Balas longas', categoria: 1, espacos: 1, duracao: 'uma cena' },
  { nome: 'Cartuchos', categoria: 1, espacos: 1, duracao: 'uma cena' },
  { nome: 'Combustível', categoria: 1, espacos: 1, duracao: 'uma cena' },
  { nome: 'Flechas', categoria: 0, espacos: 1, duracao: 'uma missão' },
  { nome: 'Foguete', categoria: 1, espacos: 1, duracao: 'um disparo' },
]

export const PROTECOES = [
  { nome: 'Proteção leve', tipoProtecao: 'leve', defesa: 5, categoria: 1, espacos: 2 },
  { nome: 'Proteção pesada', tipoProtecao: 'pesada', defesa: 10, categoria: 2, espacos: 5, desc: 'Resistência a balístico, corte, impacto e perfuração 2. Impõe –5 em perícias com penalidade de carga.' },
  { nome: 'Escudo', tipoProtecao: 'escudo', defesa: 2, categoria: 1, espacos: 2, desc: 'Precisa ser empunhado. Acumula com proteção. Conta como proteção pesada para proficiência.' },
]

export const EQUIPAMENTO_GERAL = [
  // Acessórios
  { nome: 'Kit de perícia', grupo: 'Acessório', categoria: 0, espacos: 1, desc: 'Ferramentas necessárias para usos de uma perícia. Sem o kit, –5 no teste.' },
  { nome: 'Utensílio', grupo: 'Acessório', categoria: 1, espacos: 1, desc: '+2 em uma perícia (exceto Luta e Pontaria). Precisa ser empunhado.' },
  { nome: 'Vestimenta', grupo: 'Acessório', categoria: 1, espacos: 1, desc: '+2 em uma perícia (exceto Luta e Pontaria). Máximo de duas vestimentas ao mesmo tempo.' },
  // Explosivos
  { nome: 'Granada de atordoamento', grupo: 'Explosivo', categoria: 0, espacos: 1, desc: 'Raio 6m: atordoados por 1 rodada (Fortitude DT Agi reduz para ofuscado e surdo).' },
  { nome: 'Granada de fragmentação', grupo: 'Explosivo', categoria: 1, espacos: 1, desc: 'Raio 6m: 8d6 de perfuração (Reflexos DT Agi reduz à metade).' },
  { nome: 'Granada de fumaça', grupo: 'Explosivo', categoria: 0, espacos: 1, desc: 'Raio 6m: cegos e sob camuflagem total. Dura 2 rodadas.' },
  { nome: 'Granada incendiária', grupo: 'Explosivo', categoria: 1, espacos: 1, desc: 'Raio 6m: 6d6 de fogo e em chamas (Reflexos DT Agi reduz e evita).' },
  { nome: 'Mina antipessoal', grupo: 'Explosivo', categoria: 1, espacos: 1, desc: 'Cone de 6m: 12d6 de perfuração (Reflexos DT Int reduz à metade). Detonada por controle remoto.' },
  // Itens Operacionais
  { nome: 'Algemas', grupo: 'Operacional', categoria: 0, espacos: 1, desc: 'Prender exige agarrar e vencer novo teste. Escapar: Acrobacia DT 30.' },
  { nome: 'Arpéu', grupo: 'Operacional', categoria: 0, espacos: 1, desc: 'Prender exige Pontaria DT 15. Subir com corda: +5 em Atletismo.' },
  { nome: 'Bandoleira', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Uma vez por rodada, saque ou guarde um item como ação livre.' },
  { nome: 'Binóculos', grupo: 'Operacional', categoria: 0, espacos: 1, desc: '+5 em Percepção para observar coisas distantes.' },
  { nome: 'Bloqueador de sinal', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Impede conexão de celulares em alcance médio.' },
  { nome: 'Cicatrizante', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Ação padrão: cura 2d8+2 PV em você ou ser adjacente. Item é gasto.' },
  { nome: 'Corda', grupo: 'Operacional', categoria: 0, espacos: 1, desc: '10m de corda resistente. +5 em Atletismo para descer.' },
  { nome: 'Equipamento de sobrevivência', grupo: 'Operacional', categoria: 0, espacos: 2, desc: '+5 em Sobrevivência para acampar e orientar-se, sem precisar de treinamento.' },
  { nome: 'Lanterna tática', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Ilumina cone de 9m. Ação de movimento: ofusca ser em alcance curto por 1 rodada.' },
  { nome: 'Máscara de gás', grupo: 'Operacional', categoria: 0, espacos: 1, desc: '+10 em Fortitude contra efeitos que dependam de respiração.' },
  { nome: 'Mochila militar', grupo: 'Operacional', categoria: 1, espacos: 0, desc: 'Não ocupa espaço e aumenta sua capacidade de carga em 2 espaços.' },
  { nome: 'Óculos de visão térmica', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Elimina a penalidade em testes por camuflagem.' },
  { nome: 'Pé de cabra', grupo: 'Operacional', categoria: 0, espacos: 1, desc: '+5 em Força para arrombar portas. Pode ser usado como bastão.' },
  { nome: 'Pistola de dardos', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Dardo sonífero em alcance curto: inconsciente até o fim da cena (Fortitude DT Agi reduz). 2 dardos.' },
  { nome: 'Pistola sinalizadora', grupo: 'Operacional', categoria: 0, espacos: 1, desc: 'Sinalizador luminoso. Arma de disparo leve, alcance curto, 2d6 de fogo. 2 cargas.' },
  { nome: 'Soqueira', grupo: 'Operacional', categoria: 0, espacos: 1, desc: '+1 em dano desarmado e o torna letal. Pode receber modificações e maldições de armas corpo a corpo.' },
  { nome: 'Spray de pimenta', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Ser adjacente fica cego por 1d4 rodadas (Fortitude DT Agi evita). 2 usos.' },
  { nome: 'Taser', grupo: 'Operacional', categoria: 1, espacos: 1, desc: 'Ser adjacente: 1d6 de eletricidade e atordoado por 1 rodada (Fortitude DT Agi evita). 2 usos.' },
  { nome: 'Traje hazmat', grupo: 'Operacional', categoria: 1, espacos: 2, desc: '+5 em resistência contra efeitos ambientais e resistência a químico 10.' },
  // Itens Paranormais
  { nome: 'Amarras de (elemento)', grupo: 'Paranormal', categoria: 2, espacos: 1, desc: 'Armadilha (2 PE) ou laçar (1 PE) criaturas vulneráveis ao elemento.' },
  { nome: 'Câmera de aura paranormal', grupo: 'Paranormal', categoria: 2, espacos: 1, desc: 'Foto (ação padrão, 1 PE) revela auras paranormais em pessoas e objetos.' },
  { nome: 'Componentes ritualísticos de (elemento)', grupo: 'Paranormal', categoria: 0, espacos: 1, desc: 'Necessários para conjurar rituais do elemento (não existem de Medo).' },
  { nome: 'Emissor de pulsos paranormais', grupo: 'Paranormal', categoria: 2, espacos: 1, desc: 'Isca: atrai criaturas do elemento e afasta as do oposto (Vontade DT Pre evita).' },
  { nome: 'Escuta de ruídos paranormais', grupo: 'Paranormal', categoria: 2, espacos: 1, desc: 'Grava ruídos paranormais por 24h. Ouvir fornece +5 em Ocultismo para identificar criatura.' },
  { nome: 'Medidor de estabilidade da membrana', grupo: 'Paranormal', categoria: 2, espacos: 1, desc: 'Avalia o estado da Membrana em uma área (requer treino em Ocultismo).' },
  { nome: 'Scanner de manifestação paranormal de (elemento)', grupo: 'Paranormal', categoria: 2, espacos: 1, desc: 'Consome 1 PE/rodada: aponta direção de manifestações do elemento em alcance longo.' },
]

// Capacidade de carga: 5 espaços por ponto de Força (2 se Força 0). Mochila militar +2.
export function capacidadeCarga(forca, temMochilaMilitar = false) {
  const base = forca <= 0 ? 2 : forca * 5
  return base + (temMochilaMilitar ? 2 : 0)
}
