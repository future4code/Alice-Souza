// Import libs
import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
// Import functions
import { createUser } from "./endpoints/createUser";
import { createTask } from "./endpoints/createTask";

// Configuration
dotenv.config();
const app: Express = express()
app.use(express.json())
app.use(cors())

// Connection
export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
})

// Endpoints
app.put("/user", createUser)
app.put("/task", createTask)

// Function rotate
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})