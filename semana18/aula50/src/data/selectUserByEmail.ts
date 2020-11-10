import { connection } from "../index";

export const selectUserByEmail = async (email: string): Promise<any> => {
  const result = await connection
    .select("*")
    .from("users")
    .where({ email });
  return result[0];
}