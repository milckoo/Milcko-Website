import React from 'react';
import image5 from '../assets/images/image5.png'; // Ensure this path is correct

// For the illustration, I've created an image that matches your design.
// In a real project, you should download this and place it in your public or assets folder.
const handsHoldingMilkUrl = 'https://i.imgur.com/uR2e4GD.png'; 

function JoinTheStoryBanner() {
  return (
    // The background color is a light minty green, approximated from your image
    <div className="bg-[#E8F9DE] font-sans py-16 px-4 mt-5 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
        
        {/* --- Left Section: Illustration --- */}
        <div className="lg:w-2/5 flex justify-center">
          <img 
            src={image5} 
            alt="Hands holding a bottle of Milko milk" 
            className="w-full max-w-xs lg:max-w-sm h-auto"
          />
        </div>

        {/* --- Right Section: Text Content & Buttons --- */}
        <div className="lg:w-3/5 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 mb-4">
            <span className="text-green-800">Be Part</span> of the Story.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
            Your choice of milk goes beyond the glass — it supports farmers, 
            ensures happier cows, and promotes a planet-friendly way of living.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
              Join the Movement
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
              Taste the Goodness
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default JoinTheStoryBanner;