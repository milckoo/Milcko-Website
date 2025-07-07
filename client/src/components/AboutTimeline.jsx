import React, { useState } from 'react';

// Import Carousel Images
import image1 from '../assets/images/realization.png';
import image2 from '../assets/images/connection.png';
import image3 from '../assets/images/solution.png';
import image4 from '../assets/images/impact.png';

// Import Background Image
import bgImage from '../assets/images/cream.png'; // ✅ Add your background image here

const images = [image1, image2, image3, image4];

const AboutTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="py-16 px-6 sm:px-10 bg-black/50 min-h-[110vh]  opacity-95 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl   mx-auto flex flex-col md:flex-row mt-35 items-center gap-10">
        {/* Text Part */}
        <div className="md:w-1/2">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            From <span className="text-orange-500">Idea</span> to{' '}
            <span className="text-green-600">Impact</span>.
          </h2>
          <p className="text-gray-700 text-lg font-semibold mb-2">
            A timeline of purpose, progress, and purity.
          </p>
          <p className="text-gray-600 mb-4">
            MILCKO was born from a simple yet powerful question: Why do the
            very farmers who nourish our nation still struggle to earn what
            they deserve?
          </p>
          <p className="text-gray-600 mb-4">
            As students passionate about real-world impact, we saw flaws in the
            dairy industry—poor quality milk, unfair middlemen, and underpaid
            farmers. So, we created MILCKO to change that.
          </p>
          <p className="text-gray-600">
            By delivering fresh, additive-free milk within an hour of milking
            in eco-friendly glass bottles, we cut out middlemen and ensure fair
            payouts and pure milk for you.
            <br /> <br />
            MILCKO is more than a brand—it’s a mission built on purity,
            fairness, and trust.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="md:w-1/2 relative">
          <img
            src={images[currentIndex]}
            alt={`timeline-${currentIndex}`}
            className="rounded-lg shadow-lg w-full max-h-[450px] object-cover"
          />
          {/* Arrows */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-8 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-200"
          >
            ◀
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 right-9 transform -translate-y-1/2 bg-white rounded-full shadow p-2 hover:bg-gray-200"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
