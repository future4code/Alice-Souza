import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { selectUserById } from "../data/selectUserById";

export async function getUserById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string
    getTokenData(token)
    const id = req.params.id
    const user = await selectUserById(id)
    res.status(200).send({
      id: user.id,
      email: user.email,
      role: user.role
    })
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}