## Exercícios Aula 59

### ----- Exercício 1 -----
a) 
```
export interface Character {
  name: string;
  life: number;
  strength: number;
  defense: number;
}
```

b) 
```
export const validateCharacter = (input: Character): boolean => {
  if (
    !input.name ||
		input.life === undefined || 
    input.strength === undefined ||
    input.defense === undefined
  ) {
    return false;
  }

  if (input.life <=0 || input.strength <=0 || input.defense <=0) {
    return false;
  }

  return true
}
```

### ----- Exercício 2 -----
a)
```
test("Should return false for empty name", () => {
    const result = validateCharacter({
      name: "",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(false);
  })
```

g) 
```
test("Should return true for all valid inputs", () => {
    const result = validateCharacter({
      name: "Scorpion",
      life: 1500,
      strength: 300,
      defense: 500,
    });

    expect(result).toBe(true);
  });
```

