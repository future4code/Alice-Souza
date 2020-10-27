## EXERCÍCIOS - AULA 44:

### ---- Exercício 1: ----

A) : 
- "id" é do tipo varchar (string) com limite de 255 caracteres, que é o máximo. E está como primary key, que deve ser único para cada tabela, sendo mais comum usar o id.
- "name" está com o tipo varchar, que é string e com NOT NULL, que quer dizer que o campo é obrigatório ser preenchido.
- "birth_date" é do tipo DATE e obrigatório ser preenchido (NOT NULL).
- "gender" é do tipo varchar, com um limite de 6 caracteres (que é o número de caracteres de "female").

B): SHOW NOME_DO_QUE_QUERO_ACESSAR

C): É um atalho para o comando SHOW COLUMNS FROM


### ---- Exercício 2: ----

A):
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```

C), D) e E): Não foi possível eu fazer, pois não consegui acessar o banco de dados. Estou tentando resolver o problema.

F)
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Lima Duarte",
  1800000,
  "1933-09-23", 
  "male"
);
```
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Paola Oliveira",
  2200000,
  "1980-08-20", 
  "female"
);
```

### ---- Exercício 3: ----

A): 
```
SELECT * from Actor 
WHERE gender = "female"
```

B): 
```
SELECT salary from Actor 
WHERE name = "Tony Ramos"
```

C): Não foi possível eu fazer, pois não consegui acessar o banco de dados. Estou tentando resolver o problema.

D): 
```
SELECT id, name, salary from Actor 
WHERE salary <= 500000
```

E): Não foi possível eu fazer, pois não consegui acessar o banco de dados. Estou tentando resolver o problema.

### ---- Exercício 4: ----

A): Procura todos os atores e atrizes, cujo nome comece com "A" ou "J" e o salário seja acima de 300.000,00.

B): 
```
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
```

C):
```
SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%"
```

D):
```
SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000
```









