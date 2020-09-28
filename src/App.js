import React from 'react';

import Container from 'react-bootstrap/Container';

import './css/style.css';
import './css/text.css';

import TopNavbar from './components/top_navbar';
import AboutMe from './components/about_me';
import ProjectList from './components/project_list';
import ContactCard from './components/contact_card';
import Footer from './components/footer';
import RRTAlgorithm from './components/rrt';


function App() {
  return (
    <div className="App">
      <TopNavbar></TopNavbar>
      <Container id="RRT-Container" className="LightBackground" fluid>
        <RRTAlgorithm></RRTAlgorithm>
        <Container>
          <p className="text-center align-middle FontColorDarkBlue">WELCOME TO MILO KNOWLES' PORTFOLIO</p>
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
