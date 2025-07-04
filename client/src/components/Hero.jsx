import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/images/herobg.png';

const Hero = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 bg-opacity-60"></div>

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-md">
          Pure. Fresh.
        </h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-white drop-shadow-md">
          Straight from the Farm to your <span className="text-yellow-400">Doorstep!</span>
        </h2>

        {/* Store Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-12 sm:h-14 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
          <motion.img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-12 sm:h-14 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
