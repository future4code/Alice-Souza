import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import { deleteUserTableById } from "../data/deleteUserTableById";

export async function deleteUserById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string
    const authenticationData = getTokenData(token)
    if (authenticationData.role !== "Admin") {
      throw new Error("Não Autorizado!")
    }
    const id = req.params.id
    await deleteUserTableById(id)
    res.sendStatus(200)
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}