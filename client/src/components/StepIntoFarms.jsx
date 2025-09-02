import React from 'react';

import pic5 from '../assets/images/pic5.png'; // Ensure this path is correct
function StepIntoFarms() {
  return (
    // Section with a subtle gradient background matching the design
    <section className="bg-gradient-to-b from-stone-50 to-amber-100 font-sans py-16 sm:py-20">
      <div className=" ">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          
          {/* --- Left Section: Illustration --- */}
          <div className=" flex mr-50">
            <img 
              src={pic5} 
              alt="Man wearing a Milko shirt standing with a brown cow" 
              className="w-full  h-auto" 
            />
          </div>

          {/* --- Right Section: Text Content & Button --- */}
          <div className="lg:w-3/5 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 tracking-tight">
              Step Into Our <span className="text-green-800">Farms.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
              Walk through our fields where happy cows graze freely, 
              and farmers nurture every drop with care and honesty.
            </p>
            <div className="mt-8">
              <button className="bg-amber-500 hover:bg-amber-600 text-neutral-800 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
                Meet The Team
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default StepIntoFarms;