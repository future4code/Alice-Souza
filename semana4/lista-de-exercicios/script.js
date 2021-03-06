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

//  3:
// -------
// // O código não funcionou, pois precisava de um valor para a quantidade
// // e não tinha incremento. O código arrumado ficou assim:
// const quantidadeDeNumerosPares = 7;
// let i = 0;
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2);
//   i++
// };

//  4:
// -------
// const verificaTriangulo = (a, b, c) => {
//   if (a === b && b === c && c === a) {
//     console.log('O triângulo é EQUILÁTERO');
//   } else if ((b === a && c !== b && c !== a) || (a === c && b !== c && b !== a) || (a !== c && b !== a && b === c)) {
//     console.log('O triângulo é ISÓSCELES');
//   } else if (a !== b && b !== c && c !== a) {
//     console.log('O triângulo é ESCALENO');
//   };
// };
// verificaTriangulo(10, 14, 12);

//  5:
// -------
// const verificaNumero = (a, b) => {
//   if (a === b) {  // Caso sejam iguais, para a função e mostra o seguinte:
//     console.log('Os dois números são iguais');
//     console.log ('A diferença entre eles é 0');
//   } else {  // Caso não sejam iguais:
//     if (a > b) {  // Verificando o maior 
//       console.log(`O maior é: ${a}`);
//     } else{
//       console.log(`O maior é: ${b}`);
//     };
//     if (a % b === 0) {  // Verificando se a é divisível por b
//       console.log(`${a} é divisível por ${b}`);
//     } else {
//       console.log(`${a} não é divisível por ${b}`);
//     }; 
//     if (b % a === 0) {  // Verifica se b é divisível por a
//       console.log(`${b} é divisível por ${a}`);
//     } else {
//       console.log(`${b} não é divisível por ${a}`);
//     };
//     if (a > b) {  // Calculando a diferença p/ retornar positivo
//       console.log (`A diferença entre eles é ${a - b}`);
//     } else{
//       console.log(`A diferença entre eles é ${b - a}`);
//     };
//   };
// };
// verificaNumero(15, 3);

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// // // EXERCÍCIOS DE FUNÇÕES:

// -------------------------------

//  1:
// -------
// let numerosArray = [1, 43, 2, 54, 78, 90, 50];
// const verificaNumeros = (array) => {
//   let menor = Infinity;
//   let maior = 0;
//   for (numero of array) {
//     if (numero < menor) {
//       menor = numero;
//     }
//   };
//   for (numero of array) {
//     if (numero > maior) {
//       maior = numero;
//     }
//   }
//   console.log(menor);
//   console.log(maior);
// };
// verificaNumeros(numerosArray);

//  2:
// ------
// const alerta = () => {
//   alert("Hello, Labenu!");
// };
// alerta();

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// // // EXERCÍCIOS DE OBJETOS:

// -------------------------------

//  1:
// Quando precisamos armazenar muitos dados, atribuir as mesmas funcionalidades
// a esses dados, etc...

//  2:
// -------
// const criaRetangulo = (lado1, lado2) => {
//   let dadosRetangulo = {
//     largura: lado1,
//     altura: lado2,
//     perimetro: 2 * (lado1 + lado2),
//     area: lado1 * lado2
//   };
//   return dadosRetangulo;
// };
// console.log(criaRetangulo(10, 4));

//  3:
// -------
// const meuFilme = () => {
//   const filmeFavorito = {
//     titulo: 'O auto da Compadecida',
//     ano: 2000,
//     diretor: 'Guel Arraes',
//     atores: [
//       {ator1: 'Matheus Nachtergaele'},
//       {ator2: 'Selton Mello'},
//       {atriz: 'Denise Fraga'}
//     ],
//   };
//   console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.
// ano}, dirigido por ${filmeFavorito.diretor}, estrelado por ${filmeFavorito.atores[0].
// ator1}, ${filmeFavorito.atores[1].ator2} e ${filmeFavorito.atores[2].atriz}.`);
// };
// meuFilme();

