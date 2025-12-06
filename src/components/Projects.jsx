import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import projectsData from "../data/projects";

const Projects = () => {
  const [visible, setVisible] = useState(3);

  const showMore = () => setVisible((prev) => prev + 3);
  const showLess = () => setVisible(3);

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {projectsData.slice(0, visible).map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex items-center justify-between">
                {/* GitHub Button */}
                <a
                  href={project.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center space-x-2"
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>

                {/* Live Button */}
                <a
                  href={project.live || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-teal-400 text-black px-4 py-2 rounded-lg hover:bg-teal-300 transition ${
                    project.live === "#" ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                >
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More / Less */}
        <div className="text-center mt-10">
          {visible < projectsData.length ? (
            <button
              onClick={showMore}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg"
            >
              Show More
            </button>
          ) : (
            <button
              onClick={showLess}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg"
            >
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
