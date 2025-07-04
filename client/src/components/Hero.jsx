import React from 'react';
import bgImage from '../assets/images/herobg.png';


const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="z-10 text-center pt-40">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">Pure. Fresh.</h1>
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Straight from the Farm to your <span className="text-yellow-400">Doorstep!</span>
        </h2>
         <div className="flex justify-center mt-6 gap-4 flex-wrap">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
               alt="Google Play" className="h-12 cursor-pointer" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
               alt="App Store" className="h-12 cursor-pointer" />
        </div>
       
      </div>
    </div>
  );
};

export default Hero;



 