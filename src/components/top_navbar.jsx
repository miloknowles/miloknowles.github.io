import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" sticky="top">
        <Navbar.Brand href="/" className="FontStyleCode">// MILO KNOWLES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#about" className="FontStyleCode">ABOUT</Nav.Link>
            <Nav.Link href="/#projects" className="FontStyleCode">PROJECTS</Nav.Link>
            <Nav.Link href="/#contact" className="FontStyleCode">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/images/resume.pdf">RESUME</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/milo-knowles">LINKEDIN</Nav.Link>
            <Nav.Link href="https://github.com/miloknowles" className="FontStyleCode">GITHUB</Nav.Link>
            <Nav.Link href="https://www.strava.com/athletes/6914634">STRAVA</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
