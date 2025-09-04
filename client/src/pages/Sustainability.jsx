import React from "react";
import sustainabilityImage from "../assets/images/sustainability.png";
import PromiseTop from "../components/PromiseTop"; 
import JourneySection from '../components/JourneySection';
import ImpactSection from '../components/ImpactSection';
import JoinGreenMovement from "../components/JoinGreenMovement";
import Footer from '../components/Footer';

const SustainabilitySection = () => {
  return (
    <>
      {/* Sustainability Banner Section */}
      <section
        className="relative w-full h-250 bg-[#FFFBF3]  mt-18 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${sustainabilityImage})`,
        }}
      >
        <div className="absolute inset-0  bg-black/35 bg-opacity-50 z-0" />
        <div className="relative z-10 max-w-4xl text-center px-4 text-white">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
            <span className="text-orange-400">Sustainability</span> is Not a Choice.<br />
            It’s Our Way of Life.
          </h2>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl mb-8">
            At Milcko, sustainability is at the heart of everything we do — from the care of our cows to eco-friendly packaging.
            Every step of our process is designed to protect the planet. By choosing Milcko, you're supporting a greener future,
            one drop at a time.
          </p>
          <div className="flex justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition">
              ↓
            </button>
          </div>
        </div>
      </section>

    
      <PromiseTop />
      <JourneySection />
      <ImpactSection />
       <JoinGreenMovement />
       <Footer/>
    </>
  );
};

export default SustainabilitySection;
