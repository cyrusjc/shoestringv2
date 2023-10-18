import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
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
          <Nav.Link className="navbaritem" href="#home">
            Link 1{" "}
          </Nav.Link>
          <Nav.Link className="navbaritem" href="#home">
            Link 2{" "}
          </Nav.Link>
          <Nav.Link className="navbaritem" href="#home">
            Link 3{" "}
          </Nav.Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="navbaritem">Phone #</Navbar.Text>
            <Navbar.Text className="navbaritem">IG N SHIT</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
