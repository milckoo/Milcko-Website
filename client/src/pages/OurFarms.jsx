import React from 'react';
import farmBackgroundImageUrl from '../assets/images/image8.png';
import FarmsCommitment from '../components/FarmsCommitment';
import StepIntoFarms from '../components/StepIntoFarms';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function OurFarms() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen font-sans text-white">
        <div className='mb-15'>   <Navbar/></div>
        {/* Background Image */}
        <img
          src={farmBackgroundImageUrl}
          alt="Farm background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Content Container */}
        <div className="relative h-full flex flex-col justify-center max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Main Heading */}
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Healthy Cows, Happy <span className="text-amber-400">Farms.</span>
            </h1>

            {/* Description Paragraph */}
            <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed">
              Every cow on our farms receives personalized care – from balanced nutrition and regular
              health check-ups to ample grazing in open, clean pastures – ensuring they stay healthy,
              comfortable, and content.
            </p>

            {/* Scroll Down Button */}
            <div className="mt-12">
              <button
                className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center text-white hover:bg-amber-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll down"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Farms Commitment Section */}
      <FarmsCommitment />
      <StepIntoFarms/>
      <Footer/>
    </>
  );
}

export default OurFarms;
