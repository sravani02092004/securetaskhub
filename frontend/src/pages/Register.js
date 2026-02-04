function Register() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <h3 className="text-center mb-3">Register</h3>

          <input
            type="text"
            className="form-control mb-2"
            placeholder="Username"
          />

          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
          />

          <input
            type="password"
            className="form-control mb-2"
            placeholder="Password"
          />

          <input
            type="password"
            className="form-control mb-3"
            placeholder="Confirm Password"
          />

          <button className="btn btn-success w-100">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;

