import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import farmerImg from '../assets/images/discount.png'; // Make sure the path is correct

const SubscribeBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' }); // triggers only once

  return (
    <div
      ref={ref}
      className="w-full px-6 py-20 md:px-24 flex flex-col md:flex-row items-center justify-between gap-10"
      style={{ backgroundColor: '#F7B757', minHeight: '450px' }}
    >
      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <img
          src={farmerImg}
          alt="Subscribe Farmer"
          className="w-[300px] md:w-[400px] object-contain"
        />
      </motion.div>

      {/* Right Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#333] mb-4 leading-tight">
          Love What You Taste?{' '}
          <span className="text-green-700">Subscribe</span>{' '}
          <span className="text-black font-bold">& Save!</span>
        </h2>
        <p className="text-lg text-gray-800 mb-6">
          Get your favorite fresh A2 milk delivered weekly or monthly—with up to <strong>20%</strong> off. Flexible, reliable, and always fresh.
        </p>
        <button className="bg-green-700 hover:bg-green-800 transition duration-300 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md">
          Explore Plans
        </button>
      </motion.div>
    </div>
  );
};

export default SubscribeBanner;
