
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import milckoLogo from '../assets/logos/milcko.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Contact Us', path: '/' },
    { name: 'Our Products', path: '/products' },
    { name: 'Trial Pack', path: '/trial-pack' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'About Us', path: '/about-us' }
  ];

  return (
    <nav className="absolute top-0 left-0 w-full  z-50 bg-transparent">
      <div className="flex justify-between mr-20 ml-20 items-center px-6 sm:px-12 py-5">
        {/* Logo */}
        <Link to="/" className="flex  items-center">
          <motion.img
            src={milckoLogo}
            alt="Milcko Logo"
            className="h-14 sm:h-16 md:h-30 w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 text-white font-semibold text-base">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="px-3 py-2 rounded-md hover:text-yellow-400 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7" />
            ) : (
              <Bars3Icon className="h-7 w-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black bg-opacity-90 px-6 py-6 text-white space-y-4 backdrop-blur-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-2 py-2 text-base hover:text-yellow-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
