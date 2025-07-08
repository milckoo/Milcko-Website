import React from 'react';
import farmerImage from '../assets/images/farmerlist.png';
import greenbg from '../assets/images/greenbg.jpg';
import AppSupportSection from '../components/AppSupportSection'; 
import FarmerOnboarding from '../components/FarmerOnboarding';
import FarmerPhotoWall from '../components/FarmerPhotoWall';
import Footer from '../components/Footer';


const OurFarmers = () => {
  return (
    <section
      id="our-farmers"
      className="w-full min-h-screen bg-cover bg-center bg-no-repeat py-0 px-0"
      style={{ backgroundImage: `url(${greenbg})` }}
    >
      <div className="max-w-7xl mt-20 mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Text Content - 60% */}
        <div className="w-full md:w-3/5">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-8 whitespace-nowrap">
            Our <span className="text-green-700">Farmers</span>, <span className="text-orange-500">Our Strength.</span>
          </h2>
          <p className="text-gray-900 text-xl sm:text-2xl leading-relaxed">
            Every farmer on our platform is verified through a farm check, trained on hygiene,
            and supported through our app. We don’t just collect milk — we partner with those
            who believe in purity, care, and ethical dairy practices.
          </p>
        </div>

        {/* Right Image Content - 40% */}
        <div className="w-full md:w-3/5 flex justify-center items-center">
          <img
            src={farmerImage}
            alt="Farmer"
            className="w-[300px] sm:w-[450px] md:w-[520px] lg:w-[600px] object-contain"
          />
        </div>
      </div>
      <AppSupportSection />
       <FarmerOnboarding />
       <FarmerPhotoWall />
       <Footer/>
    </section>
  );
};

export default OurFarmers;
