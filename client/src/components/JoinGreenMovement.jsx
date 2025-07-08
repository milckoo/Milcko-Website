import React from "react";
import { motion } from "framer-motion";
import reuseImage from "../assets/images/returnuse.png"; 

const JoinGreenMovement = () => {
  return (
    <section className="bg-[#f9c978] px-4 py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
        
       
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-shrink-0"
        >
          <div className="w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] rounded-full overflow-hidden border-8 border-[#c07a2b] shadow-lg">
            <img
              src={reuseImage}
              alt="Return for reuse"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center lg:text-left max-w-2xl"
        >
          <h2 className="text-5xl sm:text-6xl lg:text-5xl font-extrabold text-black leading-tight whitespace-nowrap">
            Join the <span className="text-green-700">Green</span> Movement!
          </h2>

          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-800 font-medium leading-relaxed">
            Every returned bottle tells a story of care.<br />
            Join hands with us to support farmers and nurture a cleaner, greener tomorrow.
          </p>

          <button className="mt-8 bg-green-800 text-white text-lg sm:text-xl px-8 py-4 rounded-full shadow-lg hover:bg-green-900 transition duration-300">
            Become a Green Milcko Member
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinGreenMovement;
