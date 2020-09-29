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
            <Card className="bg-light mx-auto text-center">
              <Card.Header className="FontColorBlack">CONTACT ME</Card.Header>
                <Card.Body>
                  <Card.Link className="text-nowrap" href="mknowles@mit.edu" target="_blank">MKNOWLES@MIT.EDU</Card.Link>
                  {/* <Card.Link href="/images/resume.pdf" target="_blank">RESUME</Card.Link> */}
                  <Card.Link className="text-nowrap" href="https://www.linkedin.com/in/milo-knowles" target="_blank">LINKEDIN</Card.Link>
                  <Card.Link className="text-nowrap" href="https://github.com/miloknowles" target="_blank">GITHUB</Card.Link>
                  <Card.Link className="text-nowrap" href="https://www.strava.com/athletes/6914634" target="_blank">STRAVA</Card.Link>
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
