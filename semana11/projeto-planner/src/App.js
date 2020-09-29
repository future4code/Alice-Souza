import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Task, ContainerTasks, AppContainer, Select, TasksTitle } from './styles'

const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-alice'

function App() {

  // Initial States and Set:
  const [taskValue, setTaskValue] = useState("")
  const handleTaskValue = (event) => {
    setTaskValue(event.target)
  }
  const [dayValue, setDayValue] = useState("")
  const handleDayValue = (event) => {
    setDayValue(event.target)
  }
  const [tasks, setTasks] = useState([])

  // Get Tasks:
  const getTasks = () => {
    axios.get(baseUrl)
    .then(res => {
      setTasks(res.data)
    })
  }
  useEffect(() => {
    getTasks()
  }, [])

  // Create Tasks:
  const createTask = () => {
    const body = {
      "text": taskValue,
      "day": dayValue
    }
    axios.post(baseUrl, body)
      .then(res => {
        alert('Sua tarefa foi criada com sucesso!')
        getTasks()
        setTaskValue('')
      })
      .catch(err => {
        alert('Ops, ocorreu um erro!', err.message)
      })
  }

  // Delete Task 
  const deleteTask = (taskId) => {
    axios.delete(`${baseUrl}${taskId}`)
    .then(res => {
      alert('Tarefa deletada com sucesso!')
      getTasks()
    })
    .catch(err => {
      alert('Ops, ocorreu um erro!', err.message)
    })
  }

  // Filter day:
  const taskDay = (day) =>{
    if (tasks.length > 0){
      return(
        tasks.map((task)=>{
          return(
            task.day === day && <Task key={task.id}>{task.text} - <span onClick={() => deleteTask(task.id)}>x</span></Task>  
          )
        })
      )
    } 
  }

  return (
    <AppContainer>
      <header>
        <div>
          <h1>PlanLabe</h1>
          <h3>Crie aqui suas tarefas semanais</h3>
        </div>
      </header>
      <div>
        <input
          data-testid={'new-task-input'}
          onChange={handleTaskValue}
          placeholder='Escreva aqui sua tarefa'
        />
        <Select onChange={handleDayValue} data-testid={'day-select'}>
          <option value={''}>Selecione o dia</option>
          <option value={'Domingo'}>Domingo</option>
          <option value={'Segunda'}>Segunda</option>
          <option value={'Terça'}>Terça</option>
          <option value={'Quarta'}>Quarta</option>
          <option value={'Quinta'}>Quinta</option>
          <option value={'Sexta'}>Sexta</option>
          <option value={'Sábado'}>Sábado</option>
        </Select>
        <button onClick={createTask}>Criar tarefa</button>
      </div>
      <TasksTitle>Minhas tarefas:</TasksTitle>
      <ContainerTasks>
        <div>
           <h2>Domingo</h2> 
        <p>{taskDay('Domingo')}</p>
        </div>
        <div>
           <h2>Segunda</h2>
           {taskDay('Segunda') }
        </div>
        <div>
           <h2>Terça</h2>
           {taskDay('Terça')}
        </div>
        <div>
           <h2>Quarta</h2> 
            {taskDay('Quarta')}
        </div>
        <div>
           <h2>Quinta</h2>
            {taskDay('Quinta')} 
        </div>
        <div>
           <h2>Sexta</h2> 
           {taskDay('Sexta')}
        </div>
        <div>
           <h2>Sábado</h2> 
          {taskDay('Sábado')}
        </div>
      </ContainerTasks> 
    </AppContainer>
  )

}

export default App;
