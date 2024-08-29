import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/Navbar/Navbar';
import { Banner } from './components/Banner/Banner';
import { AboutMe } from './components/AboutMe/AboutMe';  // Import the AboutMe component
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutMe /> 
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
