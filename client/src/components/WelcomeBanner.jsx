import React from "react";
import welcomeImg from "../assets/images/futureimage.png"; // Update path if needed

const WelcomeBanner = () => {
  return (
    <section className="bg-[#fff0d9] px-6 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left: Image */}
        <div className="w-full lg:w-1/3">
          <img
            src={welcomeImg}
            alt="Welcome to Milcko"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Shape the <span className="text-yellow-500">Future</span> with Us.
          </h2>
          <p className="text-gray-800 text-lg mb-6 max-w-xl">
            Be part of a purpose-driven team that's transforming how the world
            experiences dairy—fresh, fair, and future-ready.
          </p>
          <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full font-semibold transition">
            Start Your Journey
          </button>
        </div>

      </div>
    </section>
  );
};

export default WelcomeBanner;
