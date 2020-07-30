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

// DESAFIO 2:

// // Solicitações:
// const nomeCompleto = prompt("Qual o seu nome completo?");
// const tipoJogo = prompt("Qual o tipo de jogo? Digite IN para Internacional ou DO \
// para Doméstico").toUpperCase();
// const etapaJogo = prompt("Qual a etapa do jogo? Digite SF para Semifinal, DT para Decisão\
//  de Terceiro Lugar ou FI para Final.").toUpperCase();
// const categoria = Number(prompt("Qual a categoria? 1, 2, 3, ou 4?"));
// const quantIngressos = Number(prompt("Qual a quantidade de ingressos?"));

// // Imprimindo os valores solicitados (com algumas condicionais p/ as siglas):
// console.log("---Dados da Compra---");
// console.log("Nome do cliente:", nomeCompleto);
// if (tipoJogo === "IN"){
// console.log("Tipo do jogo: Internacional");
// } else {
//   console.log("Tipo do jogo: Doméstico")
// };
// if (etapaJogo === "SF"){
// console.log("Etapa do jogo: Semifinal");
// } else if (etapaJogo === "DT"){
//   console.log("Etapa do jogo: Decisão de Terceiro Lugar");
// } else {
//   console.log("Etapa do jogo: Final");
// };
// console.log("Categoria:", categoria);
// console.log("Quantidade de ingressos:", quantIngressos);
// console.log("---Valores---");

// // Condicionais (que estão na tabela)
// if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 1) { 
//   console.log("Valor do ingresso: R$", 1320);
//   console.log("Valor total: R$ ", quantIngressos * 1.320)
// } else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 1) { 
//   console.log("Valor do ingresso: U$", 1320 * 4.10);
//   console.log("Valor total: U$ ", 1320 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 2) { 
//   console.log("Valor do ingresso: R$", 880);
//   console.log("Valor total: R$ ", quantIngressos * 880);
// } else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 2) {
//   console.log("Valor do ingresso: R$", 880 * 4.10);
//   console.log("Valor total: R$ ",  880 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 3) { 
//   console.log("Valor do ingresso: R$", 550);
//   console.log("Valor total: R$ ", quantIngressos * 550);
// } else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 3) {
//   console.log("Valor do ingresso: R$", 550 * 4.10);
//   console.log("Valor total: R$ ",  550 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "SF" && categoria === 4) { 
//   console.log("Valor do ingresso: R$", 220);
//   console.log("Valor total: R$ ", quantIngressos * 220);
// } else if (tipoJogo === "IN" && etapaJogo === "SF" && categoria === 4) {
//   console.log("Valor do ingresso: R$", 220 * 4.10);
//   console.log("Valor total: R$ ",  220 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 1) { 
//   console.log("Valor do ingresso: R$", 660);
//   console.log("Valor total: R$ ", quantIngressos * 660);
// } else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 1) {
//   console.log("Valor do ingresso: R$", 660 * 4.10);
//   console.log("Valor total: R$ ",  660 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 2) { 
//   console.log("Valor do ingresso: R$", 440);
//   console.log("Valor total: R$ ", quantIngressos * 440);
// } else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 2) {
//   console.log("Valor do ingresso: R$", 440 * 4.10);
//   console.log("Valor total: R$ ",  440 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 3) { 
//   console.log("Valor do ingresso: R$", 330);
//   console.log("Valor total: R$ ", quantIngressos * 330);
// } else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 3) {
//   console.log("Valor do ingresso: R$", 330 * 4.10);
//   console.log("Valor total: R$ ",  330 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "DT" && categoria === 4) { 
//   console.log("Valor do ingresso: R$", 170);
//   console.log("Valor total: R$ ", quantIngressos * 170);
// } else if (tipoJogo === "IN" && etapaJogo === "DT" && categoria === 4) {
//   console.log("Valor do ingresso: R$", 170 * 4.10);
//   console.log("Valor total: R$ ",  170 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 1) { 
//   console.log("Valor do ingresso: R$", 1980);
//   console.log("Valor total: R$ ", quantIngressos * 1980);
// } else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 1) {
//   console.log("Valor do ingresso: R$", 1980 * 4.10);
//   console.log("Valor total: R$ ",  1980 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 2) { 
//   console.log("Valor do ingresso: R$", 1320);
//   console.log("Valor total: R$ ", quantIngressos * 1320);
// } else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 2) {
//   console.log("Valor do ingresso: R$", 1320 * 4.10);
//   console.log("Valor total: R$ ",  1320 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 3) { 
//   console.log("Valor do ingresso: R$", 880);
//   console.log("Valor total: R$ ", quantIngressos * 880);
// } else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 3) {
//   console.log("Valor do ingresso: R$", 880 * 4.10);
//   console.log("Valor total: R$ ",  880 * 4.10 * quantIngressos);
// } else if (tipoJogo === "DO" && etapaJogo === "FI" && categoria === 4) { 
//   console.log("Valor do ingresso: R$", 330);
//   console.log("Valor total: R$ ", quantIngressos * 330);
// } else if (tipoJogo === "IN" && etapaJogo === "FI" && categoria === 4) {
//   console.log("Valor do ingresso: R$", 330 * 4.10);
//   console.log("Valor total: R$ ",  330 * 4.10 * quantIngressos);
// };




