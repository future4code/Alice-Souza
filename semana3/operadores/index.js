// EXERCÍCIOS DE INTERPRETAÇÃO:

// 1. 
// a. false
// b. false
// c. true
// e. Boolean

// 2.
// a. undefined
// b. null
// c. 10
// d. 3
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// f. 9

// EXERCÍCIOS DE ESCRITA:

// 1.
let idadeUsuario = Number(prompt("Qual sua idade?"));
let idadeAmiga = Number(prompt("Qual a idade da sua melhor amiga?"));
console.log("Sua idade é maior do que a da sua melhor amiga?", idadeUsuario > idadeAmiga);
console.log("Diferença da sua idade para a da sua melhor amiga: ", idadeUsuario - idadeAmiga);

// 2.
let numeroPar = Number(prompt("Digite um número par"));
console.log(numeroPar % 2);
// O resto é sempre 0, porque os números inseridos são pares.
// Se o usuário inserir número ímpar, restará sempre 1.
