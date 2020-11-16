import { Request, Response } from "express"
import { insertUser } from "../data/insertUser"
import { generateToken } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { hash } from "../services/hashManager"

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, role } = req.body
    let message = "Usuário criado com sucesso!"
    if (email.indexOf("@") === -1 || !email || !password || password.length < 6) {
      res.statusCode = 406
      message = "Email ou senha inválido!"
      throw new Error(message)
    }
    if (!name) {
      res.statusCode = 406;
      message = "Parâmetro inválido!"
      throw new Error(message)
    }
    const id = generateId()
    const cypherPassword = await hash(password)
    await insertUser({ id, name, email, password: cypherPassword, role })
    const token: string = generateToken({ id, role })
    res.status(200).send({
      token,
      message
    })
  } catch (error) {
    let { message } = error
    if (message.includes("Duplicate")) {
      message = "Usuário já existe!"
    }
    res.status(400).send(message)
  }
}