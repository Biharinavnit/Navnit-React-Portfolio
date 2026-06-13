import React from 'react';
import { FaRobot, FaCloudSun, FaShoppingCart, FaUserMd, FaJs } from 'react-icons/fa';

// ✅ Import Images
import aiImg from '../assets/ai.png';
import weatherImg from '../assets/weather.png';
import ecommerceImg from '../assets/ecommerce.png';
import doctorImg from '../assets/doctor.png';
import watchPartyImg from '../assets/watch-party.png';
import faceImg from '../assets/face.png';
import quizImg from '../assets/quiz.png';

const projects = [
  {
    title: 'AI Virtual Assistant',
    description: 'Voice-based AI assistant built with JavaScript and APIs.',
    link: 'https://github.com/Biharinavnit/AL-VIRTUAL-ASSISTANCE',
    image: aiImg,
    icon: <FaRobot className="text-4xl text-purple-400 mb-3" />,
  },
  {
    title: 'Weather App',
    description: 'React app using OpenWeather API to show live weather info.',
    link: 'https://github.com/Biharinavnit/WEATHER-API',
    image: weatherImg,
    icon: <FaCloudSun className="text-4xl text-yellow-300 mb-3" />,
  },
  {
    title: 'E-commerce Website',
    description: 'Full stack online store with React frontend and firebase backend.',
    link: 'https://github.com/Biharinavnit/E-Commerce-Website-Fashion-Store',
    image: ecommerceImg,
    icon: <FaShoppingCart className="text-4xl text-emerald-300 mb-3" />,
  },
  {
    title: 'Doctor Appointment System',
    description: 'MERN stack project for booking and managing doctor appointments (Ongoing).',
    link: 'https://github.com/Biharinavnit',
    live: 'https://medilux-doctor-appointment-booking.vercel.app/',
    image: doctorImg,
    icon: <FaUserMd className="text-4xl text-red-400 mb-3" />,
  },
  {
    title: 'Watch Party App',
    description: 'Real-time watch party application where users can sync and watch videos together using WebSockets and React.',
    link: 'https://github.com/Biharinavnit/watch-party-',
    live: 'https://watch-party-eight-beige.vercel.app/',
    image: watchPartyImg,
    icon: <FaJs className="text-4xl text-pink-400 mb-3" />,
  },
  {
    title: 'Face Recognition Attendance System',
    description: 'AI-based system for marking attendance using face recognition technology.',
    link: 'https://github.com/Biharinavnit/Face-Recognition-Attendance-System',
    image: faceImg,
    icon: <FaRobot className="text-4xl text-blue-400 mb-3" />,
  },
  {
    title: 'Quiz App',
    description: 'Interactive quiz application built using JavaScript with dynamic questions and score tracking.',
    link: 'https://github.com/Biharinavnit/Quiz-App',
    image: quizImg,
    icon: <FaJs className="text-4xl text-yellow-400 mb-3" />,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-[#0B1026] via-[#111827] to-[#1E1B4B] text-white py-20 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-white mb-14">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition duration-300"
            >
              {/* ✅ Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              <div className="flex justify-center">
                {project.icon}
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex justify-center gap-4 flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 font-medium hover:underline transition"
                >
                  View on GitHub →
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 font-medium hover:underline transition"
                  >
                    View Live →
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;