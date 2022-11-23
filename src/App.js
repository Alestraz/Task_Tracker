import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  const [showAddTask, setShowAddTask] = useState
  (false)
  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'Doctor Appointment',
     day: 'February',
     reminder: true,
    },
    {
      id: 2,
      text: 'Shop Appointment',
      day: 'January',
      reminder: false,
     },
     {
      id: 3,
      text: 'Family Appointment',
      day: 'December',
      reminder: true,
     },
  ])
  
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => 
      task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder:
         !task.reminder } : task
      )
    )
  }

  return (
    <div className = 'container'>
      <Header onAdd={() => setShowAddTask
      (!showAddTask)} 
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder} 
      /> : 'You have no tasks today!'}
    </div>
  )
}

export default App;
