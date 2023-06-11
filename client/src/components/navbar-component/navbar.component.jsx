import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.style.css";
import React from "react";

const NavbarComponent = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    // <Navbar className="navbar" collapseOnSelect expand="lg" variant="dark">
    //   <Container>
    //     <Navbar.Brand href="/">Housing-society</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="left-auto">
    //         <Nav.Link className="nav-link" to="/" href="/">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link className="nav-link" href="/notice">
    //           Notice
    //         </Nav.Link>
    //         {!localStorage.getItem("token") ? (
    //           <NavDropdown title="Log-In" id="collasible-nav-dropdown">
    //             <Link to="/login" className="nav-drop">
    //               Login
    //             </Link>

    //             {/* <br /> */}
    //             <Link className="nav-drop" to="/signup">
    //               Signup
    //             </Link>
    //           </NavDropdown>
    //         ) : (
    //           <button onClick={handleLogout}>Logout</button>
    //         )}

    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>

    <nav className="navbar navbar-expand-lg " id="NavBar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" style={{ color: "white" }}>
          Housing-Society
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item" style={{ color: "white" }}>
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </li>

            <li className="nav-item" style={{ color: "white" }}>
              <Link
                className="nav-link"
                to="/notice"
                style={{ color: "white" }}
              >
                Notice
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ color: "white" }}
              >
                Login
              </a>
              <ul className="dropdown-menu">
                {!localStorage.getItem("token") ? (
                  <div>
                    <li
                      className="dropdown-item"
                      title="Log-In"
                      id="collasible-nav-dropdown"
                      style={{ color: "white" }}
                    >
                      <Link to="/login">Login</Link>
                    </li>

                    <li className="dropdown-item">
                      <Link to="/signup">Signup</Link>
                    </li>
                  </div>
                ) : (
                  <li>
                    <button onClick={handleLogout} style={{ color: "white" }}>
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
