import React from 'react';
import Hero from '../components/Hero';
import FarmersSection from '../components/FarmersSection'; 
import WhyChooseUs from '../components/WhyChooseUs';
import FlashcardGallery from '../components/FlashcardGallery';
import StatsSection from '../components/StatsSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Hero />
      <FarmersSection /> 
        <WhyChooseUs />
          <FlashcardGallery />
          <StatsSection/>
          <Footer/>
    </div>
  );
};

export default Home;
