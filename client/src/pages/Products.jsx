import React from 'react';
import Footer from '../components/Footer';
import bgImage from '../assets/images/ourproducts.png';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <div className="flex flex-col pt-18 bg-[#fefcf8] w-full min-h-screen">
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[110vh] pt-42 flex items-start justify-center"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
     

   

          
          <div className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold mt-5 pt-4 py-5 px-8 rounded-full shadow-lg transition">
            🛎 Notify Me</div>
            
          
         
       
      </div>


    
        <Footer />
     
    </div>
  );
};

export default Products;
