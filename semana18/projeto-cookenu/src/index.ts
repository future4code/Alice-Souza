import express from "express"
import knex from "knex"
import cors from "cors"
import dotenv from "dotenv"
import { AddressInfo } from "net"
import { createUser } from "./endpoints/createUser"
import { login } from "./endpoints/login"
import { getProfileById } from "./endpoints/getProfileById"
import { createRecipe } from "./endpoints/createRecipe"
import { getRecipeById } from "./endpoints/getRecipeById"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

export const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: 3306
  }
})

app.put("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/profile", getProfileById)
app.post("/recipe/new", createRecipe)
app.get("/recipe/:id", getRecipeById)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})