// Imports
import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { Account } from "./types"
import { users } from "./users"

// Starting the web application with express
const app: Express = express()

// Activating the Bodyparser and cors modules
app.use(express.json())
app.use(cors())


// Endpoints:

// Create users
app.post("/users", (req: Request, res: Response): void => {
  try {
    // Request
    const { name, CPF, dateOfBirthAsString } = req.body
    // Age
    const [day, month, year] = dateOfBirthAsString.split("/")
    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)
    const ageMilisseconds: number = Date.now() - dateOfBirth.getTime()
    const ageYears: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365
    // Body
    const body: Account = {
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: []
    } 
    // Validations
    if (!req.headers.authorization) {
      res.statusCode = 401
      throw new Error("Informe o autorização (Authorization)!")
    } else if (ageYears < 18) {
      res.statusCode = 404
      throw new Error("A idade deve ser acima de 18!")
    } else {
      // Success
      users.push(body)
      res.status(200).send({ message: "Conta criada com sucesso!" })
    }
  } catch (error) {
    // Error
    res.status(400).send(error.message)
  }
})

// Get users
app.get("/users", (req: Request, res: Response): void => {
  try {
    if(!users.length) {
      throw new Error()
    }
    res.status(200).send(users)
  } catch (error) {
    res.status(400).send({ message: "Erro!" })
  }
})

// Get balance
app.get("/users/balance", (req: Request, res: Response) => {
  const name = req.query.name
  const CPF = req.query.CPF
  try {
    const result: Account[] = users.filter(
      user => user.name.includes(name as string) && user.CPF === CPF
    )
    if(!result) {
      throw new Error()
    }
    const balance = users.map(user => user.balance)
    res.status(200).send(balance)
  } catch (error) {
    res.status(400).send({ message: "Erro!" })
  }
})

// Add balance
app.put("/users/add-balance", (req: Request, res: Response): void => {
  try {
      const { name, CPF, balance } = req.body
      const newBalance = users.findIndex(user => user.name === name)
      if(!req.headers.authorization) {
          throw new Error()
      } else if (!newBalance) {
          throw new Error
      } else {
          users[newBalance].name = name
          users[newBalance].CPF = CPF
          users[newBalance].balance += balance
          res.status(200).send({ message: "Novo saldo adicionado!" })
      }
  } catch (error) {
      res.status(400).send({ message: "Error!" })
  }
})


// Function to rotate
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})
