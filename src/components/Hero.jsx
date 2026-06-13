import React from 'react';
import resumePdf from '../assets/Navnit_Resume.pdf';
import profileImg from '../assets/profile.jpg';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
return ( <section className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 text-white overflow-hidden bg-gradient-to-r from-[#0B1026] via-[#111827] to-[#1E1B4B]">
  {/* Glow Effects */}
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse z-0"></div>

  <div className="absolute top-40 right-40 w-96 h-96 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse z-0"></div>

  <div className="absolute bottom-20 left-40 w-96 h-96 bg-purple-500 opacity-10 rounded-full blur-3xl animate-pulse z-0"></div>

  {/* Left Content */}
  <div className="flex-1 z-10 text-center md:text-left">

    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
      Hi, I'm <span className="text-yellow-300">Navnit Bihari</span>
    </h1>

    <h2 className="text-xl md:text-2xl text-blue-300 font-semibold mb-6">
      <Typewriter
        words={[
          'Full Stack Developer',
          'Software Developer',
          'React Developer',
          'MERN Developer',
          'Frontend Developer'
        ]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={40}
        delaySpeed={1500}
      />
    </h2>

    <p className="text-gray-200 text-lg mb-8 max-w-xl">
      Passionate Full Stack Developer specializing in MERN Stack,
      building scalable web applications with modern UI/UX,
      clean architecture, and responsive user experiences.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

      <a
        href={resumePdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition duration-300"
      >
        View Resume
      </a>

      <a
        href="#projects"
        className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow-lg transition duration-300"
      >
        View Projects
      </a>

    </div>

    {/* Stats */}
    <div className="flex gap-10 mt-10 justify-center md:justify-start">

      <div>
        <h3 className="text-3xl font-bold text-yellow-300">7+</h3>
        <p className="text-gray-300">Projects</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-yellow-300">MERN</h3>
        <p className="text-gray-300">Stack Developer</p>
      </div>

      <div>
        <h3 className="text-3xl font-bold text-yellow-300">B.Tech</h3>
        <p className="text-gray-300">CSE Graduate</p>
      </div>

    </div>

  </div>

  {/* Profile Image */}
  <div className="flex-1 z-10 mt-16 md:mt-0 flex justify-center">

    <img
      src={profileImg}
      alt="Profile"
      className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-purple-400 shadow-[0_0_60px_rgba(168,85,247,0.8)] hover:scale-105 transition duration-500"
    />

  </div>

</section>
);
};

export default Hero;
