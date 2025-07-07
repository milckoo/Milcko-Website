import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutTimeline from '../components/AboutTimeline';
import PremiumOfferings from "../components/PremiumOfferings";
import FreshnessTimeline from '../components/FreshnessTimeline';
import SubscribeSave from '../components/SubscribeSave';

import bgImage from '../assets/images/milckoway.png'; 
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#fefcf8] min-h-screen flex flex-col justify-between">
      {/* Hero Section with Background Image */}
      <div
        className="w-full bg-cover bg-center min-h-[110vh] flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 " />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          
          <motion.button
            whileHover={{ scale: 1.00 }}
            whileTap={{ scale: 1.00 }}
            onClick={() => navigate('/trial-pack')}
            className="bg-yellow-400 hover:bg-yellow-500 mt-175  text-black font-semibold px-15 py-4 rounded-full shadow-md transition"
          >
            Claim Your Trial Pack
          </motion.button>
        </motion.div>
      </div>
       <AboutTimeline />
        <PremiumOfferings />
        <FreshnessTimeline />
        
<SubscribeSave />

<Footer /> 
      
    </div>
  );
};

export default AboutUs;
