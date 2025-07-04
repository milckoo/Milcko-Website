import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bottleImg from '../assets/images/Splash.png'; // make sure this path is correct
import {
  FaHandsHelping,
  FaShieldAlt,
  FaTint,
  FaBone,
  FaAppleAlt,
  FaRecycle,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const features = [
  { icon: <FaRecycle />, text: "Farm-Fresh Milk, Delivered Daily" },
  { icon: <FaHandsHelping />, text: "Supporting Local Farmers with Fair Trade" },
  { icon: <FaShieldAlt />, text: "Hygienic & Safe Processing Standards" },
  { icon: <FaTint />, text: "100% Pure & Preservative-Free" },
  { icon: <FaAppleAlt />, text: "Easily Digestible with Natural A2 Goodness" },
  { icon: <FaBone />, text: "Rich in Calcium & Essential Nutrients" },
  { icon: <FaMapMarkerAlt />, text: "Boosts Immunity & Strengthens Bones" },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <div className="w-full bg-white  sm:px-10 md:px-16 lg:px-28">
      <div
        ref={sectionRef}
        className="flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        {/* Left: Bottle Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full lg:max-w-[600px] xl:max-w-[650px] scale-110"
        >
          <img
            src={bottleImg}
            alt="Milk Bottle"
            className="w-full object-contain"
          />
        </motion.div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Why Choose <span className="text-yellow-500">MILCKO</span>?
          </h2>

          <ul className="space-y-4 text-gray-700 text-base sm:text-lg">
            {features.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-xl">{item.icon}</span>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full shadow-lg text-base sm:text-lg font-semibold tracking-wide transition-all duration-300 transform hover:scale-105">
            📲 Download Our App
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
