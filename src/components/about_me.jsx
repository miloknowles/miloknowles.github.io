import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

class AboutMe extends Component {
  render() {
    return (
      <Container className="DarkBackground" fluid>
        <Container className="pt-5" id="about"></Container>
        <Container className="pt-5 pb-5">
          <Row>
            <Col xs={12} md={5} className="my-auto">
              {/* Fluid image auto-resizes to fit inside of its container */}
              <Image src="/images/me.jpeg" rounded fluid></Image>
            </Col>
            <Col xs={12} md={7} className="my-auto">
              <h1 class="mt-2 FontColorDarkBlue">MILO KNOWLES</h1>
              <h5 class="mt-2 FontColorBlack">
                I received my B.S and M.Eng from MIT, where I focused on robotics, computer vision,
                and AI.
              </h5>
              <h5 class="mt-2 FontColorDarkBlue">
                I'm currently exploring applications of autonomous robots for sustainability
                and climate change mitigation.
              </h5>
              <h5 class="mt-2 FontColorBlack">
                When I'm not writing code, I enjoy running and biking around Boston,
                playing guitar, and trying to keep my hydroponic garden alive.
              </h5>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default AboutMe;
