import React from "react";

const ReturnBottleSteps = () => {
  return (
    <section className="bg-white py-16 px-10 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
          Returning Your Bottle is <span className="text-[#E99600]">Easy!</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Follow these simple steps to return your empty bottle. Each return
          keeps your doorstep clutter-free and supports a greener planet.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-20">
          {/* Step 1 */}
          <div className="bg-[#EFEFDC] rounded-2xl p-6 shadow-md flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#416246] text-white font-bold flex items-center justify-center text-xl mb-4">
              1
            </div>
            <div className="rounded-xl overflow-hidden mb-4">
              <img
                src="/src/assets/images/rinse.png"
                alt="Two people discussing privacy"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#EFEFDC] rounded-2xl p-6 shadow-md flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#416246] text-white font-bold flex items-center justify-center text-xl mb-4">
              2
            </div>
             <div className="rounded-xl overflow-hidden mb-4">
              <img
                src="/src/assets/images/doorstep.png"
                alt="Two people discussing privacy"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </div>
           
          </div>

          {/* Step 3 */}
          <div className="bg-[#EFEFDC] rounded-2xl p-6 shadow-md flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-[#416246] text-white font-bold flex items-center justify-center text-xl mb-4">
              3
            </div>
             <div className="rounded-xl overflow-hidden mb-4">
              <img
                src="/src/assets/images/ridercollectes.png"
                alt="Two people discussing privacy"
                className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReturnBottleSteps;
