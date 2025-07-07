import React from 'react';
import freshnessImage from '../assets/icons/Section 4.png'; // 🖼️ Your Section 4 image

const FreshnessTimeline = () => {
  return (
    <div className="w-full py-1 px-4 bg-[#fefcf8] flex justify-center">
      <img
        src={freshnessImage}
        alt="Where Freshness Meets Ethics"
        className="max-w-full h-auto rounded-xl shadow-lg"
      />
    </div>
  );
};

export default FreshnessTimeline;
