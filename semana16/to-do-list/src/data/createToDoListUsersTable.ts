import { connection } from "../index";

export async function createToDoListUsers(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE to_do_list_users (
        id VARCHAR(20) PRIMARY KEY,
        name VARCHAR(80) NOT NULL,
        nickname VARCHAR(50) NOT NULL,
        email VARCHAR(80) UNIQUE NOT NULL
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createToDoListUsers()