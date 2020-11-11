import { StringifyOptions } from "querystring";
import { connection } from "../index";

export default async function insertAddressUser(
  id: string,
  street: string,
  number: string,
  complement: string,
  neighborhood: string,
  city: string,
  state: string,
  user_id: string
) {
  await connection.insert({
    id,
    street,
    number,
    complement,
    neighborhood,
    city,
    state,
    user_id
  }).into('address_users')
}