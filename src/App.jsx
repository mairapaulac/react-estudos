import { useState } from 'react'
import AddTasks from './components/AddTasks'
import Tasks from './components/Tasks'

import './App.css'

function App() {
  return (
    <div>
      <h1>Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTasks />     
    </div>
  )
}

export default App
