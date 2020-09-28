import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


class ContactCard extends Component {
  render() {
    return (
      <Container className="DarkBackground" fluid>
        <Container className="pt-5 pb-5" id="contact">
          {/* mx-auto centers stuff! */}
          <Card className="bg-light mx-auto text-center" style={{ width: '40rem' }}>
            <Card.Header className="FontColorBlack">CONTACT ME</Card.Header>
              <Card.Body>
                <Card.Link href="mknowles@mit.edu" target="_blank">mknowles@mit.edu</Card.Link>
                <Card.Link href="/images/resume.pdf" target="_blank">Resume</Card.Link>
                <Card.Link href="https://www.linkedin.com/in/milo-knowles" target="_blank">Linkedin</Card.Link>
                <Card.Link href="https://github.com/miloknowles" target="_blank">GitHub</Card.Link>
                <Card.Link href="https://www.strava.com/athletes/6914634" target="_blank">Strava</Card.Link>
              </Card.Body>
          </Card>
        </Container>
      </Container>
    );
  }
}

export default ContactCard;
