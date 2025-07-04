import React from 'react';
import Footer from '../components/Footer';
import bgImage from '../assets/images/ourproducts.png';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="flex flex-col pt-10  min-h-screen w-full">
      {/* Hero Section with Background Image */}
   <div
  className="relative bg-cover bg-center bg-no-repeat min-h-screen   flex items-start justify-center pt-24"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/35 bg-opacity-40" />

  {/* Text Content */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative z-10 text-center  px-4 max-w-3xl text-white"
  >
    <h1 className="text-4xl mb-4 sm:text-5xl font-bold">
      <span className="text-black">Dairy Delights Coming</span>{' '}
      <span className="text-yellow-400">Soon!</span>
    </h1>
    <p className="mb-6 text-lg sm:text-xl font-semibold text-black/90">
      Coming soon to your doorstep are our most-requested dairy essentials:
      Desi Ghee, Curd, Paneer, and more — all made from our same trusted milk.
    </p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition"
    >
      🛎 Notify Me
    </motion.button>
  </motion.div>
</div>


      {/* Spacer before Footer */}
      <div className="h-20 bg-[#fefcf8]"></div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
