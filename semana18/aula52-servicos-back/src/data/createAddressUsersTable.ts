  import { connection } from "../index";

export async function createAddressUsersTable(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE address_users (
        id INT PRIMARY KEY NOT NULL,
        logradouro VARCHAR(150) NOT NULL,
        numero VARCHAR(10) NOT NULL,
        complemento VARCHAR(250),
        bairro VARCHAR(64) NOT NULL,
        cidade VARCHAR(64) NOT NULL,
        estado VARCHAR(64) NOT NULL,
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