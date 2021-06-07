import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';


class AboutMe extends Component {
  render() {
    return (
      <Container className="DarkBackground" id="about-container-fluid" fluid>
        <Container className="pt-5 pb-5" id="about"></Container>
        <Container className="pb-5">
          <Row>
            <Col xs={0} lg={1} className="my-auto"></Col>
            <Col xs={12} lg={4} className="my-auto">
              {/* Fluid image auto-resizes to fit inside of its container */}
              <Image src="/images/me.jpeg" className="AnimateOnScroll animate__animated animate__fadeIn" rounded fluid></Image>
            </Col>
            <Col xs={12} lg={6} className="my-auto">
              <p className="mt-2 pt-3 SectionHeadingText FontColorDarkBlue AnimateOnScroll animate__animated animate__fadeIn animate__slow">ABOUT ME</p>
              <p className="mt-2 FontReadable FontColorBlack AnimateOnScroll animate__animated animate__fadeIn animate__slow">
                I'm a software engineer living in Cambridge, MA. During my time MIT,
                my research focused on camera-based perception, mapping, and state estimation for autonomous robots.
                When I'm not writing code, I'm probably out running or biking.
              </p>
              <p className="mt-2 FontReadable FontColorBlack AnimateOnScroll animate__animated animate__fadeIn animate__slow">
                At the moment, I'm working on an early-stage ocean robotics startup called Blue Meadow.
                Broadly, our goal is to help scale-up the regenerative ocean farming industry through automation and sensing.
                Hopefully I'll have more details to share soon :)
              </p>
              <Card className="SocialMediaCard AnimateOnScroll animate__animated animate__fadeIn animate__slow Transparent">
                <Card.Body className="SocialMediaCardBody">
                  <Card.Link href="milo@bluemeadow.ai" className="text-small">milo(at)bluemeadow.ai</Card.Link>
                  <Card.Link href="https://www.linkedin.com/in/milo-knowles/" target="_blank"><span className="fa fa-linkedin"></span></Card.Link>
                  <Card.Link href="https://twitter.com/milo_knowles" target="_blank"><span className="fa fa-twitter"></span></Card.Link>
                  <Card.Link href="https://github.com/miloknowles" target="_blank"><span className="fa fa-github"></span></Card.Link>
                  <Card.Link href="https://www.strava.com/athletes/6914634" target="_blank"><img src="/strava.svg" className="strava-icon"/></Card.Link>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={0} lg={1} className="my-auto"></Col>
          </Row>
        </Container>
        <Container className="pb-5"></Container>
      </Container>
    );
  }
};

export default AboutMe;
