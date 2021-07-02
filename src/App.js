import {BrowserRouter as Router} from "react-router-dom"
import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctor's Appt.",
        day: "Feb 5th",
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at School",
        day: "Feb 6th",
        reminder: true
    },
    {
        id: 3,
        text: "Food Shopping",
        day: "Feb 5th",
        reminder: false
    },
]);

  // delete task
  function deleteTask(id){
    console.log("Task ID: ", id);
    setTasks(tasks.filter( task => task.id !== id))
  }

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map( task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <Router>
      <div className="container">
        <Header title="Tasks Tracked" />
        {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
        : "No Tasks Remaining"}
      </div>
    </Router>
      
  );
}

export default App;
