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
idade = prompt ("Digite sua idade");
console.log(typeof nome);
console.log(typeof idade);

// Foi impresso "string" para as duas variáveis, pois agora o usuário dá um valor a elas.

console.log("Olá " + nome + ", " + "você tem " + idade + " anos.");
