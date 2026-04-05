import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { FocusProvider } from './FocusContext';

function App() {
  return (
    <FocusProvider>
      <Navbar />
      
      <main className="desk-container">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </FocusProvider>
  );
}

export default App;
