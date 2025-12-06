import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiFirebase, SiStripe } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', icon: <FaReact className="text-blue-400" /> },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-white" /> },
  { name: 'Firebase', icon: <SiFirebase className="text-yellow-400" /> },
  { name: 'Stripe', icon: <SiStripe className="text-indigo-500" /> }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <motion.div className="flex flex-wrap justify-center gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-900 px-6 py-3 rounded-lg shadow hover:-translate-y-2 transition flex items-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            {skill.icon}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
