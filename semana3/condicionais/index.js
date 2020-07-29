// EXERCÍCIOS DE INTERPRETAÇÃO:

// 1.
// O código pede um número ao usuário e transforma a string em number.
// Ele verifica se o número é par ou ímpar. 
// Se for par, retorna "Passou no teste."
// Se for ímpar, retorna "Não passou no teste." 

// 2.
// a. O código serve para determinar o preço da fruta que o usuário escolher.
// b. Se for escolhido Maçã será impresso: "O preço da fruta Maçã é R$ 2.25".
// c. Se for Pêra (sem o break) será impresso: "O preço da fruta Pêra é R$ 5.5 R$ 5".

// 3.
// a. Pedindo um número ao usuário e transformando ele num Number.
// b. Se for o número 10, será impresso: "Esse número passou no teste" e um erro. 
// Se for o -10, retorna um erro.
// c. Sim, haverá erro, pois o escopo filho não compartilha sua variável com o pai.

// EXERCÍCIOS DE ESCRITA:

// 4.
// const idade = Number(prompt("Digite sua idade"));
// if (idade >= 18){
//   console.log("Você pode dirigir!");
// } else {
//   console.log("Você não pode dirigir!");
// };

// 5.
// const turno = prompt("Aluno, qual o seu turno? Digite M para matutino,\
//  V para vespertino ou N para noturno");
// if (turno.toUpperCase() === "M") {
//   console.log("Bom dia!");
// } else if (turno.toUpperCase() === "V") {
//   console.log("Boa tarde!");
// } else if (turno.toUpperCase() === "N") {
//   console.log("Boa noite!");
// } else {
//   console.log("Turno inválido!");
// };

// 6.
// const turno = prompt("Aluno, qual o seu turno? Digite M para matutino,\
//  V para vespertino ou N para noturno");
// switch(turno.toUpperCase()){
//   case "M":
//     console.log("Bom dia")
//     break;
//   case "V":
//     console.log("Boa tarde!")
//     break;
//   case "N":
//     console.log("Boa noite!")
//     break;
//   default:
//     console.log("Turno inválido!")
//     break;
// };

// 7.
// let generoFilme = prompt("Qual o gênero do filme?");
// let precoIngresso = Number(prompt("Qual o preço do ingresso?"));
// if (generoFilme === "fantasia" && precoIngresso <= 15) {
//   console.log("Bom filme!");
// } else {
//   console.log("Escolha outro filme :(");
// };


// DESAFIO 1:

// let generoFilme = prompt("Qual o gênero do filme?");
// let precoIngresso = Number(prompt("Qual o preço do ingresso?"));
// if (generoFilme === "fantasia" && precoIngresso <= 15) {
//   console.log("Bom filme!");
//   let snack = prompt("Qual snack você vai comprar?");
//   console.log("...com", snack);
// } else {
//   console.log("Escolha outro filme :(");
// };



