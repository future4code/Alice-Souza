import { connection } from "../index";

export async function createToDoListTasks(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE to_do_list_tasks (
        id VARCHAR(20) PRIMARY KEY,
        title VARCHAR(64) NOT NULL,
        description VARCHAR(1000) DEFAULT "Not contain description!",
        deadline DATE,
        status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
        author_id VARCHAR(20),
        FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createToDoListTasks()