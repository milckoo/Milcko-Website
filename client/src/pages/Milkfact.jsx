import React from "react";
import milkfact from "../assets/images/milkfact.png"; // ✅ Fixed import path
import FreshReadsSection from "../components/FreshReadsSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PopularArticles from "../components/PopularArticles";
import NewsletterSignup from "../components/NewsletterSignup";

const Milkfact = () => {
  return (
    <>
      <Navbar />

      {/* Milk Fact Section */}
      <section className="px-4 py-45 bg-[#FFFBF3] flex justify-center items-center">
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 max-w-6xl w-full items-center">
          {/* Left Column - Photo */}
          <div className="flex-1 w-full flex justify-center items-center">
            <div className="w-full max-w-lg h-[250px] sm:h-[350px] md:h-[450px] rounded-xl overflow-hidden bg-white shadow-md flex justify-center items-center">
              {milkfact ? (
                <img
                  src={milkfact}
                  alt="Milk Fact"
                  className="w-full h-full object-contain"
                />
              ) : (
                <span className="text-gray-500 text-sm">Photo Placeholder</span>
              )}
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="flex-1 w-full flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Your Daily Dose of Dairy{" "}
              <span className="text-[#d99200]">Wisdom.</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Discover how milk fuels health, culture, and communities. Read
              insightful blogs on nutrition, farmer stories, eco-friendly
              practices, and the journey of purity in every bottle.
            </p>
          </div>
        </div>
      </section>

      {/* Fresh Reads Section */}
      <FreshReadsSection />
      <PopularArticles />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default Milkfact;
