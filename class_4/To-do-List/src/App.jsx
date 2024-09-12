import { useState } from 'react'
import './App.css'
import AddTodo from './Components/AddTodo'
import Title from './Components/Title'
import TodoItem from './Components/TodoItem'

const App = ()=>{

  let [todolist,settodolist] = useState([])

  const AddButtonclickHandler = (todoname,tododate)=>{

      let currentTodoItem = [...todolist,{name:todoname,date:tododate}]
      settodolist(currentTodoItem)
  }

  const RemoveHandler = (idx)=> {
    const newTodos = [...todolist];
    newTodos.splice(idx, 1);
    settodolist(newTodos);
  }

  return <center>
   
    <Title></Title>
    <AddTodo onAddButtonClick={AddButtonclickHandler}></AddTodo>
    <TodoItem todolist={todolist} RemoveHandler={RemoveHandler}></TodoItem>
   
  </center>
}

export default App