function Login() {
  return (
    <div className= "bg-warning ">
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="card p-5 shadow" style={{ width: "400px", height: "400px" ,marginLeft:"60px"}}>
        
        <h3 className="text-center mb-4">Login</h3>

        <form>

          <div className="form-group mb-3">
            <label>Email address</label>
            <input type="email" className="form-control form-control-sm" />
            <small className="text-muted">We'll never share your email.</small>
          </div>

          <div className="form-group mb-3">
            <label>Password</label>
            <input type="password" className="form-control form-control-sm" />
          </div>

          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="remember" />
            <label htmlFor="remember" className="form-check-label">
              Remember me
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100 fs-5">
            Login
          </button>

        </form>

      </div>
    </div>
    </div>
  );
}

export default Login;
