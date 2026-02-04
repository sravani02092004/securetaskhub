// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://127.0.0.1:8000/api/",
// });

// // Add token automatically if exists
// API.interceptors.request.use((req) => {
//   const token = localStorage.getItem("access");
//   if (token) {
//     req.headers.Authorization = `Bearer ${token}`;
//   }
//   return req;
// });

// export default API;
import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // backend base URL
});

// Attach token to every request
API.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem("access");
    if (token) {
      req.headers.Authorization = `Bearer ${token}`; // JWT attached
    }
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ---------- TASK APIs ----------

// Get all tasks
export const getTasks = () => API.get("tasks/");

// Create new task
export const createTask = (taskData) =>
  API.post("tasks/", taskData);

// Delete task
export const deleteTask = (taskId) =>
  API.delete(`tasks/${taskId}/`);

export default API;
