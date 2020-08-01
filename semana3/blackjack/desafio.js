/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert ('Bem-vindo(a) ao jogo de Blackjack!');
if (confirm('Quer iniciar uma nova rodada?')){
  const cartasJogo = [];

  cartasJogo[0] = comprarCarta();
  cartasJogo[1] = comprarCarta();
  cartasJogo[2] = comprarCarta();
  cartasJogo[3] = comprarCarta();

  for (i = 0; i < cartasJogo.length; i++){
      if (cartasJogo[0] === 'A' && cartasJogo[1] === 'A') {
         cartasJogo[0] = comprarCarta();
         cartasJogo[1] = comprarCarta();
      } else if (cartasJogo[2] === 'A' && cartasJogo[3] === 'A'){
         cartasJogo[2] = comprarCarta();
         cartasJogo[3] = comprarCarta();
      }
   };

  let carta1User = cartasJogo[0].texto;
  let carta2User = cartasJogo[1].texto;
  let pontuacaoUser = cartasJogo[0].valor + cartasJogo[1].valor;
  
  let carta3PC = cartasJogo[2].texto;
  let carta4PC = cartasJogo[3].texto;
  let pontuacaoPC = cartasJogo[2].valor + cartasJogo[3].valor;

  console.log(`Usuário - cartas: ${carta1User} ${carta2User} - pontuação ${pontuacaoUser}`);
  console.log(`Computador - cartas: ${carta3PC} ${carta4PC} - pontuação ${pontuacaoPC}`);

  if (pontuacaoUser > pontuacaoPC) {
     console.log('O usuário ganhou!');
  } else if (pontuacaoPC > pontuacaoUser) {
     console.log('O computador ganhou!')
  } else {
     console.log('Empate!');
  };
} else { 
  console.log('O jogo acabou!');
};
