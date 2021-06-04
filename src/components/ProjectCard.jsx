import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';


class ProjectCard extends Component {
  render() {
    return (
      <Accordion>
        <Card className="mt-5" bg="light" border="secondary">
          <Card.Img variant="top" src={this.props.image} bg="primary" fluid="true"/>
          <Card.Header className="pt-2 d-flex align-items-center">
            <Accordion.Toggle as={Button} variant="link" className="read-more-button" eventKey="0">
              <small className="ProjectTitleText mr-auto">[MORE]</small>
            </Accordion.Toggle>
            <div className="ProjectTitleText ml-1">{this.props.title}</div>
            <small className="ProjectTitleText text-muted ml-auto">{this.props.date}</small>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <Card.Text>
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
