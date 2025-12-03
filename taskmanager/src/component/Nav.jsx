import "./nav.css";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm nav-dark px-4">
        <div className="container-fluid">

          {/* Brand */}
          <a className="navbar-brand brand-title text-white fw-bold fs-3" href="#">
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

          {/* Navbar Items */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            {/* LEFT: Navigation Menu */}
            <ul className="navbar-nav ms-4 gap-4 align-items-center mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link text-white nav-hover fs-5" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white nav-hover fs-5" href="#">
                  Tasks
                </a>
              </li>

              {/* Optional menu items */}
              <li className="nav-item">
                <a className="nav-link text-white nav-hover fs-5" href="#">
                  Add Task
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white nav-hover fs-5" href="#">
                  Completed
                </a>
              </li>
            </ul>

            {/* RIGHT: Search Bar */}
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
        </div>
      </nav>
    </>
  );
}

export default Nav;
