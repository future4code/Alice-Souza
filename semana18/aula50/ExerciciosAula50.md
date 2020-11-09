## EXERCÍCIOS - AULA 50

## ----- Exercício 1: -----

a) Acho melhor usar o tipo string, pois num id do tipo token existem além de números, letras.

b) (Função criada na pasta services)
```
import { v4 } from "uuid";

export function generateId(): string {
  return v4();
}
```

## ----- Exercício 2: -----

a) Primeiro, é criado uma variável para a tabela em que terá os dados inseridos. Depois, é feito uma conexão com o banco de dados para que a função abaixo faça sentido. Nessa função está a linguagem do banco de dados feita em TS (query builder), para que possa ser criado umm usuário.

b) (Função criada na pasta data)
```
export async function createUsersTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE users (
        id VARCHAR(255) PRIMARY KEY NOT NULL,
        email VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(60) NOT NULL UNIQUE
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}
```

c) (Função criada na pasta data)
```
export const createUser = async (id: string, email: string, password: string) => {
  await connection
    .insert({
      id,
      email,
      password,
    })
    .into("users");
}
```
## ----- Exercício 3: -----

a) 