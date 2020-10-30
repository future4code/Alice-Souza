## EXERCÍCIOS - AULA 46

## ----- Exercício 1: ------

a) Enviamos para o banco de dados MySQL (Onde consta os mesmos dados colocados em connection)

b) 
```
export const getActorById = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
	return result[0][0]
}
```

c) 
```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	// Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
	// o valor no resultado!
  const count = result[0][0].count;
  return count;
};
```

## ----- Exercício 2: ------

a)
```
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```

b) 
```
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
};
```

c) 
```
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```

## ----- Exercício 3: ------

a) 
```
const selectActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
	return result[0][0]
}
```





