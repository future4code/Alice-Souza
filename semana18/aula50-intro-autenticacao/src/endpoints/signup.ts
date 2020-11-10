import { Request, Response } from "express";
import { insertUser } from "../data/insertUser";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";

export async function signup(req: Request, res: Response) {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Senha ou email inválido(s)!");
    }
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Senha ou email inválido(s)!");
    }
    const id: string = generateId()
    await insertUser(
      id,
      req.body.email,
      req.body.password
    )
    const token: string = generateToken({ id })
    res.status(201).send({
      message: "Novo usuário criado com sucesso!",
      token
    })
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}