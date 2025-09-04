import React from "react";
import pic12 from "../assets/images/pic12.png";
import pic13 from "../assets/images/pic13.png";
import pic14 from "../assets/images/pic14.PNG";

const FreshReadsSection = () => {
  return (
    <section className="bg-[#FEFBF1] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and See More Button */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#384C1C] leading-tight">
              Fresh Reads
            </h2>
            <p className="mt-2 text-lg text-gray-700">
              Explore insights, tips, and stories straight from our farms to your screen.
            </p>
          </div>
          <button className="mt-6 md:mt-0 px-8 py-3 rounded-full bg-[#F1AB49] text-black font-bold hover:bg-[#d99f43] transition-colors duration-300">
            See More
          </button>
        </div>

        {/* Content Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: The Science Behind A2 Milk */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Image Placeholder */}
            <div className="relative w-full h-[550px]">
              {/* Image Placeholder with a dark overlay to match the design */}
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <img
                src={pic12}
                alt="The Science Behind A2 Milk"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Content on top of the image */}
            <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
              <h3 className="text-2xl font-bold mb-2 leading-snug">
                The Science Behind
                <br />
                A2 Milk
              </h3>
              <p className="text-sm">
                Understanding the natural protein difference that makes A2 milk gentler on digestion..
              </p>
              <button className="mt-4 flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>

          {/* Card 2: No Plastic, Just Purpose */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Image Placeholder */}
            <div className="relative w-full h-[550px]">
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <img
                src={pic13}
                alt="No Plastic, Just Purpose"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content on top of the image */}
            <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
              <h3 className="text-2xl font-bold mb-2 leading-snug">
                No Plastic, Just
                <br />
                Purpose
              </h3>
              <p className="text-sm">
                How Milcko’s eco-friendly packaging is reducing waste and protecting our planet..
              </p>
              <button className="mt-4 flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>

          {/* Card 3: The Faces Behind Our Farms */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            {/* Image Placeholder */}
            <div className="relative w-full h-[550px]">
              <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
              <img
                src={pic14}
                alt="The Faces Behind Our Farms"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content on top of the image */}
            <div className="absolute bottom-0 left-0 p-6 z-20 text-white">
              <h3 className="text-2xl font-bold mb-2 leading-snug">
                The Faces Behind Our
                <br />
                Farms
              </h3>
              <p className="text-sm">
                Behind every bottle is a story of hard work, trust, and ethical practices built with care..
              </p>
              <button className="mt-4 flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all duration-300">
                Read More 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FreshReadsSection;
