import React from 'react';
import './App.css';
import NavBar from './Components/organisms/header/NavBar';
import Hero from './Components/templates/hero/hero';
import About from './Components/templates/about/about';
import Skills from './Components/templates/skills/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      Oh shit, here we go again
    </div>
  );
}

export default App;
