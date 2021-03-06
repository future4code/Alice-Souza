import { connection } from "../index"

export const selectRecipeById = async (id: string): Promise<any> => {
  try {
    const result = await connection.raw(`
      SELECT * FROM cookenu_recipes as recipe
      WHERE recipe.id = "${id}"
    `)
    return {
      id: result[0][0].id,
      title: result[0][0].title,
      description: result[0][0].description,
      createdAt: result[0][0].createdAt,
      userId: result[0][0].user_id
    }
  }
  catch (error) {
    throw new Error(error.sqlMessage || error.message)
  }
}