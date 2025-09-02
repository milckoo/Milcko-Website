import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

import mapImage from "../assets/images/map.png";
import bottomWave from "../assets/images/bottomwave.png";
import BhopalMilkService from "../components/BhopalMilkService";
import ComingSoonBanner from "../components/ComingSoonBanner";
import RequestMilkoBanner from "../components/RequestMilkoBanner";
import Navbar from '../components/Navbar';

const DeliveryAreas = () => {
  const [zipCode, setZipCode] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const deliveryRegions = [
    {
      name: "Bhopal",
      areas: ["Kolar", "Arera Colony", "MP Nagar", "New Market", "Shahpura"],
      zipCodes: ["462001", "462002", "462003", "462016", "462039"],
    },
    {
      name: "Indore",
      areas: ["Vijay Nagar", "Palasia", "Sudama Nagar", "Scheme 54", "Bhawarkuan"],
      zipCodes: ["452001", "452005", "452009", "452010", "452014"],
    },
    {
      name: "Jabalpur",
      areas: ["Napier Town", "Wright Town", "Ganjipura", "Madan Mahal", "Adhartal"],
      zipCodes: ["482001", "482002", "482004", "482008", "482036"],
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    for (const region of deliveryRegions) {
      if (region.zipCodes.includes(zipCode)) {
        setSearchResult({ found: true, region: region.name });
        return;
      }
    }
    setSearchResult({ found: false });
  };

  return (
    <div className="bg-[#FFFBF0] min-h-screen font-sans overflow-hidden relative antialiased pt-24">
      <Navbar />
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 md:gap-16">
          {/* Left Side: India Map */}
          <div className="relative flex justify-center items-center h-[300px] sm:h-[400px] lg:h-auto">
            <img
              src={mapImage}
              alt="Map of India with Bhopal highlighted"
              className="w-full h-full object-contain drop-shadow-lg max-w-md"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="text-center lg:text-left z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3A4D39] leading-tight">
              We're <span className="text-[#F97316]">Growing</span>,<br />
              One City at a Time.
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
              Milcko's farm-fresh milk reaches homes in Bhopal with speed,
              hygiene, and consistency. We're committed to delivering quality
              and care with every bottle, and we're just getting started.
            </p>
            <button className="mt-8 px-8 py-3 bg-[#3A5F45] text-white font-semibold rounded-full shadow-lg hover:bg-[#2c4b36] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3A5F45] focus:ring-offset-[#FFFBF0]">
              Sign Up for Fresh Deliveries
            </button>

          </div>

        </div>
      </div>

      {/* Bottom Wave with Image */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 lg:h-64">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FDBA74"
            fillOpacity="0.8"
            d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,240C672,267,768,277,864,256C960,235,1056,181,1152,154.7C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
          <path
            fill="#FDBA74"
            fillOpacity="0.6"
            d="M0,256L60,229.3C120,203,240,149,360,149.3C480,149,600,203,720,208C840,213,960,171,1080,160C1200,149,1320,171,1380,181.3L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>

    
      </div>
      <BhopalMilkService/>
      <ComingSoonBanner/>
      <RequestMilkoBanner/>

      <Footer />
    </div>
  );
};

export default DeliveryAreas;
