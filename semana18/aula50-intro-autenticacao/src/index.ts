// Import libs
import express from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
// Import functions
import { signup } from "./endpoints/signup";
import { login } from "./endpoints/login";
import { getProfileUser } from "./endpoints/getProfileUser";

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
app.post("user/signup", signup)
app.post("user/login", login)
app.get("user/profile", getProfileUser)

// Function rotate
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})