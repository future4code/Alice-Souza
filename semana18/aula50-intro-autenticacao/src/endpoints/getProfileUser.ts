import { Request, Response } from "express";
import { selectUserById } from "../data/selectUserById";
import { getTokenData } from "../services/authenticator";

export async function getProfileUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization as string;
    const authenticationData = getTokenData(token);
    const user = await selectUserById(authenticationData.id);
    res.status(200).send({
      id: user.id,
      email: user.email
    });
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
}