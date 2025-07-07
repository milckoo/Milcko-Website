import React from 'react';
import photoWallImage from '../assets/farmers/photowall.jpg'; // 📷 replace with your actual image path

const FarmerPhotoWall = () => {
  return (
    <section className="w-full bg-white py-12 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-8">
          Our Farmer Community Wall
        </h2>

        <div className="w-full overflow-hidden rounded-xl shadow-md">
          <img
            src={photoWallImage}
            alt="Farmer Photo Wall"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default FarmerPhotoWall;
