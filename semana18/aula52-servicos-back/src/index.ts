// Import libs
import express from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
// Import functions
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";
import login from "./endpoints/login";
import getAddressByCEP from "./endpoints/getAddressByCEP";

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
app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})
app.post('/user/signup', createUser)
app.post("/user/login", login)
app.get('/user/:id', getUserById)
app.post('/user/edit', editUser)
app.put('/task', createTask)
app.get('/task/:id', getTaskById)
app.get("/address/:cep", getAddressByCEP)

// Function rotate
const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}...`);
   } else {
       console.error(`Failure upon starting server.`);
   }
})

debugger