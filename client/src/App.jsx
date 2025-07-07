import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Products from './pages/Products';
import TrialPack from './pages/TrialPack';
import FAQs from './pages/FAQs';
import AboutUs from './pages/AboutUs';
import OurFarmers from './pages/OurFarmers'; 

function App() {
  return (
    <>
      
      <Navbar />

    
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/Contactus" element={<Contactus />} />
        <Route path="/products" element={<Products />} />
        <Route path="/trial-pack" element={<TrialPack />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-farmers" element={<OurFarmers />} />
      </Routes>
    </>
  );
}

export default App;
