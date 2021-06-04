import React from 'react';

import Container from 'react-bootstrap/Container';

import './css/style.css';
import './css/text.css';

import TopNavbar from './components/TopNavbar';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import ContactCard from './components/contact_card';
import Footer from './components/Footer';
import RRTAlgorithm from './components/RrtVisualizer';


function App() {
  return (
    <div className="App">
      <TopNavbar></TopNavbar>
      <Container id="RRT-Container" className="LightBackground" fluid>
        <RRTAlgorithm></RRTAlgorithm>
        <Container>
          <p className="text-center align-middle FontColorDarkBlue">HI, MY NAME IS MILO. WELCOME TO MY PORTFOLIO!</p>
        </Container>
      </Container>
      <AboutMe></AboutMe>
      <ProjectList></ProjectList>
      <ContactCard></ContactCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
