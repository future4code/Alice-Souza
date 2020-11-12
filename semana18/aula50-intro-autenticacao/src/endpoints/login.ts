import { Request, Response } from "express";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";

export async function login(req: Request, res: Response) {
  try {
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Email inválido!")
    }
    const user = await selectUserByEmail(req.body.email)
    if (user.password !== req.body.password) {
      throw new Error("Senha inválida!")
    }
    const token = generateToken({
      id: user.id,
    })
    res.status(200).send({
      token
    })
  } catch (error) {
    res.status(400).send({
      message: error.message,
    })
  }
}