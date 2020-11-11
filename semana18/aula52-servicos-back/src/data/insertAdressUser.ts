import { StringifyOptions } from "querystring";
import { connection } from "../index";

export default async function insertAddressUser(
    id: string,
    logradouro: string,
    numero: string,
    complemento: string,
    bairro: string,
    cidade: string,
    estado: string,
    user_id: string
) {
    await connection.insert({
      id,
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      estado,
      user_id
    }).into('address_users')
}