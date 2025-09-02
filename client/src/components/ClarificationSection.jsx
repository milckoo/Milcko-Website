import React from "react";

const ClarificationSection = () => (
  <section className=" mx-auto px-4 sm:px-6  py-10 my-12 bg-white rounded-3xl shadow-md">
    <div
      className="flex flex-col md:flex-row items-center md:items-stretch gap-10 
      bg-gradient-to-b from-[#FEEFD4] via-[#FDEED3] via-[#E2D9A6] via-[#C2C48A] to-[#9CB179] 
      rounded-2xl p-6 md:p-10"
    >
      {/* Left Content Section */}
      <div className="flex-1 text-center md:text-left flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Need <span className="text-green-700">Clarification?</span> We’re Here
          for You.
        </h2>
        <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
          Our team can guide you through any part of our Terms & Conditions to
          ensure full understanding before you use our services.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
          <button className="px-6 sm:px-10 lg:px-14 py-3 rounded-full bg-green-900 text-white font-semibold hover:bg-green-800 transition">
            Contact Support
          </button>
          <button className="px-6 sm:px-10 lg:px-14 py-3 rounded-full bg-yellow-500 text-black font-semibold hover:bg-yellow-600 transition">
            Read Privacy Policy
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center items-end">
        <img
          src="/src/assets/images/termssectionphoto.png"
          alt="Clarification Illustration"
          className="w-64 sm:w-80 md:w-[26rem] lg:w-[30rem] xl:w-[34rem] object-contain"
        />
      </div>
    </div>
  </section>
);

export default ClarificationSection;
