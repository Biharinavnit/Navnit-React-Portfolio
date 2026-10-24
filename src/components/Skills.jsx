
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaGithub,
  FaTools,
  FaCode,
  FaDatabase,
  FaServer,
  FaLaptopCode,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMysql,
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FaCode,
    skills: [
      { name: 'Java', icon: FaJava, color: 'text-red-400' },
      { name: 'JavaScript', icon: FaJs, color: 'text-yellow-300' },
    ],
  },
  {
    title: 'Frontend Development',
    icon: FaLaptopCode,
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: 'text-orange-400' },
      { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400' },
      { name: 'React.js', icon: FaReact, color: 'text-cyan-300' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-300' },
      { name: 'Bootstrap', icon: SiBootstrap, color: 'text-violet-400' },
    ],
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400' },
      { name: 'Express.js', icon: SiExpress, color: 'text-slate-200' },
      { name: 'REST APIs', icon: FaCode, color: 'text-blue-300' },
      { name: 'JWT Authentication', icon: FaTools, color: 'text-amber-300' },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: 'text-green-400' },
      { name: 'Mongoose', icon: SiMongodb, color: 'text-emerald-300' },
      { name: 'MySQL', icon: SiMysql, color: 'text-blue-300' },
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: FaTools,
    skills: [
      { name: 'Git', icon: FaGitAlt, color: 'text-orange-400' },
      { name: 'GitHub', icon: FaGithub, color: 'text-slate-100' },
      { name: 'VS Code', icon: FaLaptopCode, color: 'text-blue-300' },
      { name: 'Vercel', icon: FaCode, color: 'text-white' },
      { name: 'Render', icon: FaServer, color: 'text-violet-300' },
    ],
  },
  {
    title: 'Core Concepts',
    icon: FaLaptopCode,
    skills: [
      { name: 'Data Structures & Algorithms', icon: FaCode, color: 'text-amber-300' },
      { name: 'OOP', icon: FaLaptopCode, color: 'text-cyan-300' },
      { name: 'DBMS', icon: FaDatabase, color: 'text-green-300' },
      { name: 'Operating Systems', icon: FaTools, color: 'text-orange-300' },
      { name: 'Computer Networks', icon: FaServer, color: 'text-blue-300' },
    ],
  },
];

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleClick = (skillName) => {
    setSelectedSkills((previous) =>
      previous.includes(skillName)
        ? previous.filter((skill) => skill !== skillName)
        : [...previous, skillName]
    );
  };

  return (
    <section
      id="skills"
      className="section-shell relative scroll-mt-20 overflow-hidden px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="ambient-glow left-[-8rem] top-20 h-80 w-80 bg-cyan-500/10" />
      <div className="ambient-glow bottom-0 right-[-8rem] h-96 w-96 bg-violet-600/20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="section-eyebrow">My technical toolkit</p>
          <h2 className="section-title mt-3">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-400">
            Technologies, tools, and computer science fundamentals I use to
            build web applications.
          </p>
          <p className="mt-3 text-xs text-slate-500">
            Select a skill to highlight it.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.title}
                className="glass-card p-5 transition duration-300 hover:border-violet-400/30 sm:p-7"
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: categoryIndex * 0.06 }}
              >
                <h3 className="mb-6 flex items-center gap-3 text-lg font-bold text-white sm:text-xl">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-300/15 bg-violet-500/10 text-violet-300">
                    <CategoryIcon size={21} />
                  </span>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => {
                    const SkillIcon = skill.icon;
                    const selected = selectedSkills.includes(skill.name);

                    return (
                      <motion.button
                        key={skill.name}
                        type="button"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.035 }}
                        whileHover={{ y: -3, scale: 1.025 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleClick(skill.name)}
                        aria-pressed={selected}
                        className={`inline-flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition duration-200 ${
                          selected
                            ? 'border-violet-400/60 bg-violet-500/20 text-white shadow-lg shadow-violet-950/30'
                            : 'border-white/[0.09] bg-slate-950/30 text-slate-300 hover:border-violet-400/30 hover:bg-violet-500/[0.08] hover:text-white'
                        }`}
                      >
                        <SkillIcon className={`text-xl ${skill.color}`} />
                        <span>{skill.name}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
