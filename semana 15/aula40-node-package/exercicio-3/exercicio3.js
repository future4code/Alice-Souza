// EXERCÍCIO 3

const task = process.argv[2]
const tasksList = ["Andar de bicicleta", "Fazer café", "Estudar inglês"]

const addTask = (task) => {
  tasksList.push(...tasksList, task)
  return console.log(
    `Tarefa adicionada com sucesso!
    Tarefas: ${tasksList}`
    )
}

addTask(task)


