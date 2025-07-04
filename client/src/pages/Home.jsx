import React from 'react';
import Hero from '../components/Hero';
import FarmersSection from '../components/FarmersSection'; 
import WhyChooseUs from '../components/WhyChooseUs';
import FlashcardGallery from '../components/FlashcardGallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <FarmersSection /> 
        <WhyChooseUs />
          <FlashcardGallery />
    </div>
  );
};

export default Home;
