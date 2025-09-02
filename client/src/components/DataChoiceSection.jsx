import React from "react";
// This component is a standalone section and does not require external imports beyond React.

const DataChoiceSection = () => (
  <section className=" ">
    <div className="bg-[#EFEFDC] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10">

      {/* Left Illustration Section with Icons */}
      <div className="flex-1 relative flex justify-center lg:justify-start">
    

        <img
          src="/src/assets/images/datachoice.png"
          alt="Two people discussing privacy"
          className="w-full max-w-sm md:max-w-md lg:max-w-lg object-contain"
        />
      </div>

      {/* Right Content Section */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#535C58] mb-4">
          Your Data, Your <span className="text-[#F1AB49]">Choice.</span>
        </h2>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          We value transparency and give you full control over how your information is used.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="px-1 py-3 rounded-full bg-[#416246] text-white font-bold hover:bg-[#324f36] transition">
            Manage Privacy Settings
          </button>
          <button className="px-2 py-3 rounded-full bg-[#F1AB49] text-black font-bold hover:bg-[#d99f43] transition">
            Contact Support
          </button>
        </div>
      </div>

    </div>
  </section>
);

export default DataChoiceSection;
