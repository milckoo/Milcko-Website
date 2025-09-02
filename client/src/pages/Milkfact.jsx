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
      <section
        style={{
          padding: "10rem 2rem",
          backgroundColor: "#f9f9f9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "2rem",
            flexWrap: "wrap-reverse",
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
          }}
        >
          {/* Left Column - Photo */}
          <div
            style={{
              flex: "1",
              minWidth: "600px", // ✅ Bigger width
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "450px", // ✅ Bigger height
                borderRadius: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "#fff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              {milkfact ? (
                <img
                  src={milkfact}
                  alt="Milk Fact"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", // ✅ Image fully visible
                  }}
                />
              ) : (
                <span style={{ color: "#888", fontSize: "1rem" }}>
                  Photo Placeholder
                </span>
              )}
            </div>
          </div>

          {/* Right Column - Text */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "#333",
              }}
            >
              Your Daily Dose of Dairy{" "}
              <span style={{ color: "#d99200" }}>Wisdom.</span>
            </h2>
            <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
              Discover how milk fuels health, culture, and communities. Read
              insightful blogs on nutrition, farmer stories, eco-friendly
              practices, and the journey of purity in every bottle.
            </p>
          </div>
        </div>
      </section>

      {/* Fresh Reads Section (Placed Correctly Below) */}
     
      <FreshReadsSection />
       <PopularArticles/>
       <NewsletterSignup/>
      <Footer />
    </>
  );
};

export default Milkfact;
