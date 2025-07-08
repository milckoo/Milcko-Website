import React from 'react';
import journeyImage from '../assets/images/ourjourney.png'; // Replace with your actual full journey image

const JourneySection = () => {
  return (
    <section className="bg-[#f0f4ec] py-16 px-4">
     

    <div className="w-full bg-[#e8f5e9] py-10 px-4 rounded-2xl">
  <div className="max-w-7xl mx-auto">
    <img
      src={journeyImage}
      alt="Journey to a Greener Tomorrow"
      className="w-full h-auto rounded-4xl"
    />
  </div>
</div>
    </section>
  );
};

export default JourneySection;
