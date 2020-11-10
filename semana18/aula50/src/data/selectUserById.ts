import { connection } from "../index";

export async function selectUserById (id: string): Promise<any> {
  const result = await connection
    .select("*")
    .from("users")
    .where({ id })
  return result[0]
}