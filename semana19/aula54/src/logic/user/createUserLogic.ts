import insertUser from "../../dataAccess/user/insertUser"
import { generateToken } from "../../services/authenticator"
import { hash } from "../../services/hashManager"
import { generateId } from "../../services/idGenerator"

export async function createUserLogic(input: any): Promise<string> {
  try {
    if (
      !input.name ||
      !input.nickname ||
      !input.email ||
      !input.password ||
      !input.role
    ) {
      throw new Error('Preencha todos os campos!')
    }
    const id: string = generateId()
    const cypherPassword = await hash(input.password)
    await insertUser(
      id,
      input.name,
      input.nickname,
      input.email,
      cypherPassword,
      input.role
    )
    const token: string = generateToken({
      id,
      role: input.role
    })
    return token
  } catch (error) {
    if(error.code === 1048) {
      throw new Error("Esse usuário já existe!")
    }
  }
  return ""
}