import React from 'react';
import image7 from '../assets/images/image7.png'; // Ensure this path is correct

// For the illustration, I've created a single image that matches your design.
// In a real project, you would place this image in your public or assets folder.


function RequestMilkoBanner() {
  return (
    <div className="bg-[#F5F3EF] font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* --- Left Section: Text Content --- */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-4">
            Want Milko in <span className="text-amber-800">Your</span> Area?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Tell us where you'd like to see Milko next – your feedback 
            helps us grow and serve better. We're excited to bring 
            freshness closer to you!
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Request Delivery In My City
          </button>
        </div>

        {/* --- Right Section: Illustration --- */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={image7} 
            alt="Person requesting delivery on a computer with location pins" 
            className="max-w-full h-auto"
          />
        </div>
    

      </div>
      
    </div>
    
  );
}

export default RequestMilkoBanner;