import { Request, Response } from "express";
import { insertTask } from "../data/insertTask";

export async function createTask(req: Request, res: Response) {
  try {
    if(!req.body.title || req.body.description || req.body.limitDate || req.body.creatorUserId) {
      res.status(400).send("Preencha todos os campos!")
    }
    const id: string = Date.now() + Math.random().toString()
    await insertTask(
      req.body.title,
      req.body.description,
      req.body.limitDate,
      req.body.creatorUserId
    )
    res.status(200).send("Sucesso!")
  } catch (error) {
    res.status(400).send({ 
      message: error.message || error.sqlMessage
    })
  }
}