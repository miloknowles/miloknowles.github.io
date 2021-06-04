import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


class AboutMe extends Component {
  render() {
    return (
      <Container className="DarkBackground" id="about-container-fluid" fluid>
        <Container className="pt-5 pb-5" id="about">
          <Row>
            <Col xs={0} md={1} className="my-auto"></Col>
            <Col xs={12} md={4} className="my-auto">
              {/* Fluid image auto-resizes to fit inside of its container */}
              <Image src="/images/me.jpeg" className="AnimateOnScroll animate__animated animate__fadeIn" rounded fluid></Image>
            </Col>
            <Col xs={12} md={6} className="my-auto">
              <p className="mt-2 SectionHeadingText FontColorDarkBlue AnimateOnScroll animate__animated animate__fadeIn">ABOUT ME</p>
              {/* <p class="mt-2 FontColorDarkBlue">
                I'M CURRENTLY EXPLORING APPLICATIONS OF AUTONOMOUS ROBOTS FOR SUSTAINABILITY AND CLIMATE CHANGE MITIGATION.
              </p> */}
              <p className="mt-2 FontColorBlack AnimateOnScroll animate__animated animate__fadeIn">
                I'm a roboticist and software engineer living in Cambridge, MA. During my time MIT,
                my research focused on camera-based perception, mapping, and state estimation for autonomous robots.
                When I'm not writing code, I'm probably out running or biking.
              </p>
              <p className="mt-2 FontColorDarkBlue AnimateOnScroll animate__animated animate__fadeIn">
                At the moment, I'm working on an early-stage ocean robotics startup called Blue Meadow.
                Broadly, our goal is to help scale-up the regenerative ocean farming industry in the US through automation and sensing.
                Hopefully I'll have more details to share soon :)
              </p>
            </Col>
            <Col xs={0} md={1} className="my-auto"></Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default AboutMe;
