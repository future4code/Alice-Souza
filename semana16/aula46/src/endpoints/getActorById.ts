import { Request, Response } from "express";
import { selectActorById } from "../datas/selectActorById";

export async function getActorById (req: Request, res: Response) {
  try {
    const id = req.params.id;
    const actor = await selectActorById(id);
    res.status(200).send(actor)
  } catch (err) {
    res.status(400).send({
      message: "Error!"
    });
  }
}