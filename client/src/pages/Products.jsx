import React from 'react';
import Footer from '../components/Footer';
import bgImage from '../assets/images/ourproducts.png';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="flex flex-col pt-40 bg-[#fefcf8] w-full min-h-screen">
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[100vh] pt-32 flex items-start justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
     

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl"
        >
         

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold mt-5 pt-3 py-4 px-6 rounded-full shadow-lg transition"
          >
            🛎 Notify Me
          </motion.button>
        </motion.div>
      </div>


      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Products;
