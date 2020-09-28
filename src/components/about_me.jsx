import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import RRTAlgorithm from './rrt.jsx';


class AboutMe extends Component {
  render() {
    return (
      <Container className="DarkBackground" id="about-container-fluid" fluid>
        <Container className="pt-5" id="about"></Container>
        <Container className="pt-5 pb-5">
          <Row id="rrt-avoid">
            <Col xs={12} md={4} className="my-auto rrt-avoid">
              {/* Fluid image auto-resizes to fit inside of its container */}
              <Image src="/images/me.jpeg" className="rrt-avoid" rounded fluid></Image>
            </Col>
            <Col xs={12} md={8} className="my-auto rrt-avoid">
              <h2 class="mt-2 FontColorDarkBlue rrt-avoid">MILO KNOWLES</h2>
              <h5 class="mt-2 FontColorBlack rrt-avoid">
                I received my B.S and M.Eng from MIT, where I focused on robotics, computer vision,
                and AI.
              </h5>
              <h5 class="mt-2 FontColorDarkBlue rrt-avoid">
                I'm currently exploring applications of autonomous robots for sustainability
                and climate change mitigation.
              </h5>
              <h5 class="mt-2 FontColorBlack rrt-avoid">
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
