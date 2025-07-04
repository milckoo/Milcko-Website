import React from 'react';
import milckoLogo from '../assets/logos/milcko.png'; // ✅ import your logo

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 sm:px-12 py-5 z-20">
      {/* Logo */}
      <div className="flex items-center">
        <img src={milckoLogo} alt="Milcko Logo" className="h-10 w-auto" />
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-white font-medium text-sm sm:text-base">
        <li className="hover:text-yellow-400 cursor-pointer">Contact Us</li>
        <li className="hover:text-yellow-400 cursor-pointer">Our Products</li>
        <li className="hover:text-yellow-400 cursor-pointer">Trial Pack</li>
        <li className="hover:text-yellow-400 cursor-pointer">FAQs</li>
        <li className="hover:text-yellow-400 cursor-pointer">About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
