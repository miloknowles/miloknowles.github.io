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
            <Col xs={12} md={4} className="my-auto">
              {/* Fluid image auto-resizes to fit inside of its container */}
              <Image src="/images/me.jpeg" className="" rounded fluid></Image>
            </Col>
            <Col xs={12} md={8} className="my-auto">
              <h2 class="mt-2 FontColorDarkBlue">ABOUT ME</h2>
              <p class="mt-2 FontColorDarkBlue">
                I'M CURRENTLY EXPLORING APPLICATIONS OF AUTONOMOUS ROBOTS FOR SUSTAINABILITY AND CLIMATE CHANGE MITIGATION.
              </p>
              <p class="mt-2 FontColorBlack">
                I RECEIVED MY B.S AND M.ENG FROM MIT, WHERE I FOCUSED ON ROBOTICS, COMPUTER VISION, AND AI.
              </p>
              <p class="mt-2 FontColorBlack">
                WHEN I'M NOT WRITING CODE, I ENJOY RUNNING, BIKING, MUSIC, AND TRYING TO KEEP MY HYDROPONIC GARDEN ALIVE.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
};

export default AboutMe;
