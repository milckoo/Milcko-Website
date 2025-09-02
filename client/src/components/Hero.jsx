import React from "react";
import { motion } from "framer-motion";
import videoFile from "../assets/herosection.mp4";
import milkDrop from "../assets/images/milkdrop.png";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoFile}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* 🖤 Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>

      {/* ✨ Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12"
      >
        {/* 📝 Heading */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 sm:mb-6 drop-shadow-md flex flex-wrap items-center justify-center gap-2 xs:gap-3">
          Pure
          <img
            src={milkDrop}
            alt="Milk Drop"
            className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 inline-block"
          />
          Fresh
          <img
            src={milkDrop}
            alt="Milk Drop"
            className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 inline-block"
          />
          Milk
        </h1>

        {/* 📝 Sub Heading */}
        <h2 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white drop-shadow-md max-w-xs xs:max-w-sm sm:max-w-xl md:max-w-2xl leading-tight sm:leading-snug mt-2 sm:mt-4">
          Straight from the Farm to your{" "}
          <span className="text-yellow-400 font-bold">Doorstep!</span>
        </h2>

        {/* 📲 Store Buttons */}
        <div className="flex flex-wrap justify-center gap-3 xs:gap-4 sm:gap-5 mt-6 sm:mt-8 md:mt-10">
          <motion.img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-18 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-10 xs:h-12 sm:h-14 md:h-16 lg:h-18 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;