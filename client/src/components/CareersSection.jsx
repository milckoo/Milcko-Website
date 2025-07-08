import React from "react";
import { motion } from "framer-motion";
import careersImage from "../assets/images/careers.png";
import waveImage from "../assets/images/wave.png";
import PurposeCards from "./PurposeCards"; 
import RoleCarousel from "../pages/RoleCarousel";
import LifeAtMilcko from "./LifeAtMilcko";
import WelcomeBanner from "./WelcomeBanner";
import Footer from '../components/Footer';

const CareersSection = () => {
  return (
    <>
     
      <section className="relative mt-18  bg-[#f9c978] overflow-hidden">
     
        <img
          src={waveImage}
          alt="Top Wave"
          className="absolute  top-0 left-0 w-full z-0"
        />

      
      <div className="relative z-10  mx-auto max-w-7xl   px-0 py-30 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
        
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%]  flex justify-center"
          >
            <img
              src={careersImage}
              alt="Milcko Careers"
              className="w-full rounded-2xl max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left max-w-xl"
          >
            <h2 className="text-4xl sm:text-4xl font-extrabold text-black leading-tight mb-6">
              Work That <span className="text-green-700">Nourishes</span> Lives.
            </h2>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium mb-6">
              We’re not just delivering milk — we’re delivering fairness,
              sustainability, and change. <br />
              Join a purpose-led team working at the intersection of tech,
              farms, and people.
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-800 text-white text-sm sm:text-base px-6 py-3 rounded-full shadow-lg hover:bg-green-900 transition-all duration-300"
            >
              View Open Roles
            </motion.button>
          </motion.div>
        </div>

     
        <img
          src={waveImage}
          alt="Bottom Wave"
          className="absolute bottom-0 left-0 w-full z-0 rotate-180"
        />
      </section>

      
      <div className="bg-[#fff9ef] py-0 px-0">
        <PurposeCards />
        <RoleCarousel />
        <LifeAtMilcko/>
        <WelcomeBanner/>
        <Footer/>
      </div>
    </>
  );
};

export default CareersSection;
