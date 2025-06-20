import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  // this is not a right way to send request to a express 
  fetch("http://localhost:3000/todos")
    .then(async function (res){
      const json = await res.json();
      setTodos(json.todos);
    })
  
  return (
   <div>
    <CreateTodo></CreateTodo>
    <Todos todos ={todos}></Todos>
   </div>
    
  )
}

export default App
