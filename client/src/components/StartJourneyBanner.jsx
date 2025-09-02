import React from 'react';

import pic11 from '../assets/images/pic11.png';
function StartJourneyBanner() {
  return (
    <section className="bg-[#F5F3EF] font-sans py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* --- Left Section: Illustration --- */}
          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <img 
              src={pic11} 
              alt="Milk delivery person handing milk to a happy family" 
              className="w-full max-w-sm lg:max-w-md h-auto" 
            />
          </div>

          {/* --- Right Section: Text Content & Buttons --- */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 tracking-tight mb-4">
              Start Your Fresh Journey <span className="text-green-800">Today!</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0 mb-8">
              Join thousands of happy families enjoying pure farm-fresh milk, 
              delivered straight to their doorstep every day.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
                Subscribe Now
              </button>
              <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300">
                Try a Trial Pack
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StartJourneyBanner;