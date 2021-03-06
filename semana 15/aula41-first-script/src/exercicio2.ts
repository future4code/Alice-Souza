// EXERCÍCIO 2:


type funcaoTipos = {
  maior: number,
  menor: number,
  media: number
}

export function obterEstatisticas(numeros: number[]): funcaoTipos {
  const numerosOrdenados = numeros.sort(
      (a, b) => a - b
  )
  let soma = 0
  for (let num of numeros) {
      soma += num
  }
  const estatisticas = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length
  }
  return estatisticas
}