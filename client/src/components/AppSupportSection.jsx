import React from 'react';
import fairPayImg from '../assets/images/cards.png'; 
const AppSupportSection = () => {
  return (
    <section className="py-16 px-12 sm:px-12 ">
      <div className="text-center max-w-6xl mx-auto mb-12">
        <h2 className="text-5xl font-bold text-gray-800">
          One <span className="text-green-600">App</span>. Endless <span className="text-orange-500">Support</span>.
        </h2>
        <p className="mt-4 text-gray-900 font-semibold text-lg">
          Our app helps you track milk, receive direct payments, and manage your dairy journey — all from your phone, with ease.
        </p>
      </div>

      {/* ✅ Image Display */}
      <div className="flex  justify-center">
        <img
          src={fairPayImg}
          alt="App Support"
          className="w-full max-w-7xl "
        />
      </div>
    </section>
  );
};

export default AppSupportSection;
