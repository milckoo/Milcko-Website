import React from "react";

const ReturnBottle = () => {
  return (
    <section className="bg-white py-12 ">
     
      {/* New Section: Remember These Guidelines */}
      <div className="mt-16 max-w-8xl mx-auto bg-[#F6F4EB] rounded-2xl p-8 shadow-md">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-tight">
            Remember These <span className="text-[#416246]">Guidelines.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Returning your bottles correctly helps avoid extra fees and ensures the sustainability system works smoothly. Handle bottles with care to maintain hygiene and prevent damages.
          </p>
        </div>

        <div className="mt-8 text-left space-y-6">
          <h3 className="text-xl font-bold text-[#F1AB49] flex items-center gap-2">
            <span className="text-2xl">⚠️</span> Instructions:
          </h3>
          <ol className="list-none space-y-4 text-gray-700">
            <li>
              <h4 className="font-semibold text-gray-900">1. Return on Time:</h4>
              <p className="mt-1">Please place empty bottles outside your doorstep before your next delivery. Delayed returns may attract a replacement fee as we need bottles back for circulation.</p>
            </li>
            <li>
              <h4 className="font-semibold text-gray-900">2. Avoid Damages:</h4>
              <p className="mt-1">Handle bottles carefully. Broken, cracked, or missing bottles affect hygiene and sustainability, and may lead to additional charges.</p>
            </li>
            <li>
              <h4 className="font-semibold text-gray-900">3. Cap On:</h4>
              <p className="mt-1">Always return bottles with their caps on. This helps maintain cleanliness, ensures safe reuse, and keeps your next delivery hassle-free.</p>
            </li>
            <li>
              <h4 className="font-semibold text-gray-900">4. Keep it Clean:</h4>
              <p className="mt-1">A quick rinse before returning goes a long way in ensuring freshness and hygiene for the next use.</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default ReturnBottle;
