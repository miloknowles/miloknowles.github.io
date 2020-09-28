import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class ContactCard extends Component {
  render() {
    return (
      <Container className="DarkBackground" fluid>
        {/* NOTE: The Navbar #contact targets this! */}
        <Container className="pt-5 pb-5" id="contact">
          {/* mx-auto centers stuff! */}
          <Card className="bg-light mx-auto text-center" style={{ width: '40rem' }}>
            <Card.Header className="FontColorBlack">CONTACT ME</Card.Header>
            {/* <ListGroup variant="flush"> */}
              {/* <ListGroup.Item><p className="FontColorDarkBlue">CONTACT ME</p></ListGroup.Item> */}
              {/* <ListGroup.Item>mknowles@mit.edu</ListGroup.Item> */}
              <Card.Body>
                <Card.Link href="mknowles@mit.edu">mknowles@mit.edu</Card.Link>
                <Card.Link href="/images/resume.pdf">Resume</Card.Link>
                <Card.Link href="https://www.linkedin.com/in/milo-knowles">Linkedin</Card.Link>
                <Card.Link href="https://github.com/miloknowles">GitHub</Card.Link>
                <Card.Link href="https://www.strava.com/athletes/6914634">Strava</Card.Link>
              </Card.Body>
            {/* </ListGroup> */}
          </Card>
        </Container>
      </Container>
    );
  }
}

export default ContactCard;
