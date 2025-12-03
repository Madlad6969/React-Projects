import { Link, NavLink, useNavigate } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Nav({ handleChange }) {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("islogin");

  const handleLogout = () => {
    localStorage.removeItem("islogin");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient mt-0 px-5 shadow-sm">
      <NavLink className="navbar-brand fw-bold text-warning" to="/">
        <h3 className="m-0">MyNavbar</h3>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Center Navigation Links */}
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
          
          {/* Home Link - only enabled if logged in */}
          <li className="nav-item">
            {isLoggedIn ? (
              <NavLink className="nav-link fw-semibold" to="/home">
                <h3>Home</h3>
              </NavLink>
            ) : (
              <span className="nav-link fw-semibold text-muted">
                <h3>Home</h3>
              </span>
            )}
          </li>

          <li className="nav-item">
            <NavLink className="nav-link fw-semibold" to="/about">
              <h3>About</h3>
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link fw-semibold" to="/contact">
              <h3>Contact</h3>
            </NavLink>
          </li>

          {/* LOGIN / LOGOUT BUTTON */}
          <li className="nav-item">
            {isLoggedIn ? (
              <button onClick={handleLogout} className="btn btn-danger fw-bold">
                Logout
              </button>
            ) : (
              <NavLink to="/login" className="nav-link fw-bold">
                <h3>Login</h3>
              </NavLink>
            )}
          </li>

          {/* Dropdown */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle fw-semibold"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              style={{ fontSize: "22px", color: "white", fontWeight: "bold" }}
            >
              Category
            </a>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/category/all">All</Link></li>
              <li><Link className="dropdown-item" to="/category/men's clothing">Men's Clothing</Link></li>
              <li><Link className="dropdown-item" to="/category/women's clothing">Women's Clothing</Link></li>
              <li><Link className="dropdown-item" to="/category/electronics">Electronics</Link></li>
              <li><Link className="dropdown-item" to="/category/jewelery">Jewellery</Link></li>
            </ul>
          </li>
        </ul>

        {/* Search Bar */}
        <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            onChange={handleChange}
          />
          <button className="btn btn-warning text-dark fw-bold" type="submit">
            Search
          </button>
        </form>

      </div>
    </nav>
  );
}

export default Nav;
