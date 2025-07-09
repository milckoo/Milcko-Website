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
      
      <div
        className="w-full bg-cover bg-center min-h-[110vh] flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
       
        <div className="absolute inset-0 " />

  
          

  
             <div  className="bg-yellow-400 hover:bg-yellow-500 mt-175  text-black font-semibold px-15 py-4 rounded-full shadow-md transition">  Claim Your Trial Pack</div>

          
         
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
