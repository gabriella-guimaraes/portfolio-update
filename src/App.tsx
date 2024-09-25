import React from 'react';
import './App.css';
import NavBar from './Components/organisms/header/NavBar';
import Hero from './Components/templates/hero/hero';
import About from './Components/templates/about/about';
import Skills from './Components/templates/skills/skills';
import Xp from './Components/templates/xp/xp';
import Projects from './Components/templates/projects/projects';
import Contact from './Components/templates/contact/contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Xp />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
