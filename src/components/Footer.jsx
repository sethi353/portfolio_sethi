import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="py-6 text-center bg-gray-900 border-t border-gray-700"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <p className="text-gray-400">@ 2025 sethisaha. All Rights Reserved.</p>
       <p className="text-teal-400 hover:underline">
      sethisaha56@gmail.com
    </p>
    </motion.footer>
  );
};

export default Footer;
