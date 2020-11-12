import { Request, Response } from "express";
import { getAddressInfo } from "../services/getAddressInfo";

export default async function getAddressByCEP(req: Request, res: Response) {
   try {
      const address = await getAddressInfo(Number(req.params.cep))
      if (!address) {
         throw new Error("Endereço não encontrado!")
      }
      res.status(200).send({
         street: address.street,
         neighborhood: address.neighborhood,
         city: address.city,
         state: address.state
      })
   } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage })
   }
}