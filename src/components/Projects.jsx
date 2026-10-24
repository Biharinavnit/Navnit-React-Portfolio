
import React from 'react';
import {
  FaRobot,
  FaCloudSun,
  FaShoppingCart,
  FaUserMd,
  FaJs,
} from 'react-icons/fa';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

import aiImg from '../assets/ai.png';
import weatherImg from '../assets/weather.png';
import ecommerceImg from '../assets/ecommerce.png';
import doctorImg from '../assets/doctor.png';
import watchPartyImg from '../assets/watch-party.png';
import faceImg from '../assets/face.png';
import quizImg from '../assets/quiz.png';
import jobImg from '../assets/job.png';

const projects = [
  {
    title: 'Doctor Appointment System',
    description:
      'MERN stack project for booking and managing doctor appointments (ongoing).',
    link: 'https://github.com/Biharinavnit',
    live: 'https://medilux-doctor-appointment-booking.vercel.app/',
    image: doctorImg,
    icon: FaUserMd,
    color: 'text-rose-300',
    tags: ['MERN Stack', 'Booking'],
  },
  {
    title: 'Job Application Tracker Portal',
    description:
      'MERN Stack web application for tracking and managing job applications.',
    link: 'https://github.com/Biharinavnit/job-application-tracker-portal',
    live: 'https://job-application-tracker-portal-three.vercel.app',
    image: jobImg,
    icon: FaJs,
    color: 'text-cyan-300',
    tags: ['MERN Stack', 'Productivity'],
  },
  {
    title: 'AI Virtual Assistant',
    description:
      'Voice-based AI assistant built with JavaScript and APIs.',
    link: 'https://github.com/Biharinavnit/AL-VIRTUAL-ASSISTANCE',
    image: aiImg,
    icon: FaRobot,
    color: 'text-violet-300',
    tags: ['JavaScript', 'APIs'],
  },
  {
    title: 'Weather App',
    description:
      'React application using the OpenWeather API to display weather information.',
    link: 'https://github.com/Biharinavnit/WEATHER-API',
    image: weatherImg,
    icon: FaCloudSun,
    color: 'text-amber-300',
    tags: ['React.js', 'API'],
  },
  {
    title: 'E-commerce Website',
    description:
      'Online fashion store with a React frontend and Firebase backend.',
    link: 'https://github.com/Biharinavnit/E-Commerce-Website-Fashion-Store',
    image: ecommerceImg,
    icon: FaShoppingCart,
    color: 'text-emerald-300',
    tags: ['React.js', 'Firebase'],
  },
  {
    title: 'Watch Party App',
    description:
      'Real-time watch party application where users can sync and watch videos together using WebSockets and React.',
    link: 'https://github.com/Biharinavnit/watch-party-',
    live: 'https://watch-party-eight-beige.vercel.app/',
    image: watchPartyImg,
    icon: FaJs,
    color: 'text-pink-300',
    tags: ['React.js', 'WebSockets'],
  },
  {
    title: 'Face Recognition Attendance System',
    description:
      'AI-based system for marking attendance using face recognition technology.',
    link: 'https://github.com/Biharinavnit/Face-Recognition-Attendance-System',
    image: faceImg,
    icon: FaRobot,
    color: 'text-blue-300',
    tags: ['Python', 'AI'],
  },
  {
    title: 'Quiz App',
    description:
      'Interactive quiz application built using JavaScript with dynamic questions and score tracking.',
    link: 'https://github.com/Biharinavnit/Quiz-App',
    image: quizImg,
    icon: FaJs,
    color: 'text-yellow-300',
    tags: ['JavaScript', 'Interactive UI'],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="section-shell relative scroll-mt-20 overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="ambient-glow right-[-8rem] top-24 h-80 w-80 bg-violet-600/15" />
      <div className="ambient-glow bottom-10 left-[-8rem] h-72 w-72 bg-blue-500/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">Selected work</p>
          <h2 className="section-title mt-3">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            A selection of applications and experiments built while exploring
            full-stack development and practical problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="glass-card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:shadow-2xl hover:shadow-violet-950/20"
              >
                <div className="relative overflow-hidden bg-slate-900/70">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11162a]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/15 bg-[#0b1020]/80 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                      <Icon className={`text-2xl ${project.color}`} />
                    </span>
                    <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
                      {project.title}
                    </h3>
                  </div>

                  <p className="flex-1 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/[0.08] pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-300 transition hover:text-violet-200"
                    >
                      <Github size={17} />
                      GitHub
                      <ArrowUpRight size={15} />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 transition hover:text-emerald-200"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
