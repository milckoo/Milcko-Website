import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import { AuthContext } from '../contexts/AuthContext';
import milckoLogo from '../assets/logos/milcko.png';
import NavbarCartIcon from './NavbarCartIcon';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, isAuthenticated, logout } = useContext(AuthContext);
  const location = useLocation();

  const navItems = [
    { name: 'Contact Us', path: '/contactus' },
    { name: 'Our Products', path: '/products' },
    { name: 'Trial Pack', path: '/trial-pack' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'About Us', path: '/about-us' }
  ];

  // Add additional nav items with grey background
  const additionalNavItems = [
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Delivery Areas', path: '/delivery-areas' },
    { name: 'Return & Refund', path: '/return-policy' },
    { name: 'Terms & Conditions', path: '/terms-conditions' },
    { name: 'Privacy Policy', path: '/privacy-policy' }
  ];
  
  // Add all paths to grayBgPaths
  const grayBgPaths = [
    '/contactus', 
    '/products', 
    '/faqs', 
    '/trial-pack', 
    '/about-us',
    '/our-farmers',
    '/our-process',
    '/sustainability',
    '/careers',
    '/login',
    '/register',
    '/testimonials',
    '/delivery-areas',
    '/return-policy',
    '/terms-conditions',
    '/privacy-policy',
    '/cart',              // Add cart page
    '/checkout',          // Add checkout page if you have one
    '/order-summary',     // Add order summary page if you have one
    '/my-orders'          // Add orders page if you have one
  ];
  
  const isGrayBackground = grayBgPaths.includes(location.pathname);
  const isHome = location.pathname === '/';

  return (
    <nav className={`absolute top-0 left-0 w-full z-50 transition-all  px-5 sm:px-12 duration-300 ${isGrayBackground ? 'bg-[#373737]' : 'bg-transparent'}`}>
      <div className={`flex justify-between mr-20 ml-20 items-center px-5 sm:px-12 ${isHome ? 'py-5' : 'py-2'}`}>
        
        <Link to="/" className="flex items-center">
          <motion.img
            src={milckoLogo}
            alt="Milcko Logo"
            className="h-14 sm:h-16 md:h-15 w-auto"
            initial={{ opacity: 1, scale: 1.5 }}
            animate={{ opacity: 2, scale: 2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          />
        </Link>

        <div className="flex items-center">
          <ul className="hidden md:flex gap-10 text-white font-semibold text-base">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-yellow-400'
                      : 'hover:text-yellow-400'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Additional nav items with grey background - Desktop */}
          <ul className="hidden md:flex ml-4">
            <li className="relative group">
              <button className="flex items-center px-3 py-2 text-white hover:text-yellow-400">
                More
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              <div className="absolute right-0 z-50 hidden group-hover:block w-48 py-2 mt-1 bg-gray-900 rounded-md shadow-lg">
                {additionalNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-300 bg-gray-800 hover:text-yellow-400 my-1 mx-2 rounded"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
          </ul>

          {/* Authentication buttons */}
          <div className="hidden md:flex ml-6 gap-4">
            <NavbarCartIcon />
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-4 py-2 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition-colors"
                >
                  Dashboard
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-4 py-2 rounded-md bg-yellow-400 text-black font-medium hover:bg-yellow-500 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
        
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
            
            {/* Mobile authentication menu items */}
            <div className="pt-4 border-t border-gray-700">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/dashboard"
                    className="block px-2 py-2 text-base hover:text-yellow-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block px-2 py-2 text-base hover:text-yellow-400 transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-2 py-2 text-base hover:text-yellow-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>

            {/* Additional links in the mobile menu */}
            <div className="pt-4 border-t border-gray-700">
              <h3 className="px-2 py-2 text-sm font-medium text-gray-400">More Pages</h3>
              {additionalNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block bg-gray-800 px-3 py-1.5 rounded text-gray-300 hover:text-yellow-400 my-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
