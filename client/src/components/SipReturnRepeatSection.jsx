import React from "react";
import buntybhiya from "../assets/images/buntybhiya.png";
const SipReturnRepeatSection = () => {
  return (
    <section className="bg-[#EFEFDC] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section for Image */}
        <div className="flex-1 flex justify-center lg:justify-start">
          <img src={buntybhiya} alt="auntybhiya" />
        </div>

        {/* Right Section for Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
            Sip. <span className="text-[#F1AB49]">Return.</span> Repeat.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Every bottle you return keeps the cycle alive — ensuring farm-fresh
            milk reaches you sustainably, reducing waste, supporting our
            farmers, and protecting the planet.
          </p>
          <button className="mt-6 px-8 py-3 rounded-full bg-[#416246] text-white font-bold hover:bg-[#324f36] transition-colors duration-300">
            Schedule My Bottle Return
          </button>
        </div>
      </div>
    </section>
  );
};


export default SipReturnRepeatSection;
