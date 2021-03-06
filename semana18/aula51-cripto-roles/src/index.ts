// Import libs
import express from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
// Import functions
import { createUser } from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { getProfileUser } from "./endpoints/getProfileUser";
import { getUserById } from "./endpoints/getUserById";
import { deleteUserById } from "./endpoints/deleteUserById";

// Connection
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

// Configurations
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())

// Endpoints
app.post("/user/signup", createUser)
app.post("/user/login", login)
app.get("/user/profile", getProfileUser)
app.get("/user/:id", getUserById)
app.delete("/user/:id", deleteUserById)

// Function rotate
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
  } else {
      console.error(`Failure upon starting server.`);
  }
})