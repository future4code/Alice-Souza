## EXERCÍCIOS - AULA 51
---
---
## ----- Exercício 1: -----
---

## a) 
round é onde fica armazenado o número do Cost, que fica na criptografia da senha.
salt fica também na criptografia, porém é uma string. Escolhemos o número 12 no 
round, por ser o mais comum nas libs.

---

## b)
(Função criada na pasta services)
```
export const generateHash = async (
  plainText: string 
): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST)
  const salt = await bcrypt.genSalt(rounds)
  return bcrypt.hash(plainText, salt)
}
```
---
## c) 
(Função criada na pasta services)
```
export const compare = async (
  plainText: string,  
  cypherText: string  
): Promise<boolean> => {
  return bcrypt.compare(plainText, cypherText)
} 
```
---
---
## ----- Exercício 2: -----
---
## a) 
Modificar primeiro o cadastro, para que antes seja feita a criptografia, para 
só depois fazer a comparação com as senhas criptografadas.

---

## b) 
Adicionei a seguinte constante dentro da função:
```
const cypherPassword = await generateHash(req.body.password)
```
Depois, substituí o "req.body.password" de dentro do body por "cypherPassword":
```
await insertUser(
  id,
  req.body.name,
  req.body.nickname,
  req.body.email,
  cypherPassword
)
```
---
## c)
Adicionei a seguinte variável dentro da função:
```
const passwordIsCorrect: boolean = await compare(password, user.password)
```
Depois, na verificação (condicional) se a senha existe, foi usada essa constante.

---

## d)
 Acredito que nao seja necessário, já que estaremos pegando esses dados através
do Token e só depois que o usuário estiver logado.

---
---
## ----- Exercício 3: -----
---
## a), b), c), d)
Alterações feitas nas funções (Tudo funcionando)

---
---
## ----- Exercício 4: -----
---
## a)
Adicionei a seguinte condicional dentro da função:
```
if (authenticationData.role !== "Normal") {
  res.statusCode = 401
  throw new Error("Não autorizado!");
}
```
Adicionei também "role: authenticationData.role" no envio da rsposta.

---
---
## ----- Exercício 5: -----
(Função "deleteUserById" na pasta endpoints)

---

## ----- Exercício 6: -----
(Função "getUserById" na pasta endpoints)








