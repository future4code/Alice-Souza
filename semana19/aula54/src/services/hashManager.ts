import * as bcrypt from "bcryptjs";

// Essa função é usada no cadastro
export const hash = async (
  plainText: string // Essa será a senha
): Promise<string> => {
  const rounds = Number(process.env.BCRYPT_COST)
  const salt = await bcrypt.genSalt(rounds)
  return bcrypt.hash(plainText, salt)
}

// Essa função é usada no login (para comparar)
export const compare = async (
  plainText: string,  // Senha que o usuário coloca
  cypherText: string  // Senha que está no banco (é o que é retornado na função hash)
): Promise<boolean> => {
  return bcrypt.compare(plainText, cypherText) // Faz a comparação (Antes de haver a comparação, é feita a criptografia)
} 