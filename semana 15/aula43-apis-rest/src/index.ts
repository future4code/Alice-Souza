// IMPORTS:
import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net";
import { users, userTypes } from "./users"

// CONFIGURAÇÕES:
const app: Express = express();

app.use(express.json())
app.use(cors())


// EXERCÍCIOS:


// -------- Exercício 1 ---------

// A)
// Método GET

// B)
// "/users"

app.get("/users", (req: Request, res: Response): void => {
  try {
      res.status(200).send(users);
  } catch (error) {
      res.status(400).send({
          message: "Error searching for users"
      });
  }
});


// -------- Exercício 2 --------

// A) 
// Passei os types com path parameters, pois são poucos que existem no array.

// B) 
// Sim, usando uma condicional. Exemplo: 
// if (!usersByType) {throw new Error("User Not Found")}

app.get("/users/:type", (req: Request, res: Response): void => {
  try {
      const usersByType: (userTypes | undefined)[] = users.filter(
        user => user.type === req.params.type
      )
      if (!usersByType) {
        throw new Error("User Not Found")
      }
      res.status(200).send(usersByType);
  } catch (error) {
      res.status(400).send( 
        { message: "Error searching for users" } 
      );
  }
});


// ------- Exercício 3 -------

// A)
// Usei aqui o query parameter, por ser mais variável dentro do array.

app.get("/users/search", (req: Request, res: Response): void => {
  const name = req.query.name
  try {
      const result: userTypes | undefined = users.find(
          user => user.name === name
      )
      if (!result) {
          throw new Error()
      }
      res.status(200).send(result)
  } catch (error) {
      res.status(400).send({
          message: "Error searching for user"
      })
  }
})


// Função para rodar:
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
      console.error(`Failure upon starting server.`);
  }
});



