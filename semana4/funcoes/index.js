// EXERCÍCIOS DE INTERPRETAÇÃO:

//
// // 1:
//
// a. 10 
//    50
// b. Não iria aparecer nada, pois em algum lugar tem que ter o console.log. Nesse\
// caso poderia colocar o console.log no lugar de return.

//
// // 2:
//
// a. Darvas
//    Goli
// b. Amanda
//    Caio

//
// // 3:
//
// A função pega somente os números pares do array e multiplica cada um por ele 
// mesmo. Um bom nome para a função seria "MultiplicaPar".


// EXERCÍCIOS DE ESCRITA:

//
// // 4:
//

// a.
// const sobreMim = () => {
//   return 'Eu sou Alice, tenho 21 anos, moro no Rio de Janeiro e sou estudante.';
// };
// console.log(sobreMim());

// b.
// const sobreMim = (nome, idade, cidade, condicao) => {
//   return `Eu sou ${nome}, tenho ${idade} anos, moro no ${cidade} e ${condicao} estudante.`;
// };
// const condicao = (boolean) => {
//   if (boolean === true) {
//     return 'sou'
//   } else {
//     return 'não sou'
//   };
// };
// console.log(sobreMim('Alice', 21, 'Rio de Janeiro', condicao(true)));

//
// // 5:
//
// a.
// const somar = (a, b) => {
//   return a + b;
// };
// console.log(somar(2, 4));
//
// b.
// const boolean = (c, d) => {
//   if (c >= d) {
//     return 'O primeiro número é maior ou igual ao segundo.';
//   } else {
//     return 'O primeiro número NÃO é maior ou igual ao segundo.'
//   };
// };
// console.log(boolean(8, 4));
//
// c.
// const imprimeMensagem = (mensagem) => {
//   for (i = 1; i <= 10; i++){
//     console.log(i, mensagem);
//   };
// };
// imprimeMensagem('Olá, mundo!');

//
// // 6:
//
// a.
// const numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
// const iterar = (array) => {
//   for (numero of array){
//     console.log(numero)
//   };
// };
// iterar(numeros);
//
// b.
// const parOuImpar = (numero) => {
//   if (numero % 2 === 0){
//     console.log('O número é PAR.');
//   } else {
//     console.log('O número é ÍMPAR.');
//   };
// };
// parOuImpar(7);
//
// c.
// const numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
// const numerosPares = [];
// const quantidadePares = (array) => {
//   for (numero of array){
//     if (numero % 2 === 0) {
//       numerosPares.push(numero);
//     };
//   };
//   console.log(`Tem ${numerosPares.length} números pares dentro do array`);
// };
// quantidadePares(numeros);
//
// d.
// const numeros = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];
// const parOuImpar = (array) => {
//   for (numero of array) {
//     if (numero % 2 === 0){
//       console.log(`O número ${numero} é PAR.`);
//     } else {
//       console.log(`O número ${numero} é ÍMPAR.`);
//     };
//   }
// };
// parOuImpar(numeros);











