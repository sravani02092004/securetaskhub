// import React, { useState } from "react";
// import API from "../services/api";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await API.post("accounts/login/", formData);

//       // Save tokens
//       localStorage.setItem("access", response.data.access);
//       localStorage.setItem("refresh", response.data.refresh);

//       // Redirect to dashboard
//       navigate("/dashboard");
//     } catch (err) {
//       setError("Invalid username or password");
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Login</h2>

//       {error && <p className="text-danger">{error}</p>}

//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input
//             type="text"
//             className="form-control"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import API from "../services/api"; // make sure this points to your axios instance
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // ✅ State for username & password (backend expects username)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle login submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await API.post("accounts/login/", {
        username: formData.username,  // send username
        password: formData.password,
      });

      // ✅ Save tokens in LocalStorage
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid username or password"); // Friendly error
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>

      {/* Show error if any */}
      {error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;



