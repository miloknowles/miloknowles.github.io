import React from 'react';

import './css/style.css';
import './css/text.css';

import TopNavbar from './components/top_navbar';
import AboutMe from './components/about_me';
import ProjectList from './components/project_list';
import ContactCard from './components/contact_card';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <TopNavbar></TopNavbar>
      <AboutMe></AboutMe>
      <ProjectList></ProjectList>
      <ContactCard></ContactCard>
      <Footer></Footer>
    </div>
  );
}

export default App;
