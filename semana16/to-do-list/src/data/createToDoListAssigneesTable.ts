import { connection } from "../index";

export async function createToDoListAssignees(): Promise<void> {
  try {
    await connection.raw(`
      CREATE TABLE to_do_list_assignees (
        task_id VARCHAR(20),
        assignee_id VARCHAR(20),
        PRIMARY KEY (task_id, assignee_id),
        FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
        FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
      )
    `)
    console.log("Sucesso!")
  } catch (error) {
    console.error(error)
  }
}

createToDoListAssignees()