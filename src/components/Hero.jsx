import React from 'react';
import profileImg from '../assets/profile.jpg';
import Particles from 'react-tsparticles';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-gray-900 text-white overflow-hidden">
      {/* Particle Background */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          background: { color: 'transparent' },
          particles: {
            number: { value: 60 },
            size: { value: 3 },
            color: { value: '#ffffff' },
            links: { enable: true, color: '#ffffff', distance: 150 },
            move: { enable: true, speed: 1 },
          },
        }}
      />

      {/* Blurred Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 opacity-30 rounded-full filter blur-3xl animate-pulse z-0" />

      {/* Left Text */}
      <div className="flex-1 z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="text-yellow-300">Navnit</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-blue-300 font-semibold mb-4">
          <Typewriter
            words={['Full Stack Developer', 'React Developer', 'Mern Developer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>
         {/* ✅ download  (new) */}
        {/* <a
          href="/Navnit_Resume.pdf"
          download
          className="inline-block mt-2 px-6 py-3 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold rounded-md shadow-lg transition duration-300"
        >
          Download Resume
        </a> */}

         {/* ✅ View Resume (new) */}
        <a
          href="/Navnit_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-6 py-3 bg-blue-400 hover:bg-orange-300 text-black font-semibold rounded-md shadow-lg transition duration-300"
        >
          View Resume
        </a>
              
      </div>

      {/* Profile Image */}
      <div className="flex-1 z-10 mt-10 md:mt-0 flex justify-center">
        <img
          src={profileImg}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-white shadow-2xl animate-bounce-slow"
        />
      </div>
    </section>
  );
};

export default Hero;
