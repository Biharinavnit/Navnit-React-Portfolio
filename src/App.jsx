import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App = () => {
  // Properly place useEffect inside the functional component
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="skills"><Skills /></div>
      <div id="contact"><Contact /></div>
      <div id="chatbot"><ChatBot /></div>
    </>
  );
};

export default App;
