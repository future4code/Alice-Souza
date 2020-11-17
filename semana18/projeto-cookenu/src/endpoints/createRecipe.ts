import { Response, Request } from "express"
import { insertRecipe } from "../data/insertRecipe"
import { selectUserById } from "../data/selectUserById"
import { getTokenData } from "../services/authenticator"
import { generateId } from "../services/idGenerator"
import { AuthenticationData } from "../services/authenticator"

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const token: string = req.headers.authorization as string
    const { title, description } = req.body
    const authentication: AuthenticationData = await getTokenData(token)
    let message = "Receita criada com sucesso!"
    if (!title || !description) {
      res.statusCode = 400;
      message = "Preencha todos os campos!"
      throw new Error(message)
    }
    if (!authentication) {
      res.statusCode = 401;
      message = "Não autorizado!"
      throw new Error(message)
    }
    const id = generateId()
    const user = await selectUserById(authentication.id)
    await insertRecipe({ id, title, description, user_id: user.id })
    res.status(200).send(message)
  } catch (error) {
    let { message } = error
    if (message === "jwt must be provided") {
      res.statusCode = 401
      message = "Não autorizado!"
    }
    res.send(message)
  }
}