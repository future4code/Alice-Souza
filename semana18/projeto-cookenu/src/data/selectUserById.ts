import { connection } from "../index"

export const selectUserById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM cookenu_users as user
    WHERE user.id = "${id}"
    `)
  console.log(result[0])
  return result[0][0]
}