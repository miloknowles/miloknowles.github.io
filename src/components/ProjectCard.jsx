import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class ProjectCard extends Component {
  render() {
    return (
      <Accordion>
        <Card className="mt-5" bg="light" border="secondary AnimateOnScroll animate__animated animate__fadeIn">
          <Card.Img variant="top" src={this.props.image} bg="primary" fluid="true"/>
          <Card.Header className="pt-2">
            <Container>
              <Row className="pt-2 pb-1">
                <Col xs={12} lg={9} className="my-auto">
                  <div className="ProjectTitleText">{this.props.title}</div>
                </Col>
                <Col xs={6} lg={2} className="my-auto">
                  <div className="text-muted text-small text-right">{this.props.date}</div>
                </Col>
                <Col xs={6} lg={1} className="my-auto pl-0 pr-0">
                  <div className="ml-auto d-flex">
                    <Accordion.Toggle as={Button} variant="link" className="read-more-button" eventKey="0">
                      <div className="ProjectTitleText text-small">[READ MORE]</div>
                    </Accordion.Toggle>
                  </div>
                </Col>
              </Row>
            </Container>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text className="FontReadable">
                {this.props.description}
              </Card.Text>
              {this.props.links}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  }
}


export default ProjectCard;
