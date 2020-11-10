import { v4 } from "uuid";

// Essa é a função
export function generateId(): string {
  return v4()
}