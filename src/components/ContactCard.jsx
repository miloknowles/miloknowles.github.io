import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';


class ContactCard extends Component {
  render() {
    return (
      <Container className="DarkBackground" fluid>
        <Container className="pt-5 pb-5" id="contact">
          <Row>
            {/* mx-auto centers stuff! */}
            <Card className="bg-light mx-auto text-center AnimateOnScroll animate__animated animate__fadeIn">
              <Card.Header className="FontColorBlack">CONTACT ME</Card.Header>
                <Card.Body>
                <Card.Link href="milo@bluemeadow.ai">milo (at) bluemeadow.ai</Card.Link>
                  <Card.Link href="https://www.linkedin.com/in/milo-knowles/"><span className="fa fa-linkedin"></span></Card.Link>
                  <Card.Link href="https://twitter.com/milo_knowles"><span className="fa fa-twitter"></span></Card.Link>
                  <Card.Link href="https://github.com/miloknowles"><span className="fa fa-github"></span></Card.Link>
                  <Card.Link className="text-nowrap" href="https://www.strava.com/athletes/6914634" target="_blank">Yep, Strava</Card.Link>
                </Card.Body>
            </Card>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default ContactCard;

// style={{ width: '40rem' }}
