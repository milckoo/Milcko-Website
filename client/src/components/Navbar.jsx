import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { AuthContext } from "../contexts/AuthContext";
import milckoLogo from "../assets/logos/milcko.png";
import NavbarCartIcon from "./NavbarCartIcon";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Scroll listener for bg change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Contact Us", path: "/contactus" },
    { name: "Our Products", path: "/products" },
    { name: "Trial Pack", path: "/trial-pack" },
    { name: "FAQs", path: "/faqs" },
    { name: "About Us", path: "/about-us" },
  ];

  const additionalNavItems = [
    { name: "Testimonials", path: "/testimonials" },
    { name: "Delivery Areas", path: "/delivery-areas" },
    { name: "Bottle Return Policy", path: "/return-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Our Farms", path: "/our-farms" },
    { name: "Subscription", path: "/subscription" },
    { name: "Gallery", path: "/gallery" },
    { name: "MIlkfact", path: "/milkfact" },
  ];

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        isHome && !isScrolled ? "" : "bg-gray-600 shadow-md"
      }`}
    >
      <div className="max-w-8xl mx-auto flex items-center justify-between w-full h-20 px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <motion.img
            src={milckoLogo}
            alt="Milcko Logo"
            className="h-16 sm:h-20 w-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </Link>

        {/* Desktop Nav (for 1280px and above) */}
        <div className="hidden xl:flex items-center gap-4 xl:gap-6 text-sm md:text-base font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`px-2 py-1 rounded transition-colors ${
                isHome && !isScrolled
                  ? "text-white hover:text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {/* More Dropdown */}
          <div className="relative group">
            <button
              className={`px-2 py-1 flex items-center rounded transition-colors ${
                isHome && !isScrolled
                  ? "text-white hover:text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              More
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="absolute right-0 hidden group-hover:block rounded-md mt-1 w-48 shadow-lg overflow-hidden z-50">
              <div
                className={`py-1 ${
                  isHome && !isScrolled ? "bg-gray-900" : "bg-white"
                }`}
              >
                {additionalNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isHome && !isScrolled
                        ? "text-white hover:bg-gray-800 hover:text-yellow-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Cart + Auth */}
          <div className="flex items-center ml-3 pl-3 border-l border-gray-400">
            <NavbarCartIcon />
            {isAuthenticated ? (
              <Link
                to="/dashboard"
                className="ml-3 px-3 py-1.5 rounded text-sm bg-yellow-400 text-black hover:bg-yellow-500 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`ml-5 px-3 py-1.5 border rounded text-sm transition-colors ${
                    isHome && !isScrolled
                      ? "border-white text-white hover:bg-white hover:text-black"
                      : "border-white text-white hover:bg-gray-200 hover:text-black"
                  }`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="ml-4 px-3 py-1.5 rounded bg-yellow-400 text-black text-sm hover:bg-yellow-500 transition-colors"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Tablet/Mid-size Menu (for 768px to 1279px) */}
        <div className="hidden md:flex xl:hidden items-center">
          <NavbarCartIcon />
          <div className="relative group ml-4">
            <button
              className={`px-3 py-1.5 flex items-center rounded transition-colors ${
                isHome && !isScrolled
                  ? "text-white hover:text-yellow-400"
                  : "text-white hover:text-yellow-300"
              }`}
            >
              Menu
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div className="absolute right-0 hidden group-hover:block rounded-md mt-1 w-56 shadow-lg overflow-hidden z-50">
              <div
                className={`py-2 ${
                  isHome && !isScrolled ? "bg-gray-900" : "bg-white"
                }`}
              >
                {[...navItems, ...additionalNavItems].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      isHome && !isScrolled
                        ? "text-white hover:bg-gray-800 hover:text-yellow-400"
                        : "text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="border-t border-gray-600 mt-2 pt-2">
                  {isAuthenticated ? (
                    <Link
                      to="/dashboard"
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isHome && !isScrolled
                          ? "text-white hover:bg-gray-800 hover:text-yellow-400"
                          : "text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                      }`}
                    >
                      Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isHome && !isScrolled
                            ? "text-white hover:bg-gray-800 hover:text-yellow-400"
                            : "text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                        }`}
                      >
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isHome && !isScrolled
                            ? "text-white hover:bg-gray-800 hover:text-yellow-400"
                            : "text-gray-700 hover:bg-gray-100 hover:text-yellow-600"
                        }`}
                      >
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Button (for 0px to 767px) */}
        <div className="flex md:hidden items-center">
          <NavbarCartIcon />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 p-1 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XMarkIcon className="h-7 w-7 text-white" />
            ) : (
              <Bars3Icon className="h-7 w-7 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden fixed top-20 left-0 w-full h-screen bg-gray-900 text-white px-4 py-6 space-y-2 overflow-y-auto z-40`}
          >
            {[...navItems, ...additionalNavItems].map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block py-3 px-2 rounded hover:bg-gray-700 hover:text-yellow-400 text-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-700 mt-2">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="block py-3 px-2 rounded hover:bg-gray-700 hover:text-yellow-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="block py-3 px-2 rounded hover:bg-gray-700 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block py-3 px-2 rounded hover:bg-gray-700 hover:text-yellow-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;