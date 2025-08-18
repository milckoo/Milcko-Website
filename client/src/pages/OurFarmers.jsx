import React from 'react';
import { motion } from 'framer-motion';
import farmerImage from '../assets/images/farmerlist.png';
import greenbg from '../assets/images/greenbg.jpg';
import AppSupportSection from '../components/AppSupportSection'; 
import FarmerOnboarding from '../components/FarmerOnboarding';
import FarmerPhotoWall from '../components/FarmerPhotoWall';
import Footer from '../components/Footer';


const OurFarmers = () => {
  const farmers = [
    {
      name: "The Thompson Family",
      location: "Rolling Hills Farm, Wisconsin",
      since: "1962",
      description: "Four generations of dairy excellence. The Thompsons specialize in Jersey cows known for producing milk with high butterfat content.",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Maria & John Martinez",
      location: "Sunrise Valley Dairy, California",
      since: "1998",
      description: "First-generation farmers committed to sustainable practices. Their farm uses rotational grazing and solar power.",
      image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "The Williams Brothers",
      location: "Green Pastures Farm, Vermont",
      since: "1978",
      description: "Certified organic dairy with a focus on heritage breed preservation. Their herd includes rare Ayrshire and Guernsey cows.",
      image: "https://images.unsplash.com/photo-1570019450902-9a678f18d4d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    },
    {
      name: "Sarah Johnson",
      location: "Misty Morning Dairy, Oregon",
      since: "2010",
      description: "Former food scientist turned dairy farmer. Sarah's scientific approach ensures exceptional milk quality and animal welfare.",
      image: "https://images.unsplash.com/photo-1594761051559-fad174365bca?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    }
  ];

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
