import { connection } from "../index";

export const deleteUserTableById = async (id: string): Promise<any> => {
  await connection
    .delete().from("to_do_list_users").where({ id })
}