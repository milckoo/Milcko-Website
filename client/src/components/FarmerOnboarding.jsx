import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// Image imports
import splashImg from '../assets/images/yellowSplash.png'; // ✅ Your splash image
import img1 from '../assets/images/step1.png';
import img2 from '../assets/images/step2.png';
import img3 from '../assets/images/step3.png';
import img4 from '../assets/images/step4.png';
import img5 from '../assets/images/step5.png';
import img6 from '../assets/images/step6.png';
import img7 from '../assets/images/step7.png';
import img8 from '../assets/images/step8.png';
import img9 from '../assets/images/step9.png';
import img10 from '../assets/images/step10.png';
import img11 from '../assets/images/step11.png';

const screenImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const FarmerOnboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % screenImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + screenImages.length) % screenImages.length);
  };

  return (
    <section className=" min-h-screen py-24 px-6 sm:px-12">
      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-16">
        Farmer <span className="text-green-600">Onboarding</span> Made <span className="text-orange-500">Easy.</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        {/* Left Section */}
        <div className="md:w-1/2 flex flex-col items-center relative">
          {/* Yellow Splash Positioned Behind Phone */}
          <img
            src={splashImg}
            alt="Yellow Splash"
            className="absolute sm:bottom-[-120px] z-0 w-[300px] sm:w-[360px] md:w-[800px] rotate-[-35deg] "
          />

          {/* Phone Image Carousel */}
          <div className="w-full flex justify-center items-center min-h-[500px] sm:min-h-[600px] relative z-10">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={screenImages[currentIndex]}
                alt={`step-${currentIndex + 1}`}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-auto h-[500px] sm:h-[600px] object-contain z-10"
              />
            </AnimatePresence>

            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow hover:bg-gray-200"
            >
              <ChevronRightIcon className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>

        {/* Right Steps */}
        <div className="md:w-1/2">
          <ul className="list-none  font-semibold space-y-5">
            {[
              "Download the Milcko app from the Play Store or App Store.",
              "Select your preferred language from the available options.",
              "Choose your role as either a Farmer or a Supplier.",
              "Enter your mobile number and verify it using the OTP.",
              "Fill in your personal details including name, DOB, address, email, and contact number.",
              "Enter your Aadhaar number and upload clear photos of front and back.",
              "Take a live selfie for identity verification.",
              "Select delivery location by entering or choosing on the map.",
              "Provide vehicle details (number, owner name, license, RC) & upload RC.",
              "Submit registration. Our team will verify and do a milk quality check.",
              "Once approved, you can start delivering with Milcko."
            ].map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="w-7 h-7 mt-1 flex items-center justify-center bg-green-600 text-white rounded-full text-sm font-semibold mr-4">
                  {index + 1}
                </span>
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed">{step}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FarmerOnboarding;
