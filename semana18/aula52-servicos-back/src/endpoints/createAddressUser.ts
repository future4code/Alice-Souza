import { Request, Response } from "express";
import insertAddressUser from "../data/insertAddressUser";
import { generateId } from "../services/idGenerator";

export default async function createAddressUser(req: Request, res: Response) {
  try {
    if (
      !req.body.street ||
      !req.body.number ||
      !req.body.neighborhood ||
      !req.body.city ||
      !req.body.state ||
      !req.body.user_id
    ) {
      throw new Error('Preencha todos os campos!')
    }
    const id: string = generateId()
    await insertAddressUser(
      id,
      req.body.street,
      req.body.number,
      req.body.complememnt,
      req.body.neighborhood,
      req.body.city, 
      req.body.state, 
      req.body.user_id
    )
    res
      .status(201)
      .send({ message: "Endereço criado!" })
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage })
  }
}