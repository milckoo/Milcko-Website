import React from "react";

// 🔹 Components
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FarmersSection from "../components/FarmersSection";
import WhyChooseUs from "../components/WhyChooseUs";
import FlashcardGallery from "../components/FlashcardGallery";
import StatsSection from "../components/StatsSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide">
      {/* 🧭 Navigation */}
      <Navbar />

      {/* 🎥 Hero Section */}
      <Hero />

      {/* 👨‍🌾 Farmers Info */}
      <FarmersSection />

      {/* ❓ Why Choose Us */}
      <WhyChooseUs />

      {/* 📸 Flashcards / Testimonials */}
      <FlashcardGallery />

      {/* 📊 Stats / Impact */}
      <StatsSection />

      {/* ⚓ Footer */}
      <Footer />
    </div>
  );
};

export default Home;
