import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaYoutube } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-wrap items-center justify-between max-w-6xl mx-auto px-6 pt-32">
      <motion.div
        className="w-full md:w-1/2 space-y-6"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-semibold">Hello, It's Me</h2>
        <h1 className="text-5xl font-bold text-teal-400">Sethi Saha</h1>
        <h3 className="text-3xl">And I'm a <span className="text-teal-400">Web Developer</span></h3>
        <p className="text-gray-300">I build modern, responsive, and interactive websites using the latest web technologies.</p>
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/sethi.saha.2024" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-teal-400 rounded-full hover:bg-teal-400 hover:text-black transition">
            <FaFacebook />
          </a>
          <a href="https://github.com/sethi353" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-teal-400 rounded-full hover:bg-teal-400 hover:text-black transition">
            <FaGithub />
          </a>
          <a href="https://www.youtube.com/@SethiSaha" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-teal-400 rounded-full hover:bg-teal-400 hover:text-black transition">
            <FaYoutube />
          </a>
        </div>
        <a href="#contact" className="inline-block bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition">Hire Me</a>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src="https://i.ibb.co.com/1fck0sM4/unnamed-1.jpg" alt="Profile" className="rounded-full w-80 h-80 object-cover shadow-lg" />
      </motion.div>
    </section>
  );
};

export default Hero;
