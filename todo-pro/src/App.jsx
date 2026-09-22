//tela principal da aplicação , vou importar os dois componentes ( TodoForm e TodoList

import { useState } from "react"
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = ()=>{
  const[tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]); 
  }

  const removeTask = (index) => {
    setTasks(tasks.filter((_,i)=> i !== index));
  }
  
  return(
    <div>
      <h1>Lista de Tarefas Todo-Pro</h1>
      <TodoForm addTask={addTask}/>
      <TodoList tasks={tasks} removeTask={removeTask}/>
    </div>
  );
};
export default App;