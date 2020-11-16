import { connection } from "../index"
import { Recipe } from "../types/recipe"

export const insertRecipes = async (recipes: Recipe): Promise<any> => {
  const result = await connection
    .insert({
      id: recipes.id,
      description: recipes.description,
      title: recipes.title,
      user_id: recipes.user_id
    })
    .into("cookenu_recipes")
  return result

}