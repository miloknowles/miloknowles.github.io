import React, { Component } from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


class TopNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" className="DarkBackground" variant="light" sticky="top">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">TOP</Nav.Link>
            <Nav.Link href="/#about" className="FontColorBlack">ABOUT</Nav.Link>
            <Nav.Link href="/#projects" className="FontColorBlack">PROJECTS</Nav.Link>
            <Nav.Link href="/#contact" className="FontColorBlack">CONTACT</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/images/resume.pdf" target="_blank" >RESUME</Nav.Link>
            <Nav.Link href="https://github.com/miloknowles" target="_blank">GITHUB</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default TopNavbar;
