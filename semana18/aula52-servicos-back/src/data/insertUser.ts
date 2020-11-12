import { connection } from "../index";

export enum USER_ROLES {
    NORMAL = 'NORMAL',
    ADMIN = 'ADMIN'
}

export default async function insertUser(
    id: string,
    name: string,
    nickname: string,
    email: string,
    cep: string,
    number: string,
    complement: string,
    password: string,
    role: USER_ROLES
) {
    await connection.insert({
        id,
        name,
        nickname,
        email,
        cep,
        number,
        complement,
        password,
        role
    }).into('to_do_list_users')
}

