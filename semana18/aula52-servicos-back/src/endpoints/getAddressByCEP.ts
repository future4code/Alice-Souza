import { Request, Response } from "express";
import { getAddressInfo } from "../services/getAddressInfo";

export default async function getAddressByCEP(req: Request, res: Response) {
   try {
      const address = await getAddressInfo(Number(req.params.cep))
      if (!address) {
         throw new Error("Endereço não encontrado!")
      }
      res.status(200).send({
         logradouro: address.logradouro,
         bairro: address.bairro,
         cidade: address.cidade,
         estado: address.estado
      })
   } catch (error) {
      res.status(400).send({ message: error.message || error.sqlMessage })
   }
}