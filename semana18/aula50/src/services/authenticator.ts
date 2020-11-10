import * as jwt from "jsonwebtoken";

export type AuthenticationData = { id: string }

export const generateToken = (id: AuthenticationData): string => {
  return jwt.sign(
    id,
    process.env.JWT_KEY as string,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  )
}

export const getTokenData = (token: string): AuthenticationData => {
  const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: tokenData.id,
  }
  return result
}