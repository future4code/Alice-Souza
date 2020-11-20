import * as jwt from "jsonwebtoken";
import { USER_ROLES } from "../types/user";

export type AuthenticationData = { id: string, role: USER_ROLES }

export const generateToken = (input: AuthenticationData): string => {
  return jwt.sign(
    input,
    process.env.JWT_KEY as string,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  )
}

export const getTokenData = (token: string): AuthenticationData =>{
  const tokenData = jwt.verify(token, process.env.JWT_KEY as string)
  return tokenData as AuthenticationData
}