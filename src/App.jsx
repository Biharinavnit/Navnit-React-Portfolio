import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <ChatBot />
      </div>
    </>
  );
};

export default App;