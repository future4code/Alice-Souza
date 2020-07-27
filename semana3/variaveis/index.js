// EXERCÍCIOS DE INTERPRETAÇÃO:

// 1.
// Temos duas variáveis, "a" e "b", valendo 10 cada uma. Primeiramente será impressa 
// a variável "b" que vale 10. Depois o valor de "b" será mudado para 5. Logo 
// depois as duas variáveis são impressas, "a" e "b", valendo 10 e 5 respectivamente.

// 2.
// Serão impressos os valores: 10, 10 e 10.

// EXERCÍCIOS DE ESCRITA:

// 1.

let nome;
let idade;
console.log(typeof nome);
console.log(typeof idade);

// Foi impresso "undefined", porque a variável foi declarada, mas está sem valor,
// indefinida, sem significado.

nome = prompt ("Digite seu nome");
idade = Number(prompt("Digite sua idade"));
console.log(typeof nome);
console.log(typeof idade);

// Foi impresso "string" para as duas variáveis, pois agora o usuário dá um valor a elas.

console.log("Olá " + nome + ", " + "você tem " + idade + " anos.");

// 2.

let name = prompt ("Qual o seu nome?");
let years = prompt ("Quantos anos você tem?");
let signo = prompt ("Qual é seu signo?");
let filme = prompt ("Qual seu filme favorito?");
let cor = prompt ("Qual sua cor preferida?");

console.log("1. Qual o seu nome? " + name);
console.log("2. Quantos anos você tem? " + years);
console.log("3. Qual é seu signo? " + signo);
console.log("4. Qual seu filme favorito? " + filme);
console.log("5. Qual sua cor preferida? " + cor);

// 3.

let comidasPreferidas = ['Feijão', 'Pipoca', 'Laranja', 'Doce de amendoim', 'Pamonha'];

console.log(comidasPreferidas);

console.log('Essas são as minhas comidas preferidas:')
console.log(comidasPreferidas[0]);
console.log(comidasPreferidas[1]);
console.log(comidasPreferidas[2]);
console.log(comidasPreferidas[3]);
console.log(comidasPreferidas[4]);

comidasPreferidas[1] = prompt ("Qual sua comida preferida?")
console.log(comidasPreferidas);

// 4.

const perguntas = ["Você tem filhos(as)?", "Você é brasileiro(a)?", "Você trabalha?"];
const respostas = [false, true, false];
console.log(perguntas[0], respostas[0]);
console.log(perguntas[1], respostas[1]);
console.log(perguntas[2], respostas[2]);

