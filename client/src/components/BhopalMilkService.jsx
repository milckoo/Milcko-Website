import React from 'react';
import truck from '../assets/images/truck.png';
import icon from '../assets/images/icon.png';
import vector from '../assets/images/vector.png';
import image4 from '../assets/images/image4.png';


// In a real project, you should download these images and place them in your `/public`
// or `/src/assets` folder. For this example, I am using URLs I created to match your image.

function BhopalMilkService() {
  return (
    <div className="bg-[#F5F3EF] font-sans py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* --- Heading Section --- */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800">
            Serving <span className="text-green-700">Bhopal</span> with <span className="text-amber-800">Care.</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            From our local farms straight to your doorstep, ensuring quality in every drop.
          </p>
        </div>

        {/* --- Features Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1: Fast Doorstep Delivery */}
          <div className="bg-white/80 border border-gray-200 rounded-xl p-6 flex items-center space-x-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">
              <img 
                className="h-20 w-20" 
                src={truck} 
                alt="Fast milk delivery truck" 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Fast Doorstep Delivery</h3>
              <p className="mt-2 text-gray-600">Your Milko milk arrives fresh every day, straight to your home without delay.</p>
            </div>
          </div>

          {/* Card 2: Farm-Fresh Milk Guaranteed */}
          <div className="bg-white/80 border border-gray-200 rounded-xl p-6 flex items-center space-x-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">
              <img 
                className="h-20 w-20" 
                src={icon}
                alt="Bottle of farm-fresh milk" 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Farm-Fresh Milk Guaranteed</h3>
              <p className="mt-2 text-gray-600">Sourced directly from trusted local farms, every bottle is pure, nutritious, and fresh.</p>
            </div>
          </div>

          {/* Card 3: Local Bhopal Coverage */}
          <div className="bg-white/80 border border-gray-200 rounded-xl p-6 flex items-center space-x-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">
              <img 
                className="h-10 ml-5  w-8 mr-6" 
                src={vector}
                alt="Map pin for Bhopal location" 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Local Bhopal Coverage</h3>
              <p className="mt-2 text-gray-600">We currently serve Bhopal city with consistent, reliable, and attentive service.</p>
            </div>
          </div>

          {/* Card 4: Sustainable Practices */}
          <div className="bg-white/80 border border-gray-200 rounded-xl p-6 flex items-center space-x-5 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="flex-shrink-0">
              <img 
                className="h-20 w-20" 
                src={image4}
                alt="Icon for sustainable and eco-friendly practices" 
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Sustainable Practices</h3>
              <p className="mt-2 text-gray-600">Eco-friendly handling and minimal packaging ensure responsible delivery for our environment.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default BhopalMilkService;