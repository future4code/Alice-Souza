import { Response, Request } from "express"
import { selectUserById } from "../data/selectUserById"
import { getTokenData } from "../services/authenticator"
import { AuthenticationData } from "../services/authenticator"

export const getProfileById = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string
    const authentication: AuthenticationData = await getTokenData(token)
    if (!authentication) {
      res.statusCode = 401;
      throw new Error("Não autorizado!")
    }
    const user = await selectUserById(authentication.id)
    if (!user) {
      res.statusCode = 404;
      throw new Error("Usuário não encontrado!")
    }
    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email
    })
  } catch (error) {
    let { message } = error
    if (message === "jwt must be provided") {
      res.statusCode = 401;
      message = "Não autorizado!"
    }
    res.send({ message })
  }
}