import React from "react";
import { motion } from "framer-motion";
import careersImage from "../assets/images/careers.png";
import PurposeCards from "../components/PurposeCards";
import RoleCarousel from "../components/RoleCarousel";
import LifeAtMilcko from "../components/LifeAtMilcko";
import WelcomeBanner from "../components/WelcomeBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import topwave from "../assets/images/topwave.png";
import bottomw from "../assets/images/bottomw.png";

const CareersSection = () => {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-30 bg-[#FFFBF3] overflow-hidden">
        {/* Top wave */}
        <img
          src={topwave}
          alt="Top Wave"
          className="absolute top-0 left-0 w-full h-32 object-cover z-0"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] flex justify-center"
          >
            <img
              src={careersImage}
              alt="Milcko Careers"
              className="w-full rounded-2xl max-w-md sm:max-w-lg lg:max-w-xl h-auto object-contain"
            />
          </motion.div>

          {/* Right: Text */}
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
              We're not just delivering milk — we're delivering fairness,
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

        {/* Bottom wave */}
        <img
          src={bottomw}
          alt="Bottom Wave"
          className="absolute bottom-0 left-0 w-full z-0"
        />
      </section>

      {/* Sub-sections */}
      <div className="bg-[#fff9ef]">
        <PurposeCards />
        <RoleCarousel />
        <LifeAtMilcko />
        <WelcomeBanner />
        <Footer />
      </div>
    </>
  );
};

export default CareersSection;
