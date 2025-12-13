import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm nav-dark w-100 mt-0 px-3  py-2">
      

        {/* Brand */}
        <a className="navbar-brand brand-title text-white fw-bold fs-2" href="#">
          TaskManager
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          {/* LEFT MENU */}
          <ul className="navbar-nav ms-4 gap-4 align-items-center mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link text-white nav-hover fs-5" to="/">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white nav-hover fs-5" to="/tasks">
                Tasks
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white nav-hover fs-5" to="/addtask">
                Add Task
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-white nav-hover fs-5" to="/completed">
                Completed
              </Link>
            </li>

          </ul>

          {/* RIGHT SEARCH */}
          <form className="d-flex ms-auto">
            <input
              className="form-control me-2 search-box"
              type="search"
              placeholder="Search tasks..."
            />
            <button className="btn btn-outline-success rounded-pill px-3" type="submit">
              Search
            </button>
          </form>

        </div>
      
    </nav>
  );
}

export default Nav;
