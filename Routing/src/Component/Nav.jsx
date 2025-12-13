import { NavLink } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0 px-5 shadow-sm">
        <NavLink className="navbar-brand fw-bold text-warning" to="/">
          <h3 className="m-0">MyNavbar</h3>
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
              <NavLink className="nav-link fw-semibold" to="/" style={({isActive})=>({
                color:isActive ?'red':'black',
                fontSize:isActive?'20px':'15px'
              })}>
                <h3>Home</h3>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/about" style={({isActive})=>({
              color:isActive?'blue':'black',
              fontSize:isActive?'20px':'15px'

              })}>
               <h3>About</h3>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/contact" style={({isActive})=>({
                color:isActive?'yellow':'black',
                 fontSize:isActive?'20px':'15px'
              })}>
                <h3>Contact</h3>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/service" style={({isActive})=>({
                color:isActive?'green':'black',
                 fontSize:isActive?'20px':'15px'
              })}>
                <h3>Service</h3>
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link fw-semibold" to="/detail/:id" style={({isActive})=>({
                color:isActive?'violet':'black',
                 fontSize:isActive?'20px':'15px'
              })}>
                <h3>Detail</h3>
              </NavLink>
            </li>

            {/* Dropdown Example */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fw-semibold"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
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
