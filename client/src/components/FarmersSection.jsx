import React from 'react';
import farmerImg from '../assets/images/farmers.png'; // your actual image path


const FarmersSection = () => {
  return (
    <div className="w-full bg-white py-16 px-6 sm:px-10 md:px-16 lg:px-28">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="max-w-xl text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            The <span className="text-yellow-500">Hands</span> That Nurture!
          </h2>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            Meet the faces behind the purity! Our farmers are committed to ethical and 
            sustainable dairy farming, ensuring that every glass of milk is as fresh as nature intended.
          </p>
        </div>

        {/* Right Image + Badge */}
        <div className="relative w-full max-w-md">
          {/* Background Circle */}
          <div className="absolute inset-0 rounded-full bg-yellow-400 scale-110 z-0"></div>

          {/* Farmers Image */}
          <img
            src={farmerImg}
            alt="Milcko Farmers"
            className="relative z-10 w-full object-contain"
          />

          {/* Badge */}
          <div className="absolute bottom-4 left-4 bg-green-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-lg z-20">
            Supporting <br /> Local Farmers
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmersSection;
