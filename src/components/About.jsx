
import React from 'react';
import { GraduationCap, BriefcaseBusiness, Code2, Target } from 'lucide-react';
import developerImg from '../assets/developer.svg';

const highlights = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'B.Tech in Computer Science Engineering',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Experience',
    description: 'MERN Full Stack Developer Internship at EduSkills Academy',
  },
  {
    icon: Code2,
    title: 'Projects',
    description: 'Full-stack applications, REST APIs, and authentication',
  },
  {
    icon: Target,
    title: 'Problem Solving',
    description: '165+ LeetCode problems solved',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="section-shell relative scroll-mt-20 overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="ambient-glow left-[-9rem] top-10 h-72 w-72 bg-violet-600/15" />
      <div className="ambient-glow bottom-0 right-[-7rem] h-80 w-80 bg-fuchsia-500/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">A little about me</p>
          <h2 className="section-title mt-3">About <span className="text-gradient">Me</span></h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            My background, the technologies I work with, and what motivates me
            to create useful software.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div className="glass-card p-6 sm:p-9">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Creating meaningful digital experiences
            </h3>

            <p className="mt-6 leading-8 text-slate-300">
              I am <span className="font-semibold text-violet-300">Navnit Bihari</span>,
              a Full Stack Developer specializing in the{' '}
              <span className="font-semibold text-fuchsia-300">MERN stack</span>
              {' '}(MongoDB, Express.js, React.js, and Node.js). I am a B.Tech
              Computer Science Engineering graduate from Galgotias University.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              I completed a MERN Full Stack Developer internship at EduSkills
              Academy, where I worked on React applications, REST APIs with
              Node.js and Express.js, and JWT-based authentication. My projects
              include a Doctor Appointment Booking System and a Job Application
              Tracker with a Kanban-style dashboard.
            </p>

            <p className="mt-4 leading-8 text-slate-400">
              I value readable, maintainable code and interfaces that work well
              across devices. I am looking for an entry-level Software
              Developer or MERN Stack Developer role where I can contribute
              to real products and continue growing.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT'].map(
                (technology) => (
                  <span key={technology} className="tech-badge">
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="space-y-5">
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-8 rounded-full bg-violet-500/20 blur-3xl" />
              <img
                src={developerImg}
                alt="Developer working on software"
                loading="lazy"
                className="relative mx-auto w-full drop-shadow-[0_0_35px_rgba(139,92,246,0.18)]"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {highlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/[0.06]"
                >
                  <Icon size={21} className="text-violet-300" />
                  <h4 className="mt-3 font-semibold text-white">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-slate-400">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
