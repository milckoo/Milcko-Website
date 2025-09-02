import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import AboutTimeline from '../components/AboutTimeline';
import PremiumOfferings from "../components/PremiumOfferings";
import FreshnessTimeline from '../components/FreshnessTimeline';
import SubscribeSave from '../components/SubscribeSave';

import bgImage from '../assets/images/milckoway.png'; 
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fefcf8] min-h-screen flex flex-col justify-between">
      <Navbar />
      
      {/* Hero Section */}
      <div
        className="w-full bg-cover bg-center min-h-[100vh] md:min-h-[110vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-12 relative"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0" />

        <Link to="/trial-pack" className="z-10 mb-5">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 md:mt-20 lg:mt-175 text-black font-semibold 
           px-6 sm:px-8 md:px-12 lg:px-16 py-4 rounded-full shadow-md 
           text-sm sm:text-base md:text-lg lg:text-xl transition cursor-pointer"

          >
            Claim Your Trial Pack
          </motion.div>
        </Link>
      </div>
      
      {/* Sections */}
      <div className="w-full ">
        <AboutTimeline />
        <PremiumOfferings />
        <FreshnessTimeline />
        <SubscribeSave />
      </div>

      <Footer /> 
    </div>
  );
};

export default AboutUs;
