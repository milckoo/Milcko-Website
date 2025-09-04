import React, { useState } from 'react';
import Footer from '../components/Footer';
import JoinTheStoryBanner from '../components/JoinTheStoryBanner';
import Navbar from '../components/Navbar';

import image1 from '../assets/images/1.png';
import image2 from '../assets/images/2.png';
import image3 from '../assets/images/3.png';
import image4 from '../assets/images/4.png';
import image5 from '../assets/images/5.png';
import image6 from '../assets/images/6.png';
import image7 from '../assets/images/7.png';
import image8 from '../assets/images/8.png';
import image9 from '../assets/images/9.png';
import image10 from '../assets/images/10.png';
import image11 from '../assets/images/11.png';
import image12 from '../assets/images/12.png';
import image13 from '../assets/images/13.png';
import image14 from '../assets/images/14.png';
import image15 from '../assets/images/15.png';
import image16 from '../assets/images/16.png';

// Flat array for grid order (matches screenshot order)
const galleryImages = [
  image1, image2, image3, 
   image5, image6, image7,
  image9, image4, image10, image11, 
  image12,image14, image15, image16 
];

const galleryCategories = [
  'All',
  'Our Cows',
  'Our Farmers',
  'Delivery Moments',
  'Behind the Scenes',
  'Customers',
];

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const getImagesForDisplay = () => {
    if (activeCategory === 'All') return galleryImages;
    // Example: filter by index for demo, you can add tags to images for real filtering
    if (activeCategory === 'Our Cows') return [image1,image2,image7,image10,image13,image16,];
    if (activeCategory === 'Our Farmers') return [image3,image13,image16,];
    if (activeCategory === 'Delivery Moments') return [image4,image5,image12,];
    if (activeCategory === 'Behind the Scenes') return [image6,image8,image9,image14,image15,];
    if (activeCategory === 'Customers') return [image11,image12,image4];
    return [];
  };

  const imagesToDisplay = getImagesForDisplay();

  return (
    <>
      <div className="bg-gradient-to-r from-[#FEF0D5] to-[#FEF0D500] font-sans py-16 px-4 sm:px-6 lg:px-8">
        <div className='mb-15'><Navbar/></div>
        <div className="max-w-7xl mx-auto">
          {/* Heading and Description */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-neutral-800 mb-4">Our Gallery.</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A glimpse into our world – from the love and care our farmers give their cows, 
              to the purity of milk reaching your doorstep, stories of happy customers, 
              and moments that complete our journey.
            </p>
          </div>
          {/* Category Navigation */}
          <nav className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-4 py-2 rounded-full text-base sm:text-lg font-medium 
                  transition-colors duration-300
                  ${activeCategory === category 
                    ? 'bg-green-700 text-white shadow-md' 
                    : 'bg-white text-gray-700 hover:bg-gray-100'}
                `}
              >
                {category}
              </button>
            ))}
          </nav>
          {/* Masonry Collage Grid */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4">
            {imagesToDisplay.map((src, index) => (
              <div key={index} className="mb-4 rounded-xl overflow-hidden break-inside-avoid shadow-sm">
                <img
                  src={src}
                  alt={`Gallery item ${index + 1} for ${activeCategory}`}
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-colors duration-300">
              Load More
            </button>
          </div>
        </div>
      </div>
      <JoinTheStoryBanner />
      <Footer />
    </>
  );
}

export default Gallery;
