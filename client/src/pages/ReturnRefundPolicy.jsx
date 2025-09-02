import React from "react";

import ReturnBottleSteps from "../components/ReturnBottleSteps";
import ReturnBottle from "../components/ReturnBottle";
import SipReturnRepeatSection from "../components/SipReturnRepeatSection";
import Footer from "../components/Footer";
import Navbar from '../components/Navbar';

const ReturnRefundPolicy = () => {
  return (
    <>
    <section className=" bg-[#F6F4EB]  pt-45 py-16  px-4 md:px-8">
      <Navbar />
      <div className="max-w-7xl mx-auto flex bg-[#F6F4EB]  flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Section for Text Content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#384C1C] leading-tight">
            From Your Doorstep,
            <br />
            Back to <span className="text-[#ffae00]">Us.</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
            At Milcko, we care for the planet as much as your health. That's why we follow a returnable
            glass bottle system – designed to keep your milk pure, your doorstep clutter-free, and our
            Earth plastic-free.
          </p>
          <button className="mt-6 px-8 py-3 rounded-full bg-[#416246] text-white font-bold hover:bg-[#324f36] transition-colors duration-300">
            Return Your Bottle
          </button>
        </div>

        {/* Right Section for Image Placeholder */}
       <div className="flex-1 flex justify-center items-end">
  <img
    src="/src/assets/images/scooter.png"
    alt="Milcko delivery scooter"
    className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
  />
</div>

      </div>
      
    </section>
    <ReturnBottleSteps/>
    < ReturnBottle/>
    <SipReturnRepeatSection/>
    <Footer/>
    </>
  );
};

export default ReturnRefundPolicy;
