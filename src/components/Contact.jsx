import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <motion.form
        className="grid grid-cols-1 gap-6 bg-gray-800 p-8 rounded-xl shadow"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <input type="text" placeholder="Full Name" className="p-3 rounded bg-gray-900 border border-gray-700" />
        <input type="email" placeholder="Email Address" className="p-3 rounded bg-gray-900 border border-gray-700" />
        <textarea placeholder="Your Message" rows="5" className="p-3 rounded bg-gray-900 border border-gray-700"></textarea>
        <button className="bg-teal-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-teal-300 transition">Send Message</button>
      </motion.form>
    </section>
  );
};

export default Contact;
