import React from 'react';
import developerImg from '../assets/developer.svg';

const About = () => {
  return (
   <section className="relative -mt-1 bg-gradient-to-r from-[#0B1026] via-[#111827] to-[#1E1B4B] py-20 px-5 overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500 opacity-30 rounded-full blur-3xl animate-pulse z-0" />

      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-500 opacity-30 rounded-full blur-3xl animate-pulse z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side */}
        <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 text-center md:text-left text-white shadow-xl hover:ring-2 hover:ring-blue-500 transition duration-300">

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            I am <span className="font-semibold text-pink-400">Navnit Bihari</span>,
            a <span className="text-green-300 font-medium">Full Stack Developer</span>
            specializing in the
            <span className="text-orange-300 font-medium"> MERN Stack</span>
            (MongoDB, Express, React, Node.js), and a
            <span className="text-blue-400 font-medium">
              {' '}B.Tech Computer Science Engineering Graduate
            </span>
            {' '}from
            <span className="text-blue-400"> Galgotias University</span>.
            I build scalable, high-performance and visually engaging web
            applications using modern technologies and best coding practices.
          </p>

          <p className="text-gray-400 text-sm mt-5 leading-relaxed">
            My work emphasizes clean architecture, maintainable code and
            user-focused design. I am committed to continuous learning and
            staying ahead with emerging tools and frameworks. My goal is to
            contribute to innovative projects that merge technical excellence
            with exceptional user experiences.
          </p>

          

        </div>

        {/* Right Side SVG */}
        <div className="flex-1 flex justify-center">
          <img
            src={developerImg}
            alt="Developer Illustration"
            className="w-full max-w-md drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]"
          />
        </div>

      </div>

    </section>
  );
};

export default About;