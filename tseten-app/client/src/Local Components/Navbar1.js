import React, {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import { isLoggedIn } from "../utils";

function ITSNavbar() {
  const [isAuthenticated, setIsAuthenticated] = useState();
  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuthenticated  && (
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
            )}
            <Nav.Link as={Link} to="">Online Chat</Nav.Link>
            <Nav.Link as={Link} to="/Staff">Student Techs</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
            <Nav.Link as={Link} to="/Contact">Contact Us</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.ramapo.edu/its/help-desk/">Helpdesk Ticket</NavDropdown.Item>
              <NavDropdown.Item href="https://password.ramapo.edu">
                Email Activation
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.ramapo.edu/its/important-notes-for-password-reset/">Password Reset</NavDropdown.Item>
              <NavDropdown.Item href="https://www.ramapo.edu/its/computer-labs/">Computer Labs</NavDropdown.Item>
              <NavDropdown.Item href="https://www.ramapo.edu/its/resnet/">ResNet</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ITSNavbar;