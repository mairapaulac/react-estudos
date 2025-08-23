import { useState } from 'react'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'  
import {v4} from 'uuid'

function App() {

  //Um hook é uma função que me dá acesso interno à memória do React Você obtém acesso a um valor e um comando para 
  //modificar esse valor. Uma consulta e um comando.

  const [tasks, setTasks] = useState([{
    id: 1, 
    title: "Fazer lista de C2",
    description: "Estudar C2 para ser uma boa engenheira",
    isCompleted: false
  }, {
    id: 2,
    title: "Estudar Circuitos I",
    description: "Estudar para não perder a matéria",
    isCompleted: false
  }, {
    id: 3,
    title: "Estudar ES2",
    description: "Aprender Java",
    isCompleted: false
  }]);



  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted}
      }

      return task;
    });

    setTasks(newTasks);
  }

  function DeleteTask(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId);
    
    setTasks(newTasks);
  }

  function AddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false
    };

    setTasks([...tasks, newTask]);
  }


  return (
    <div className="w-screen h-screen flex justify-center bg-slate-500 p-6">
      <div className="w-[500px] ">
        <h1 className="text-slate-100 text-3xl font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTasks AddTaskSubmit={AddTaskSubmit}/>  
        <Tasks tasks={tasks} onTaskClick={onTaskClick} DeleteTask={DeleteTask}/> { /* Para que eu possa acessar essas informações no meu componente como as props */ }
      </div>   
    </div>
  );


}

export default App
