import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container className="navbar">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/public/vite.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
          <Container>
            <Link to="/home">
              <Nav.Link className="navbaritem" href="#home">
                Menu
              </Nav.Link>
            </Link>
            <Link to="/about">
              <Nav.Link className="navbaritem" href="#home">
                About
              </Nav.Link>
            </Link>
            <Link to="/contact">
              <Nav.Link className="navbaritem" href="#home">
                Contact
              </Nav.Link>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="navbaritem">Phone #</Navbar.Text>
              <Navbar.Text className="navbaritem">IG N SHIT</Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
