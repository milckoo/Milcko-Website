import React from "react";
import pic5 from "../assets/images/pic5.png"; // Ensure this path is correct

function StepIntoFarms() {
  return (
    <section className="bg-gradient-to-b from-stone-50 to-amber-100 font-sans py-12 sm:py-0">
      <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between max-w-7xl mx-auto px-6 lg:px-12">
        {/* --- Left Section: Illustration --- */}
        <div className="flex justify-start -ml-43  items-end sm:py-0 lg:w-1/2">
          <img
            src={pic5}
            alt="Man wearing a Milko shirt standing with a brown cow"
            className="w-full max-w-lg lg:max-w-xl object-contain"
          />
        </div>

        {/* --- Right Section: Text Content & Button --- */}
        <div className="lg:w-1/2 text-center lg:text-left mb-25 lg:pl-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-800 tracking-tight">
            Step Into Our <span className="text-green-800">Farms.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 max-w-lg mx-auto lg:mx-0">
            Walk through our fields where happy cows graze freely, and farmers
            nurture every drop with care and honesty.
          </p>
          <div className="mt-8">
            <button className="bg-amber-500 hover:bg-amber-600 text-neutral-800 font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
              Meet The Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepIntoFarms;
