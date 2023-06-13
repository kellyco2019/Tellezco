import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useState } from 'react'

function App() {
  const [taskName, setTaskName] = useState("")
  const [description, setDesciption] = useState("")
  const [tasks, setTasks] = useState([{}])

  const handleTaskName = (e) => {
    setTaskName(e.target.value)
  }

  const handledescription = (e) => {
    setDesciption(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newTask = {
      taskName,
      description
    }
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <TaskForm taskName={taskName} description={description} handleTaskName={handleTaskName} handledescription={handledescription} handleSubmit={handleSubmit} />
      <TaskList tasks={tasks} />
    </div>
  );
}
export default App;