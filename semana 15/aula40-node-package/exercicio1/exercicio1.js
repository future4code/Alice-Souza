// EXERCÍCIO 1:

// A) 
// Colocamos "node nome-do-arquivo.js" em start que fica no package. Depois no terminal, colocamos npm start argumento(s)-do-usuario.

// B) 
const name = process.argv[2]
const age = Number(process.argv[3])
console.log(`Olá, ${name}! Você tem ${age} anos.`) 

// C)
console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`)



