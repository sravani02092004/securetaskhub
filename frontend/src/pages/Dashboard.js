
// import { useEffect, useState } from "react";
// import { getTasks } from "../services/api";

// function Dashboard() {
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     getTasks()
//       .then((res) => {
//         console.log("Tasks from backend:", res.data);
//         setTasks(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching tasks", err);
//       });
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h3>Dashboard</h3>
//       {tasks.length === 0 ? (
//         <p>Welcome! Tasks will appear here.</p>
//       ) : (
//         <ul>
//           {tasks.map((task) => (
//             <li key={task.id}>{task.title}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Dashboard; // <-- MUST be at the very bottom, outside of any block
// src/pages/Dashboard.js
import { useEffect, useState } from "react";
import { getTasks } from "../services/api";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from backend
    getTasks()
      .then((res) => {
        console.log("Tasks from backend:", res.data);
        setTasks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching tasks", err);
      });
  }, []);

  return (
    <div className="container mt-5">
      <h3>Dashboard</h3>
      {tasks.length === 0 ? (
        <p>Welcome! Tasks will appear here.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;
