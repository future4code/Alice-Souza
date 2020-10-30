import express from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";

// Configuration
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()

// Connection
export const connection = knex({ 
  client: "mysql",
  connection: {
     host:process.env.DB_HOST,
     port: Number(process.env.DB_PORT || "3306"),
     user: process.env.DB_USER,
     password: process.env.DB_PASSWORD,
     database: process.env.DB_DATABASE
  }
})

// Endpoints



// Function rotate
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});