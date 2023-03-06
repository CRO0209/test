import { Navbar,Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <Navbar bg="light" variant="light" className="border">
        <Container>
          <Navbar.Brand as={Link} to="/">BrokeLine</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar