import { Request, Response } from "express"
import { selectUserByEmail } from "../data/selectUserByEmail"
import { generateToken } from "../services/authenticator"
import { compare } from "../services/hashManager"
import { User } from "../types/user"

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body
    let message = "Usuário logado!"
    if (!email || !password || email.indexOf("@") === -1) {
      res.statusCode = 406;
      message = "Preencha todos os campos!"
      throw new Error(message)
    }
    const user: User = await selectUserByEmail(email)
    if (!user) {
      res.statusCode = 404
      message = "Usuário ou senha incorreto!"
      throw new Error(message)
    }
    const isPasswordCorrect = await compare(password, user.password)
    if (!isPasswordCorrect) {
      res.statusCode = 401
      message = "Usuário não encontrado!"
      throw new Error(message)
    }
    const token: string = await generateToken({
      id: user.id,
      role: user.role
    })
    res.status(200).send({
      message,
      token
    })
  } catch (error) {
    let { message } = error
    if (message === "Cannot read property 'id' of undefined") {
      res.statusCode = 401
      message = "Usuário não cadastrado!"
    }
    res.send(message)
  }
}