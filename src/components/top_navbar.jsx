import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className="DarkBackground" variant="light" sticky="top">
        <Navbar.Brand href="/" className="FontStyleCode">// MILO KNOWLES</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/#about" className="FontColorBlack">ABOUT</Nav.Link>
            <Nav.Link href="/#projects" className="FontColorBlack">PROJECTS</Nav.Link>
            <Nav.Link href="/#contact" className="FontColorBlack">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/images/resume.pdf" target="_blank" >RESUME</Nav.Link>
            {/* <Nav.Link href="https://www.linkedin.com/in/milo-knowles" target="_blank" >LINKEDIN</Nav.Link> */}
            <Nav.Link href="https://github.com/miloknowles" target="_blank" className="FontStyleCode">GITHUB</Nav.Link>
            {/* <Nav.Link href="https://www.strava.com/athletes/6914634" target="_blank" >STRAVA</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
