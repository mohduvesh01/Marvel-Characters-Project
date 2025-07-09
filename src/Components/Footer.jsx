import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="py-3 my-4 footerBox">
        {" "}
        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          {" "}
          <li>
            <Nav.Link
              as={NavLink}
              to={"/overview"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 text-warning bg-dark fw-bold rounded"
                  : "px-3 py-2 text-white bg-black rounded"
              }
            >
              Overview
            </Nav.Link>
          </li>{" "}
          <li>
            <Nav.Link
              as={NavLink}
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 text-warning bg-dark fw-bold rounded"
                  : "px-3 py-2 text-white bg-black rounded"
              }
            >
              Home
            </Nav.Link>
          </li>{" "}
          <li>
            <Nav.Link
              as={NavLink}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 text-warning bg-dark fw-bold rounded"
                  : "px-3 py-2 text-white bg-black rounded"
              }
            >
              About
            </Nav.Link>
          </li>{" "}
          <li>
            <Nav.Link
              as={NavLink}
              to={"/opentowork"}
              className={({ isActive }) =>
                isActive
                  ? "px-3 py-2 text-warning bg-dark fw-bold rounded"
                  : "px-3 py-2 text-white bg-black rounded"
              }
            >
              OpenToWork
            </Nav.Link>
          </li>{" "}
        </ul>{" "}
        <p className="text-center text-body-secondary">© 2025 Company, Inc</p>{" "}
      </footer>
    </>
  );
}

export default Footer;
