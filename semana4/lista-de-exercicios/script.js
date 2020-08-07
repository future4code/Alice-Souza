// // // EXERCÍCIOS DE INTERPRETAÇÃO:

// -------------------------------------

//   1:
// -------
// Converte o valor em Dólar para Reais.
// O valor em dólar é o argumento que o usuário passa na função. E num prompt é
// pedido o valor da cotação do dólar. Então é retornado um valor em reais que 
// é igual ao valor em dólar (passado no argumento) vezes a cotação. 
// Será impresso o valor em reais.

//   2:
// -------
// Pede ao usuário qual tipo de investimento quer fazer e o valor e então diz
// o quanto esse investimento vai render. A função pega o tipo de investimento
// e o valor como argumentos e coloca numa condicional, exemplo, se for poupança
// o valor após investimento (que é o valor retornado) será igual ao valor vezes
// 1.03, daí tem outros tipos de investimentos que são calculados da mesma
// forma (CDB, ações, etc...). Se o tipo de investimento não estiver nas condi-
// cionais, é emitido um alert. E no final, como dito, irá retornar o valor após
// o investimento. Em seguida o usuário pode fazer quantas simulações quiser.

//  3:
// ------
// No "array1" ficam os números pares do array "numeros" e no "array2" ficam
// os ímpares. Isso é feito com o for..of, que pega cada item do array "numeros"
// e filtra eles (pares e ímpares). Se forem pares, vao para o "array1", se não, 
// vão para o "array2". Será impresso no console o seguinte:
// Quantidade total de números 14
// 6
// 8

//   4:
// ------
// Encontra o maior e o menor números do array. 
// É dado um valor inicial para as variáveis que receberão esses dois números.
// O valor inicial para a variável do menor número é Infinity (maior que qualquer
// número). E o inicial do maior número é 0. Depois é feito um for..of que pega
// cada elemento do array. Daí é colocado numa condicional. Primeiro, se o índex
// do array for menor que infinity, atribui esse índex à variável (o maior número).
// Depois é feito o contrário para encontrar o maior número.
// Será impresso no console o seguinte:
// 1590
// -10

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// // // EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO:

// -------------------------------

//  1:
// --------
// // FOR:
// let numeros = [1, 2, 3, 4, 78];
// const iteraListaUm = (array) => {
//   for (i = 0; i < array.length; i++) {
//     console.log(i);
//   };
// };
// iteraListaUm(numeros);
// --------
// // FOR..OF:
// const iteraListaDois = () => {
//   let array = [1, 2, 3, 4, 5];
//   for (item of array) {
//     console.log(item);
// }};
// iteraListaDois();
// --------
// // FOREACH:
// let listaTres = ['Alice', 'Luna', 'Beatriz', 'Leo', 'Jonas'];
// listaTres.forEach(nome => {
//   console.log(nome);
// });
// --------
// // MAP:
// let listaQuatro = ['BA', 'PR', 'SP', 'RJ', 'PB', 'AM'];
// let iteraListaQuatro = listaQuatro.map((estado) => {
//   console.log (`${estado} é um estado.`);
// });

//  2:
// -------
// a. false 
// b. false 
// c. true 
// d. true 
// e. false

