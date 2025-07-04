import React from 'react';
import Hero from '../components/Hero';
import FarmersSection from '../components/FarmersSection'; // ✅ Import it

const Home = () => {
  return (
    <div>
      <Hero />
      <FarmersSection /> {/* ✅ Call the component */}
    </div>
  );
};

export default Home;
