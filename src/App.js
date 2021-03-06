
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from './components/Footer';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About"



function App() {


  
  
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])


  // Fetch Task
  const fetchTasks = async () => {
    const res = await fetch('https://my-json-server-data.herokuapp.com/tasks')
    const data = await res.json()
    
    return data
  }

  const fetchTask = async (id) => {
    const res = await fetch(`https://my-json-server-data.herokuapp.com/tasks/${id}`)
    const data = await res.json()
    
    return data
  }
  // Add Task
  const addTasks = async (task) => {
    const res = await fetch(`https://my-json-server-data.herokuapp.com/tasks`,{
      method:'POST',
      headers:{
          'Content-type':'application/json'
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()

    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = {id, ...task }
    // setTasks([...tasks, newTask])
  }
  //Delete task
  const deleteTask = async (id) => {
    await fetch(`https://my-json-server-data.herokuapp.com/tasks/${id}`, {
      method:'DELETE',
    })
    setTasks(tasks.filter((task) => task.id !== id));
  };
  console.log(tasks);

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`https://my-json-server-data.herokuapp.com/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json', 
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }
   

  return (
    <Router>

    <div className="container-fluid"   
    style={{
      backgroundImage: `url(${require('./images/1991maxBlue.jpg').default})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '100vh',
      width: '100vw'
    }}>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <Route path='/' exact render={() => (
        <>
        {showAddTask && <div className="addBox" ><AddTask onAdd={addTasks}/></div>}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          "ss1.21_hellofriend.psd"
        )}
        </>
      )} />
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
