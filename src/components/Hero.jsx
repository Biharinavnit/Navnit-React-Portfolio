
import React from 'react';
import { ArrowDown, ArrowUpRight, Download, Sparkles } from 'lucide-react';
import { Link } from 'react-scroll';
import resumePdf from '../assets/Navnit_Resume.pdf';
import profileImg from '../assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="section-shell relative flex min-h-[calc(100vh-76px)] scroll-mt-20 items-center overflow-hidden px-5 py-16 text-white sm:px-8 md:py-20 lg:px-12"
    >
      <div className="ambient-glow left-[-8rem] top-[-5rem] h-80 w-80 bg-violet-600/25" />
      <div className="ambient-glow bottom-[-8rem] right-[-5rem] h-96 w-96 bg-fuchsia-500/20" />
      <div className="ambient-glow right-[28%] top-[18%] h-64 w-64 bg-blue-500/10" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-300/20 bg-violet-400/[0.08] px-4 py-2 text-sm text-violet-200 shadow-lg shadow-violet-950/20">
            <Sparkles size={16} className="text-violet-300" />
            Full Stack Developer
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          </div>

          <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-slate-400">
            Hello, welcome to my portfolio
          </p>

          <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Hi, I'm
            <span className="mt-1 block text-gradient">Navnit Bihari</span>
          </h1>

          <h2 className="mt-5 min-h-9 text-xl font-semibold text-violet-300 sm:text-2xl">
            <Typewriter
              words={[
                'Full Stack Developer',
                'Software Developer',
                'React Developer',
                'MERN Stack Developer',
                'Frontend Developer',
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={65}
              deleteSpeed={35}
              delaySpeed={1400}
            />
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
            I build responsive, user-focused web applications using the MERN
            stack, modern UI design, clean architecture, and practical
            problem-solving.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a
              href={resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary inline-flex items-center justify-center gap-2"
            >
              <Download size={18} />
              View Resume
            </a>

            <Link
              to="projects"
              smooth
              duration={450}
              offset={-78}
              className="button-secondary inline-flex cursor-pointer items-center justify-center gap-2"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/10 pt-7 sm:max-w-xl sm:gap-6">
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">8+</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Projects</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">MERN</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">Tech Stack</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-white sm:text-3xl">165+</p>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">LeetCode Problems</p>
            </div>
          </div>

          <Link
            to="about"
            smooth
            duration={450}
            offset={-78}
            className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm text-slate-400 transition hover:text-violet-300"
          >
            Discover more
            <ArrowDown size={16} />
          </Link>
        </div>

        <div className="relative order-1 flex justify-center lg:order-2">
          <div className="absolute h-64 w-64 rounded-full bg-violet-600/25 blur-[85px] sm:h-80 sm:w-80" />

          <div className="relative rounded-[2rem] border border-white/15 bg-white/[0.06] p-3 shadow-2xl shadow-violet-950/40 backdrop-blur-xl sm:p-4">
            <div className="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-violet-400/40 via-transparent to-fuchsia-400/30 opacity-70 blur-sm" />

            <img
              src={profileImg}
              alt="Navnit Bihari"
              className="relative h-64 w-64 rounded-[1.5rem] object-cover object-top sm:h-80 sm:w-80 lg:h-[390px] lg:w-[350px]"
            />

            <div className="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#12172a]/90 p-4 shadow-xl backdrop-blur-xl sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
                <Sparkles size={20} />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Building for the web</p>
                <p className="mt-1 text-xs text-slate-400">Learning · Creating · Improving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