//  4:
// -------
// const pessoa = {
//   nome: 'João',
//   idade: 34,
//   email: 'joao123@hotmail.com.br',
//   endereco: 'Rua das Flores, 321'
// };
// const anonimizarPessoa = () => {
//   let pessoaAnonima = {
//     ...pessoa,
//     nome: 'ANÔNIMO'
//   };
//   console.log(pessoaAnonima);
// };
// anonimizarPessoa();

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------------

// // // EXERCÍCIOS DE FUNÇÕES DE ARRAYS:

// -------------------------------

//  1:
// ------
// const pessoas = [
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ];
// // -------
// // // a:
// const pessoasMaiores = pessoas.filter((pessoa) => {
//   return pessoa.idade >= 20;
// });
// console.log(pessoasMaiores);
// // -------
// // // b:
// const pessoasMenores = pessoas.filter((pessoa) => {
//   return pessoa.idade < 20;
// });
// console.log(pessoasMenores);

//  2:
// -------
// const array = [1, 2, 3, 4, 5, 6];
// // ------
// // // a:
// const numeroVezesDois = array.map(numero => numero * 2);
// console.log(numeroVezesDois);
// // ------
// // // b:
// const numeroVezesTres = array.map(numero => String(numero * 3));
// console.log(numeroVezesTres);
// // ------
// // // c:
// const paresEImpares = array.map((numero) => {
//   if (numero % 2 === 0) {
//     return String(numero) + ' é par'
//   } else {
//     return String(numero) + ' é ímpar'
//   };
// });
// console.log(paresEImpares);

//  3:
// -------
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ];
// // ------
// // // a:
// const pessoasPermitidas = pessoas.filter(pessoa => {
//   return pessoa.altura >= 1.5 && (pessoa.idade >= 14 && pessoa.idade <= 60); 
// });
// console.log(pessoasPermitidas);
// // ------
// // // b:
// const pessoasNaoPermitidas = pessoas.filter(pessoa => {
//   return pessoa.altura < 1.5 || (pessoa.idade < 14 || pessoa.idade > 60); 
// });
// console.log(pessoasNaoPermitidas);

//  4:
// ------
// Array de todas as consultas:
// const consultas = [
//   { nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ];
// // Filtrando as consultas não canceladas:
// let consultaNaoCancelada = consultas.filter(consulta => {
//   return consulta.cancelada === false;
// });
// // Filtrando as consultas canceladas:
// let consultaCancelada = consultas.filter(consulta => {
//   return consulta.cancelada === true;
// });
// // Criando um email para as consultas não canceladas:
// let consultasNaoCanceladas = consultaNaoCancelada.map(cons => {
//   console.log(`Olá, Sr(a) ${cons.nome}. Estamos enviando esta mensagem para lembrá-lo(a) da sua consulta no dia ${cons.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`);
// });
// // Criando um email para as consultas canceladas:
// let consultasCanceladas = consultaCancelada.map(consu => {
//   console.log(`Olá, Sr(a) ${consu.nome}. Infelizmente, sua consulta marcada para o dia ${consu.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`);
// });

//  5:
// ------
// const contas = [
//   {cliente: "João", saldoTotal: 1000, compras: [100, 200, 300]},
//   {cliente: "Paula", saldoTotal: 7500, compras: [200, 1040]},
//   {cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000]},
//   {cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700]},
//   {cliente: "Artur", saldoTotal: 1800, compras: [200, 300]},
//   {cliente: "Soter", saldoTotal: 1200, compras: []}
// ];
// const calculaSaldo = (array) => {
// const saldoAtual = array.forEach((conta) => {
//   conta.saldoTotal -= conta.compras.reduce((acumulador, valorAtual) => {
//     return acumulador + valorAtual
// }, 0)});
// saldoAtual;
// console.log(array);
// };
// calculaSaldo(contas);










