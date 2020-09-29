import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


class CardLink extends Component {
  render() {
    return (
      <Card.Link href={this.props.href} target="_blank">{this.props.text}</Card.Link>
    );
  }
};


class ProjectCard extends Component {
  render() {
    return (
      <Accordion>
        <Card className="mt-5" bg="light">
          <Card.Img variant="top" src={this.props.image} bg="primary" fluid="true"/>
          <Card.Body>
            <Card.Title>
                <Accordion.Toggle as={Button} variant="link" className="read-more-button" eventKey="0"><small>[READ MORE]</small></Accordion.Toggle>
                <i className="ProjectTitleText">{this.props.title}</i>
                <small className="text-muted ProjectTitleText"> // {this.props.date}</small>
            </Card.Title>
            <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
                {this.props.description}
              </Card.Text>
              {this.props.links}
            </Card.Body>
          </Accordion.Collapse>
          </Card.Body>
        </Card>
      </Accordion>
    );
  }
}


export { ProjectCard, CardLink };
