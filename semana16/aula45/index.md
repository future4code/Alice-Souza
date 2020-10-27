## EXERCÍCOS - AULA 45

### ------ Exercício 1: ------

a) Removeria a coluna "salary" da tabela.

b) CHANGE mudaria o nome da coluna "gender" para "sex".

c) Alteraria o limite de caracteres, de 6 para 255.

d) 
```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### ------ Exercício 2: ------

a) 
```
UPDATE Actor
SET name = "Nandinha Montenegro",
birth_date = "1930-11-09"
WHERE id = "003";
```

b) 
```
UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";
```
```
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";
```

c)
```
UPDATE Actor
SET name = "Bibi Perigosa",
salary = 1000000,
birth_date = "1990-11-09",
gender = "female",
favorite_ice_cream_flavor = "Morango",
type = "Director"
WHERE id = "005";
```

d) Erro, a coluna colocada é desconhecida.
```
UPDATE Actor
SET bananinha = "Nanana"
WHERE id = "278";
```

### ------ Exercício 3: ------

a) 
```
DELETE FROM Actor 
WHERE name = "Nandinha Montenegro"
```

b) 
```
DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000;
```

### ------ Exercício 4: ------

a) 
```
SELECT MAX(salary) FROM Actor;
```

b) 
```
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c) 
```
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d) 
```
SELECT SUM(salary) FROM Actor;
```

### ------ Exercício 5: ------

a) Classificou as linhas existentes na coluna "gender" e fez a contagem de quantos atores estão em cada uma.

b) 
```
SELECT id, name FROM Actor 
ORDER BY name ASC;
```

c) 
```
SELECT * FROM Actor
ORDER BY salary ASC;
```

d) 
```
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### ------ Exercício 6: ------

a) 
```
ALTER TABLE Movies
ADD playing_limit_date DATE;
```

b)
```
ALTER TABLE Movie CHANGE rating rating FLOAT CHECK(rating <= 10);
```

c) 
```
UPDATE Movies
SET playing_limit_date = "2022-02-27"
WHERE id = "1";
```
```
UPDATE Movies
SET playing_limit_date = "2020-08-20"
WHERE id = "2";
```

d) Deu certo, mesmo sem a existência do id. Porém, isso não faz com que os dados entrem no banco. Foi isso que observei aqui.

### ------ Exercício 7: ------

a) 
```
SELECT COUNT(*) FROM Movies WHERE rating > 7.5;
```

b)
```
SELECT AGV(rating) FROM Movies;
``` 

c) 
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();
```

d) 
```
SELECT COUNT(*) FROM Movie WHERE playing_limit_date = null;
```

e) 
```
SELECT MAX(rating) FROM Movie;
```

f) 
```
SELECT MIN(rating) FROM Movie;
```

### ------ Exercício 8: ------

a) 
```
SELECT * FROM Movies
ORDER BY name ASC;
```

b)
```
SELECT * FROM Movies
ORDER BY name DESC;
LIMIT 5;
``` 

c) 
```
SELECT * FROM Movies
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

d) 
```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```



