import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    //  Allow login for any non-empty email and password
    if (email.trim() !== "" && password.trim() !== "") {
      localStorage.setItem("islogin", "true");
          localStorage.setItem("email", email); 
     localStorage.setItem("password", password); 
      alert("Login successful!");
      navigate("/"); // redirect to home
      window.location.reload(); // refresh to update navbar
    } else {
      alert("Please fill in both email and password!");
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-gradient"
      style={{ marginTop: "-50px" }}
    >
      <div
        className="card shadow-lg mb-3 p-4 bg-gradient bg-info border border-4 border-dark"
        style={{ width: "24rem" }}
      >
        <h3 className="text-center mb-4 text-primary">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
            />
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

