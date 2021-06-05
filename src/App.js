import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

import './css/style.css';
import './css/text.css';

import TopNavbar from './components/TopNavbar';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';
import RRTAlgorithm from './components/RrtVisualizer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNavbar></TopNavbar>
        <Container id="RRT-Container" className="LightBackground" fluid>
          <RRTAlgorithm></RRTAlgorithm>
          <Container>
            <Row>
              {/* https://stackoverflow.com/questions/35077631/how-to-hide-one-column-from-grid-in-bootstrap-mobile-version */}
              <Col xs={12} md={12} className="d-none d-md-block d-lg-block d-xl-block">
                <p className=" text-center align-middle FontColorDarkBlue AnimateOnScroll animate__animated animate__fadeIn">
                HI, MY NAME IS MILO. WELCOME TO MY PORTFOLIO!</p>
              </Col>
              <Col xs={12} className="d-block d-md-none d-lg-none d-xl-none">
                <p className="text-center align-middle FontColorDarkBlue AnimateOnScroll animate__animated animate__fadeIn">
                HI, MY NAME IS MILO.</p>
              </Col>
              <Col xs={12} className="d-block d-md-none d-lg-none d-xl-none">
                <p className="text-center align-middle FontColorDarkBlue AnimateOnScroll animate__animated animate__fadeIn">
                WELCOME TO MY PORTFOLIO!</p>
              </Col>
            </Row>
          </Container>
        </Container>
        <AboutMe></AboutMe>
        <ProjectList></ProjectList>
        <ContactCard></ContactCard>
        <Footer></Footer>
      </div>
    );
  }

  /**
   * Add AnimateOnScroll functionality to some objects. Any HTML object with the "AnimateOnScroll"
   * class name will be triggered when the user scrolls to it. Any other classname with the format
   * animate__* is removed initially, and added upon scroll to trigger.
   */
  componentDidMount() {
    // Get all elements with "AnimateOnScroll" in their classlist.
    const triggerElements = Array.from(document.getElementsByClassName("AnimateOnScroll"));

    triggerElements.forEach(element => {
      const animateClassNames = Array.from(element.classList).filter(s => {
        return s.includes("animate__");
      });

      // Add a scroll observer for this object.
      animateClassNames.forEach(name => element.classList.remove(name));

      const scrollObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateClassNames.forEach(name => entry.target.classList.add(name));
            return; // If we added the class, exit the function
          }

          // We're not intersecting, so remove the class!
          animateClassNames.forEach(name => entry.target.classList.remove(name));
        });
      });

      scrollObserver.observe(element);
    });
  }
}

export default App;
