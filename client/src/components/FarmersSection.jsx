import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import farmerImg from '../assets/images/farmers.png'; // ✅ Make sure path is correct

const FarmersSection = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const isTextInView = useInView(textRef, { once: false });
  const isImageInView = useInView(imageRef, { once: false });

  return (
    <div className="w-full bg-white py-20 px-6 pt-50 sm:px-10 md:px-20 lg:px-32 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* Left: Text Content */}
        <motion.div
          ref={textRef}
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={isTextInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
            The <span className="text-yellow-500">Hands</span> That Nurture!
          </h2>
          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            Meet the faces behind the purity! Our farmers are committed to ethical and 
            sustainable dairy farming, ensuring that every glass of milk is as fresh as nature intended.
          </p>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          ref={imageRef}
          className="relative w-full max-w-[600px] xl:max-w-[600px] scale-110"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isImageInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={farmerImg}
            alt="Milcko Farmers"
            className="relative z-10 w-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default FarmersSection;
