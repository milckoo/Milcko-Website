import React from 'react';

// For the illustration, I've created a single image that matches your design.
// In a real project, you would place this image in your public or assets folder.
import image from '../assets/images/image.png'; // Ensure this path is correct

function ComingSoonBanner() {
  return (
    <div className="bg-gradient-to-r from-[#FEF0D5] font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* --- Left Section: Illustration --- */}
        <div className="lg:w-1/2 flex justify-center">
          <img 
            src={image} 
            alt="Milko delivery scooter in a city, expanding service" 
            className="max-w-full h-auto"
          />
        </div>

        {/* --- Right Section: Text Content --- */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-4">
            Coming to Your City <span className="text-amber-800">Soon!</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're working hard to bring Milko to more cities across India. 
            Stay tuned for updates and be among the first to experience 
            fresh, farm-to-doorstep deliveries in your area.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
            Get Updates
          </button>
        </div>

      </div>
    </div>
  );
}

export default ComingSoonBanner;