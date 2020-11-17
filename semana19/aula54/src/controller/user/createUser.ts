import { Request, Response } from "express"
import { createUserLogic } from "../logic/user/createUserLogic"

export async function createUser(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const input = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    }
    const token = await createUserLogic(input)
    res.status(201).send({
      message: "Sucesso!",
      token
    })
  } catch (error) {
    res.status(400).send({
      message: error.message || error.sqlMessage
    })
  }
}