import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPaintBrush, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-5xl text-teal-400" />,
    title: 'Web Development',
    desc: 'I build responsive and optimized websites.'
  },
  {
    icon: <FaPaintBrush className="text-5xl text-teal-400" />,
    title: 'UI/UX Design',
    desc: 'Clean and modern user-friendly interfaces.'
  },
  {
    icon: <FaMobileAlt className="text-5xl text-teal-400" />,
    title: 'Responsive Design',
    desc: 'Websites that look great on all devices.'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-900 p-8 rounded-xl shadow hover:-translate-y-2 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
