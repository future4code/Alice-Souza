import { connection } from "../index";

export async function insertTask(
  title: string,
	description: string,
	limitDate: string,
	creatorUserId: string
) {
  await connection.insert({
    title, 
    description,
    limitDate,
    creatorUserId
  }).into("to_do_list_tasks")
}