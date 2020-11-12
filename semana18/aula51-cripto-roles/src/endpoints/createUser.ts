import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import { generateId } from "../services/idGenerator";
import { generateToken } from "../services/authenticator";
import { generateHash } from "../services/hashManager";

export async function createUser(
    req: Request,
    res: Response
) {
    try {
        if (
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email ||
            !req.body.password ||
            !req.body.role
        ) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }
        const id: string = generateId()
        const cypherPassword = await generateHash(req.body.password)
        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword,
            req.body.role
        )
        const token: string = generateToken({
            id,
            role: req.body.role
        })
        res.status(201).send({ message: "Certo", token })
    } catch (error) {
        res.status(400).send({ message: error.message || error.sqlMessage })
    }
}