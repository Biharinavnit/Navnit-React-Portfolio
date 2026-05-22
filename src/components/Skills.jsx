import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava   // ✅ Added Java icon
} from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

const skillData = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-300 text-2xl" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: 'Python', icon: <FaPython className="text-blue-400 text-2xl" /> },
  { name: 'Java', icon: <FaJava className="text-red-500 text-2xl" /> }, // ✅ New Skill Added
  { name: 'Git', icon: <FaGitAlt className="text-red-500 text-2xl" /> },
];

// Animation Variants
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const [selectedSkills, setSelectedSkills] = useState([]);

  const handleClick = (skillName) => {
    setSelectedSkills((prev) =>
      prev.includes(skillName)
        ? prev.filter((s) => s !== skillName)
        : [...prev, skillName]
    );
  };

  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-10 text-center">Skills</h2>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillData.map((skill, index) => {
            const isSelected = selectedSkills.includes(skill.name);
            return (
              <motion.button
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleClick(skill.name)}
                className={`flex items-center gap-2 px-5 py-2 rounded-full shadow-md transition-colors duration-300 font-medium
                  ${
                    isSelected
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700 text-gray-200 hover:bg-blue-600 hover:text-white'
                  }`}
              >
                {skill.icon}
                {skill.name}
              </motion.button>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;