// Navbar.jsx
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);

  const links = [
    { name: "Home", to: "home" },
    { name: "Services", to: "services" },
    { name: "About", to: "about" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const resumeLink = "https://drive.google.com/file/d/1t4wNdO_BGY2s1Sh_ZhUGsHzB6DokX_Pb/view?usp=sharing"; // <-- insert your resume link here

  // Scroll lock for mobile menu
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = links.map((link) => document.getElementById(link.to));
      sections.forEach((section) => {
        if (!section) return;
        const top = section.offsetTop - 100;
        const bottom = top + section.offsetHeight;
        if (scrollY >= top && scrollY < bottom) {
          setActiveSection(section.id);
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY, links]);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 bg-opacity-70 backdrop-blur z-50 shadow">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        <h1
          className="text-3xl font-bold text-teal-400 cursor-pointer"
          onClick={() => scroll.scrollToTop()}
        >
          SethiSaha
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 text-lg">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className={`cursor-pointer hover:text-teal-400 transition ${
                  activeSection === link.to ? "text-teal-400 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {/* Hire Me & Resume buttons */}
          <li>
            <a
              href="#contact"
              className="ml-4 bg-teal-400 text-black px-4 py-2 rounded-lg hover:bg-teal-300 transition"
            >
              Hire Me
            </a>
          </li>
          <li>
            <a
              href={resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            aria-label="Open navigation"
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            {!isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-60 z-50"
              onClick={closeMenu}
            >
              <motion.div
                initial={{ x: 300 }}
                animate={{ x: 0 }}
                exit={{ x: 300 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute right-0 top-0 w-72 bg-gray-900 h-full shadow-lg p-6 flex flex-col justify-start z-60"
                onClick={(e) => e.stopPropagation()}
              >
                <ul className="flex flex-col space-y-6 text-lg mt-10">
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={`cursor-pointer hover:text-teal-400 transition ${
                          activeSection === link.to
                            ? "text-teal-400 font-semibold"
                            : "text-white"
                        }`}
                        onClick={closeMenu}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto flex flex-col space-y-4">
                  <a
                    href="#contact"
                    className="block text-center bg-teal-400 text-black px-4 py-3 rounded-lg"
                    onClick={closeMenu}
                  >
                    Hire Me
                  </a>
                  <a
                    href={resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-gray-700 text-white px-4 py-3 rounded-lg hover:bg-gray-600 transition"
                  >
                    Resume
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
