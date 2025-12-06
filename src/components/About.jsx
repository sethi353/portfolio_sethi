import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-6 flex flex-wrap items-center">
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img src="https://i.ibb.co.com/1fck0sM4/unnamed-1.jpg" className="rounded-xl shadow-lg" />
      </motion.div>
      <motion.div
        className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-gray-300 mb-6">I am a passionate web developer with a strong foundation in building modern, responsive, and interactive web applications. 
          Over the past few years, I have honed my skills in technologies such as HTML, CSS, JavaScript, React, Node.js, Tailwind, Next.js,Firebase,Stripe
          and MongoDB, allowing me to craft seamless user experiences. I thrive in collaborative environments where creativity and 
          innovation are encouraged, and I enjoy taking on challenges that push me to learn and grow. Whether it's building a full-stack 
          application from scratch or optimizing an existing website for performance and accessibility, I am dedicated to delivering high-quality, 
          scalable solutions. My goal is to continually improve my craft and contribute to projects that make a meaningful impact.</p>
        <a href="#" className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition">Read More</a>
      </motion.div>
    </section>
  );
};

export default About;
