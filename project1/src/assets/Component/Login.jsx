import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Multiple stored credentials
  const users = [
    { username: "Yath6969", password: "24032003" },
    { username: "Admin", password: "123456" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find if user exists with matching credentials
    const match = users.find(
      (user) => user.username === username && user.password === password
    );

    if (match) {
      localStorage.setItem("islogin", true); // store login state
      navigate("/home"); // redirect to home
    } else {
      alert("Invalid Username or Password");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-warning bg-gradient">
      <div
        className="p-5 border border-dark border-3 rounded-4 shadow-lg bg-light"
        style={{ width: "420px" }}
      >
        <h3 className="text-center mb-4 text-dark fw-bold">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label text-dark">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" />
            <label className="form-check-label text-dark">Remember me</label>
          </div>

          <button type="submit" className="btn btn-primary w-100 fw-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

