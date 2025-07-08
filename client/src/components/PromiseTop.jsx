import React from 'react';
import promiseIcon from '../assets/images/promisecards.png'; // Card image
import sectionBg from '../assets/images/promisebg.png'; // 🌄 Background image for full section

const PromiseTop = () => {
  return (
    <section
      className="w-full bg-cover bg-black/45  bg-center bg-no-repeat py-14 px-6 sm:px-12"
      style={{
        backgroundImage: `url(${sectionBg})`,
      }}
    >
      <div className="max-w-9xl mx-auto text-center text-white">
     
        <h2 className="text-3xl md:text-5xl font-bold leading-snug">
          Our <span className="text-orange-400">Promise</span> to <span className="text-green-400">Nature.</span>
        </h2>

      
        <p className="mt-6 text-base text-black font-semibold sm:text-lg md:text-xl whitespace-nowrap text-center">
  At Milcko, sustainability isn’t a trend — it’s the soul of everything we do. From farm to doorstep, we nurture nature with every step.
</p>

      </div>

      {/* Single Big Card */}
      <div
        className="mt-12 rounded-2xl overflow-hidden shadow-2xl w-full max-w-6xl mx-auto h-[400px] bg-cover bg-center relative flex items-center justify-center"
        style={{
          backgroundImage: `url(${promiseIcon})`,
        }}
      >
        {/* Optional Overlay (for darker shade over card) */}
        <div className="absolute inset-0  bg-opacity-80" />

      </div>
    </section>
  );
};

export default PromiseTop;
