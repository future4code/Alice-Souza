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

a) as string quer dizer que o item correspondente é uma string, como por exemplo, itens que ficam no arquivo .env.

b) (Função criada na pasta services)
```
export type AuthenticationData = { id: string }

export const generateToken = (id: AuthenticationData): string => {
  return jwt.sign(
    id,
    process.env.JWT_KEY as string,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  )
}
```

## ----- Exercício 4: -----

a) (Função criada na pasta endpoints)
```
export async function signup(req: Request, res: Response) {
  try {
    if (
      !req.body.email ||
      !req.body.password
    ) {
      throw new Error('Perencha todos os campos!')
    }
    const id: string = generateId()
    await insertUser(
      id,
      req.body.email,
      req.body.password
    )
    const token: string = generateToken({ id })
    res.status(201).send({
      message: "Novo usuário criado com sucesso!",
      token
    })
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}
```

b) Acrescentei a seguinte condicional dentro da função:
```
if (!req.body.email || req.body.email.indexOf("@") === -1) {
  throw new Error("Senha ou email inválido(s)!");
}
```

c) Acrescentei a seguinte condicional dentro da função:
```
if (!req.body.password || req.body.password.length < 6) {
  throw new Error("Senha ou email inválido(s)!");
}
```

## ----- Exercício 5: -----

a) (Função criada na pasta data)
```
export const selectUserByEmail = async (email: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("users")
    .where({ email });
  return result[0];
}
```

## ----- Exercício 6: -----

a) (Função criada na pasta endpoints)
```
export async function login(req: Request, res: Response) {
  try {
    const user = await selectUserByEmail(req.body.email)
    if (user.password !== req.body.password) {
      throw new Error("Senha inválida!")
    }
    const token = generateToken({
      id: user.id,
    })
    res.status(200).send({
      token
    })
  } catch (error) {
    res.status(400).send({
      message: error.message,
    })
  }
})
```

b) Acrescentei a seguinte condicional dentro da função:
```
if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido!")
    }
```

## ----- Exercício 7: -----

a) any é um tipo que pode assumir qualquer valor. 

b) (Função criada na pasta services)
```
export const getTokenData = (token: string): AuthenticationData => {
  const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: tokenData.id,
  }
  return result
}
```

## ----- Exercício 8: -----

a) (Função criada na pasta data) 
```
export const selectUserById = async (id: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("users")
    .where({ id })
  return result[0]
}
```

b) (Função criada na pasta endpoints)
```
export async function getProfileUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const user = await selectUserById(authenticationData.id);
    res.status(200).send({
      id: user.id,
      email: user.email
    });
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
}
```


