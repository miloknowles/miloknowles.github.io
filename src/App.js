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
      <div id="background-rrt-box">
        <RRTAlgorithm></RRTAlgorithm>
      </div>
      <AboutMe></AboutMe>
      <ProjectList></ProjectList>
      <ContactCard></ContactCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
