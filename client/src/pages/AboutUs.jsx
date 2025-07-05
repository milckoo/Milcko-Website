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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl"
        >
          <h1 className="text-4xl pt-90 md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-800 mb-6 font-medium leading-relaxed">
            We're not just another dairy brand. At <span className="font-semibold">MILCKO</span>, we deliver fresh A2 Cow and Buffalo milk within an hour of milking — 
            directly from our farms to your doorstep. Our milk comes bottled in eco-friendly glass, never plastic, and without 
            a single additive. It’s a promise of purity, speed, and sustainability.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/trial-pack')}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full shadow-md transition"
          >
            Claim Your Trial Pack
          </motion.button>
        </motion.div>
      </div>
       <AboutTimeline />
        <PremiumOfferings />
        <FreshnessTimeline />
        
<SubscribeSave />

<div className=' mt-20'><Footer /> </div>
      
    </div>
  );
};

export default AboutUs;
