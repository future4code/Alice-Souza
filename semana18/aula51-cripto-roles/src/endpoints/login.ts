import { Request, Response } from "express";
import { compare } from "bcryptjs";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { User } from "../types";
import { generateToken } from "../services/authenticator";

export async function login (req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body
    let message = "Usuário logado!"
    if (!email || !password) {
      res.statusCode = 406
      message = "Email e senha são obrigatórios!"
      throw new Error(message)
    }
    const user: User = await selectUserByEmail(email)
    if (!user) {
      res.statusCode = 404
      message = "Usuário não encontrado!"
      throw new Error(message)
    }
    const passwordIsCorrect: boolean = await compare(password, user.password)
    if(!passwordIsCorrect) {
      res.statusCode = 404
      message = "Usuário não encontrado ou senha incorreta!"
      throw new Error(message)
    }
    const token = generateToken({id: user.id, role: user.role})
    res.send({message, token})
  } catch (error) {
    let {message} = error
    if (message === "Cannot ready property 'id' of undefined") {
      message = "Usuário ou senha não existe(m)"
      res.statusCode = 404
    }
    res.send({message})
  } 
}