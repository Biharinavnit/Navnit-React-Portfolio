import React from 'react';

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-5 flex justify-center items-center">
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 max-w-5xl text-center text-white shadow-xl hover:ring-2 hover:ring-blue-500 transition duration-300 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          I am <span className="font-semibold text-pink-400">Navnit</span>, a <span className="text-green-300 font-medium">Full Stack Developer</span> specializing in the <span className="text-orange-300 font-medium">MERN stack</span> (MongoDB, Express, React, Node.js), currently pursuing a <span className="text-blue-400 font-medium">B.Tech in Computer Science</span> at <span className="text-blue-400">Galgotias University</span>. I build scalable, high-performance, and visually engaging web applications using modern technologies and best coding practices.
        </p>
        <p className="text-gray-400 text-sm mt-4">
          My work emphasizes clean architecture, maintainable code, and user-focused design. I am committed to continuous learning and staying ahead with emerging tools and frameworks. My goal is to contribute to innovative projects that merge technical excellence with exceptional user experiences.
        </p>
      </div>
    </section>
  );
};

export default About;
