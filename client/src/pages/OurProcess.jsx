import React from 'react';
import processImage from '../assets/images/Steps.png'; 
import ExperienceMilcko from '../components/ExperienceMilcko';
import Footer from '../components/Footer';
const OurProcess = () => {
  return (
    <section className="w-full mt-30 bg-white py-0 px-0 sm:px-0 min-h-screen" id="our-process">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading + Subheading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Crafting Purity: <span className="text-orange-500">Our Process</span>, <span className="text-green-600">Your Trust</span>
        </h2>
        <p className="text-gray-800  font-semibold text-lg sm:text-xl mb-8">
          Follow our journey from nurturing cows to delivering pure happiness at your doorstep.
        </p>

       

     {/* Image Centered */}
<div className="flex justify-center">
  <img
    src={processImage}
    alt="Our Process"
    className="rounded-lg w-full max-w-6xl object-cover" // <-- Increased from max-w-2xl
  />
</div>
      </div>
      <ExperienceMilcko />
      <Footer/>
    </section>
  );
};

export default OurProcess;
