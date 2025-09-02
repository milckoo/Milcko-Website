import React from 'react';
import image24 from '../assets/images/image24.png';


function NewsletterSignup() {
  return (
<section className="font-sans bg-gradient-to-r from-[#FEE2A9] via-[#FEE1A3] via-[#FEE2A6] via-[#FEDD9E] to-[#FEE4B2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">

          {/* --- Left Section: Illustration --- */}
          <div className="lg:w-2/3 flex justify-center lg:justify-end">
            <img
              src={image24}
              alt="A mailbox with blog, notification, and milk icons floating out"
              className="w-full max-w-xl h-auto"
            />
          </div>

          {/* --- Right Section: Text Content & Button --- */}
          <div className="lg:w-2/3 text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-800 tracking-tight">
              Never Miss a Sip of <span className="text-amber-600">Knowledge.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
              Get the latest milk facts, blogs, and tips delivered straight to your inbox. 
              Stay informed, inspired, and connected to your daily dose of freshness.
            </p>
            <div className="mt-8">
              <button className="bg-green-800 hover:bg-green-900 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-300 transform hover:scale-105">
                Subscribe Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default NewsletterSignup;