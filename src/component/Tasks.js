import { useState } from "react"
export const Tasks = () => {
const [tasks, setTasks] = useState([{
id: 1,
text: 'Doctors Appointment',
day: 'Feb 5th at 2:30pm',
reminder: true,
},
{
id: 2,
text: 'Meeting at School',
day: 'Feb 6th at 1:30pm',
reminder: true,
},
{
id: 3,
text: 'Food Shopping',
day: 'Feb 5th at 2:30pm',
reminder: false,
},])
const [selectedTask, setSelectedTask] = useState(null)

  const handleTaskClick = (id) => {
    setSelectedTask(id)
  }

  return (
    <>
      {tasks.map((task) => (
        <div key={task.id} onClick={() => handleTaskClick(task.id)}>
          <h3>{task.text}</h3>
          {selectedTask === task.id && (
            <p>{`Day: ${task.day}, Reminder: ${task.reminder}`}</p>
          )}
        </div>
      ))}
    </>
  )
}



//TO DELETE TASKS

// const deleteTask = (id) => {
//     setTasks(tasks.filter((task) => task.id !== id))
//   }

//   return (
//     <>   
//       {tasks.map((task) => (
//         <div key={task.id}>
//           <h3>{task.text}</h3>
//           <button onClick={() => deleteTask(task.id)}>Delete</button>
//         </div>
//       ))}
//     </>
//   )
