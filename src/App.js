import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      day: "Feb 5th at 2.30pm",
      id: 1,
      text: "delectus aut autem",
      reminder: false,
    },
    {
      day: "Jan 5th at 2.30pm",
      id: 2,
      text: "quis ut nam facilis et officia qui",
      reminder: false,
    },
    {
      day: "Mar 5th at 2.30pm",
      id: 3,
      text: "fugiat veniam minus",
      reminder: false,
    },
  ]);

  //add Task
  const addTask = (task) => {
    console.log("add", task);
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = {id, ...task};

    console.log("new", newTask);

    setTasks([...tasks,newTask]) 
  };

  //delete task
  const deletetask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header title="Task Tracker" />

      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deletetask} onToggle={toggleReminder} />
      ) : (
        "No Task to show"
      )}
    </div>
  );
};

export default App;
