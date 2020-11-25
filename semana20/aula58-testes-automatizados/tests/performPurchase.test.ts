import { User } from "../src/model/User"
import { performPurchase } from "../src/performPurchase"

describe("Verify balance", () => {

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100
    }
    const result = performPurchase(user, 50)
    expect(result).toEqual({
      ...user,
      balance: 50
    })
  })

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 100
    }
    const result = performPurchase(user, 50)
    expect(result).toEqual({
      ...user,
      balance: 50
    })
  })

  test("Testing balance greater than value", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30
    }
    const result = performPurchase(user, 50)
    expect(result).toEqual(undefined)
  })

})