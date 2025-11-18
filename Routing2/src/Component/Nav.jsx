import { NavLink, Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Nav() {
  const handleLogout = () => {
    localStorage.removeItem("islogin");
    window.location.reload(); // refresh to update navbar
  };

  const isLoggedIn = localStorage.getItem("islogin");

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success bg-gradient px-5 shadow-sm">
        <NavLink className="navbar-brand fw-bold text-warning" to="/">
          <h3 className="m-0 mb-2 text-center">MyNavbar</h3>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Centered Navigation Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
            <li className="nav-item">
              <NavLink
                className="nav-link fw-semibold"
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "red" : "black",
                  fontSize: isActive ? "20px" : "15px",
                })}
              >
                <h3>Home</h3>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link fw-semibold"
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "blue" : "black",
                  fontSize: isActive ? "20px" : "15px",
                })}
              >
                <h3>About</h3>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link fw-semibold"
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "yellow" : "black",
                  fontSize: isActive ? "20px" : "15px",
                })}
              >
                <h3>Contact</h3>
              </NavLink>
            </li>

            {/* ✅ Conditional Login/Logout Button */}
            {isLoggedIn ? (
              <li className="nav-item">
                <button className="btn btn-danger" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/login">
                  <h3>Login</h3>
                </Link>
              </li>
            )}
          </ul>

          {/* Search Bar */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning text-dark fw-bold" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Nav;
