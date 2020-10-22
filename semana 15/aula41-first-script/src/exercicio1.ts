// EXERCÍCIO 1:


// A)
// export const minhaString: string = 2
// Acontece um erro tanto no terminal, quanto na IDE.


// B) 
export const meuNumero: number = 21
// Para aceitar strings, basta fazer um union type:
export let meuNumeroUnionType: number | string 
meuNumeroUnionType = "Hello" 
meuNumeroUnionType = 21


// E)
enum CORES_ARCO_IRIS {
  ROXO = "Roxo",
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
}


// C)
type personTypes = {
  nome: string,
  idade: number,
  corFavorita: CORES_ARCO_IRIS
}
const pessoa1: personTypes = {
  nome: "Alice",
  idade: 21,
  corFavorita: CORES_ARCO_IRIS.VERDE
}


// D)
const pessoa2: personTypes = {
  nome: "Bryan",
  idade: 7,
  corFavorita: CORES_ARCO_IRIS.ROXO
}
const pessoa3: personTypes = {
  nome: "Bia",
  idade: 50,
  corFavorita: CORES_ARCO_IRIS.AZUL
}
const pessoa4: personTypes = {
  nome: "André",
  idade: 89,
  corFavorita: CORES_ARCO_IRIS.LARANJA
}
export const people: personTypes[] = [pessoa1, pessoa2, pessoa3, pessoa4]




