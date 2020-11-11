  import { connection } from "../index";

export async function createAddressUsersTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE address_users (
        id INT PRIMARY KEY NOT NULL,
        street VARCHAR(150) NOT NULL,
        number VARCHAR(10) NOT NULL,
        complement VARCHAR(250),
        neighborhood VARCHAR(64) NOT NULL,
        city VARCHAR(64) NOT NULL,
        state VARCHAR(64) NOT NULL,
        user_id VARCHAR(20) NOT NULL,
        FOREIGN KEY (user_id) REFERENCES to_do_list_users(id)
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createAddressUsersTable()