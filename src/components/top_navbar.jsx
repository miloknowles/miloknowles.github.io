import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Navbar.Brand href="#about" className="FontStyleCode">// Milo Knowles</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#about" className="FontStyleCode">About Me</Nav.Link>
            <Nav.Link href="/#projects" className="FontStyleCode">Projects</Nav.Link>
            <Nav.Link href="/#contact" className="FontStyleCode">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/images/resume.pdf">Resume</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/milo-knowles">Linkedin</Nav.Link>
            <Nav.Link href="https://github.com/miloknowles" className="FontStyleCode">GitHub</Nav.Link>
            <Nav.Link href="https://www.strava.com/athletes/6914634">Strava</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
