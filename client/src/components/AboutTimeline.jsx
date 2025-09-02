import React, { useState, useEffect } from 'react';

import image1 from '../assets/images/realization.png';
import image2 from '../assets/images/connection.png';
import image3 from '../assets/images/solution.png';
import image4 from '../assets/images/impact.png';

import bgImage from '../assets/images/cream.png';

const images = [image1, image2, image3, image4];

const AboutTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="py-12 sm:py-16 px-4 sm:px-8 md:px-5 bg-black/10 min-h-[50vh] md:min-h-[50vh] opacity-95 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-14 relative">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-snug">
            From <span className="text-orange-500">Idea</span> to{' '}
            <span className="text-green-600">Impact</span>.
          </h2>
          <p className="text-gray-700 text-base sm:text-lg font-semibold mb-2">
            A timeline of purpose, progress, and purity.
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            MILCKO was born from a simple yet powerful question: Why do the
            very farmers who nourish our nation still struggle to earn what
            they deserve?
          </p>
          <p className="text-gray-600 text-sm sm:text-base mb-4">
            As students passionate about real-world impact, we saw flaws in the
            dairy industry—poor quality milk, unfair middlemen, and underpaid
            farmers. So, we created MILCKO to change that.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            By delivering fresh, additive-free milk within an hour of milking
            in eco-friendly glass bottles, we cut out middlemen and ensure fair
            payouts and pure milk for you.
            <br />
            <br />
            MILCKO is more than a brand—it’s a mission built on purity,
            fairness, and trust.
          </p>
        </div>

        {/* Smooth Fading Carousel */}
        <div className="md:w-1/2 relative h-[250px] sm:h-[350px] md:h-[450px] w-full overflow-hidden rounded-lg shadow-lg">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`timeline-${i}`}
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
              }`}
            />
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white/90 rounded-full shadow p-1 sm:p-3 hover:bg-gray-200  z-30 text-xs sm:text-base"
          >
            ◀
          </button>
          <button
            onClick={goNext}
            className="absolute top-1/2 right-4 sm:right-4 transform -translate-y-1/2 bg-white/90 rounded-full shadow p-1 sm:p-3 hover:bg-gray-200 z-30 text-xs sm:text-base"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutTimeline;
