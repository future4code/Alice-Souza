import styled from 'styled-components'

export const AppContainer = styled.div`
  text-align: center;
  color: #585959
`
export const Task = styled.li`
  border-bottom: 1px dotted black;
  margin: 0 10px 10px 10px;
  color: black;
  > span {
    color: red;
    font-size: 150%;
    font-weight: 500;
    cursor: pointer;
  }
`
export const ContainerTasks = styled.div`
  border-left: 1px solid blue;
  margin: 0 50px;
  display: flex;
  > div {
    width: 200px;
    margin: 0;
    border-right: 1px solid blue;
    > h2 {
      text-align: center;
    }
  }
`
export const Select = styled.select`
  margin: 0 10px;
`
export const TasksTitle = styled.h2`
  margin-top: 40px;
`