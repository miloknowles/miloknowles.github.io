import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProjectCard_Thesis,
         ProjectCard_LDL } from './project_card';


class ProjectList extends Component {
  render() {
    return (
      <Container className="LightBackground" fluid>
        <Container className="pt-5 pb-5">
          <Row>
            <Col xs={12} className="my-auto">
              <h1 className="FontColorDarkBlue">Projects</h1>
              <ProjectCard_Thesis></ProjectCard_Thesis>
              <ProjectCard_LDL></ProjectCard_LDL>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default ProjectList;
