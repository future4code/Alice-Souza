import { connection } from "../index";

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

createUsersTable()