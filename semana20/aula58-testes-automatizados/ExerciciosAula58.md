## Exercícios - Aula 58

### ----- Exercício 1 -----
a) 
```
interface User {
	name: string
	balance: number
}
```
b) 
```
function performPurchase(user: User, value: number): User | undefined {
	if(user.balance >= value) {
		return {
			...user,
			balance: user.balance - value		
		}
	}
	return undefined
}
```
### ----- Exercício 2 -----
a)
```
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
```
b) 
```
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
```
c) 
```
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}
	const result = performPurchase(user, 50)
	expect(result).toEqual(undefined)
})
```


