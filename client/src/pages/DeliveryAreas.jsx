import React, { useState } from "react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';

const DeliveryAreas = () => {
  const [zipCode, setZipCode] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const deliveryRegions = [
    {
      name: "Bhopal",
      areas: ["Kolar", "Arera Colony", "MP Nagar", "New Market", "Shahpura"],
      zipCodes: ["462001", "462002", "462003", "462016", "462039"]
    },
    {
      name: "Indore",
      areas: ["Vijay Nagar", "Palasia", "Sudama Nagar", "Scheme 54", "Bhawarkuan"],
      zipCodes: ["452001", "452005", "452009", "452010", "452014"]
    },
    {
      name: "Jabalpur",
      areas: ["Napier Town", "Wright Town", "Ganjipura", "Madan Mahal", "Adhartal"],
      zipCodes: ["482001", "482002", "482004", "482008", "482036"]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Check all regions for matching zip code
    for (const region of deliveryRegions) {
      if (region.zipCodes.includes(zipCode)) {
        setSearchResult({ found: true, region: region.name });
        return;
      }
    }
    
    // If no match found
    setSearchResult({ found: false });
  };

  return (
    <div className="bg-[#fefcf8] min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Delivery Areas
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're bringing fresh dairy products directly to your doorstep in select areas.
          </p>
        </motion.div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-16">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Check if We Deliver to Your Area</h2>
            
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto mb-6">
              <input
                type="text"
                placeholder="Enter your ZIP code"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-yellow-400 text-black px-6 py-3 rounded-md font-medium"
                type="submit"
              >
                Check Availability
              </motion.button>
            </form>
            
            {searchResult && (
              <div className={`p-4 rounded-md text-center ${searchResult.found ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {searchResult.found ? (
                  <p>Good news! We deliver to your area in {searchResult.region}. You can place an order now!</p>
                ) : (
                  <p>Sorry, we don't deliver to this ZIP code yet. We're expanding our delivery areas soon!</p>
                )}
              </div>
            )}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Current Delivery Areas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {deliveryRegions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{region.name}</h3>
                <div className="mb-4">
                  <h4 className="font-medium text-gray-700 mb-2">Areas Covered:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {region.areas.map((area, i) => (
                      <li key={i}>{area}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">ZIP Codes:</h4>
                  <div className="flex flex-wrap gap-2">
                    {region.zipCodes.map((zip, i) => (
                      <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-yellow-50 rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">Delivery Schedule</h2>
          <p className="text-center text-gray-600 mb-6">
            We deliver fresh products throughout the week based on your location:
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Region</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Delivery Days</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time Window</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Bhopal</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monday, Wednesday, Friday</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6:00 AM - 10:00 AM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Indore</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Tuesday, Thursday, Saturday</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">6:00 AM - 10:00 AM</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Jabalpur</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Monday, Thursday, Saturday</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">7:00 AM - 11:00 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Don't See Your Area Listed?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're constantly expanding our delivery network. Let us know where you'd like us to deliver next!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-md"
          >
            Request Delivery to Your Area
          </motion.button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DeliveryAreas;