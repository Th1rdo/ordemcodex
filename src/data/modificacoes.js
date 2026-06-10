// Modificações — Tabelas 3.5, 3.7, 3.9 (Ordem Paranormal RPG v1.3)
// Cada modificação aumenta a categoria do item em I. Modificações iguais não se acumulam.
// aplicavel (armas): lista de tipoArma compatíveis. 'municao' aplica-se a pacotes de munição.

export const MODS_ARMA = [
  // Corpo a corpo e disparo
  { nome: 'Certeira', aplicavel: ['corpoACorpo', 'disparo'], efeito: '+2 em testes de ataque.' },
  { nome: 'Cruel', aplicavel: ['corpoACorpo', 'disparo'], efeito: '+2 em rolagens de dano.' },
  { nome: 'Perigosa', aplicavel: ['corpoACorpo', 'disparo'], efeito: '+2 em margem de ameaça.' },
  // Fogo
  { nome: 'Alongada', aplicavel: ['fogo'], efeito: '+2 em testes de ataque.' },
  { nome: 'Calibre grosso', aplicavel: ['fogo'], efeito: 'Aumenta o dano em mais um dado do mesmo tipo. Exige munição específica de calibre grosso.' },
  { nome: 'Compensador', aplicavel: ['fogo'], efeito: 'Anula a penalidade em ataques por disparar rajadas.', requerAutomatica: true },
  { nome: 'Ferrolho automático', aplicavel: ['fogo'], efeito: 'A arma se torna automática.' },
  { nome: 'Mira laser', aplicavel: ['fogo'], efeito: '+2 em margem de ameaça.' },
  { nome: 'Mira telescópica', aplicavel: ['fogo'], efeito: 'Aumenta o alcance da arma em uma categoria e permite Ataque Furtivo em qualquer alcance.' },
  { nome: 'Silenciador', aplicavel: ['fogo'], efeito: 'Reduz em –2d20 a penalidade em Furtividade para se esconder após atacar.' },
  { nome: 'Visão de calor', aplicavel: ['fogo'], efeito: 'Ignora camuflagem do alvo.' },
  // Comuns a todas
  { nome: 'Discreta', aplicavel: ['corpoACorpo', 'disparo', 'fogo'], efeito: '+5 em testes para ser ocultada e reduz o espaço em –1.' },
  { nome: 'Tática', aplicavel: ['corpoACorpo', 'disparo', 'fogo'], efeito: 'Pode sacar a arma como ação livre.' },
  // Munições
  { nome: 'Dum dum', aplicavel: ['municao'], efeito: '+1 no multiplicador de crítico. Apenas balas curtas e longas.' },
  { nome: 'Explosiva', aplicavel: ['municao'], efeito: 'Aumenta o dano em +2d6. Apenas balas curtas e longas.' },
]

export const MODS_PROTECAO = [
  { nome: 'Antibombas', aplicavel: ['pesada'], efeito: '+5 em testes de resistência contra efeitos de área.' },
  { nome: 'Blindada', aplicavel: ['pesada'], efeito: 'Aumenta a resistência a dano para 5 e o espaço em +1.' },
  { nome: 'Discreta', aplicavel: ['leve'], efeito: 'Reduz o espaço em –1 e fornece +5 em testes para ser ocultada.', incompativel: ['Reforçada'] },
  { nome: 'Reforçada', aplicavel: ['leve', 'pesada', 'escudo'], efeito: 'Aumenta a Defesa em +2 e o espaço em +1.', incompativel: ['Discreta'] },
]

export const MODS_ACESSORIO = [
  { nome: 'Aprimorado', efeito: 'Aumenta um dos bônus em perícia para +5.' },
  { nome: 'Discreto', efeito: 'Reduz o espaço em –1 e fornece +5 em testes para ser ocultado.' },
  { nome: 'Função adicional', efeito: 'Concede +2 em uma perícia adicional.' },
  { nome: 'Instrumental', efeito: 'O acessório funciona como um kit de perícia específico.' },
]
