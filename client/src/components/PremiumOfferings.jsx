// src/components/PremiumOfferings.jsx

import React from 'react';
import { motion } from 'framer-motion';
import bottle from '../assets/images/milkbottles.png'; // 🥛 Replace with actual image

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const PremiumOfferings = () => {
  return (
    <div className="bg-[#fefcf8] py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          className="text-4xl sm:text-5xl font-bold mb-4"
        >
          Our <span className="text-green-600">Premium</span> Dairy Offerings!
        </motion.h2>

        <motion.p
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          custom={1}
          className="text-gray-700 text-lg mb-10"
        >
          From A2 milk to traditional dairy favorites—delivered fresh, fast, and free of compromise.
        </motion.p>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Features */}
          <div className="flex flex-col gap-6">
            {[
              "🥛 Our A2 Cow Milk is naturally rich in essential nutrients like calcium and protein, promoting better digestion and overall health. It’s free from additives, ensuring you get pure, fresh milk straight from the farm.",
              "🎁 Not sure which milk to try? Our Trial Packs offer a convenient way to experience both A2 Cow and A2 Buffalo Milk. Taste the difference and choose the one that suits your needs, without any commitment.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md max-w-sm"
                initial="hidden"
                whileInView="show"
                variants={fadeIn}
                custom={i + 2}
              >
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Center Bottle Image */}
          <motion.div
            className="flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <img
              src={bottle}
              alt="Milk Bottles"
              className="w-[250px] sm:w-[350px] object-contain"
            />
          </motion.div>

          {/* Right Features */}
          <div className="flex flex-col gap-6">
            {[
              "🧈 A2 Buffalo Milk is known for its creamy texture & higher fat content, providing a delicious taste. Perfect for a rich dairy experience without any preservatives.",
              "🚚 We deliver milk within an hour of milking, preserving its natural taste and nutritional value. Enjoy the convenience of doorstep delivery and unmatched farm-fresh quality.",
            ].map((text, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 shadow-md max-w-sm"
                initial="hidden"
                whileInView="show"
                variants={fadeIn}
                custom={i + 4}
              >
                <p className="text-gray-600">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-10"
          initial="hidden"
          whileInView="show"
          variants={fadeIn}
          custom={6}
        >
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:scale-105">
            Exciting New Arrivals!
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumOfferings;
