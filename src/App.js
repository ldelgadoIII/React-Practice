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

  function deleteTask(id){
    console.log("Task ID: ", id);
  }

  return (
    <Router>
      <div className="container">
        <Header title="Tasks Tracked" />
        <Tasks tasks={tasks} onDelete={deleteTask}/>
      </div>
    </Router>
      
  );
}

export default App;
