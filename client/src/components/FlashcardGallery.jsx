import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import imgManya from "../assets/images/Manya.png";
import imgSameer from "../assets/images/Sameer.png";
import imgMansi from "../assets/images/Mansi.png";
import imgAmit from "../assets/images/Leftfarmer.png";
import imgRajesh from "../assets/images/Rightfarmer.png";
import imgSuresh from "../assets/images/Centerfarmer.png";
import bgIllustration from "../assets/images/cows.png";

// Left slider images (excluding the three farmers)
const leftSliderImages = [imgManya, imgSameer, imgMansi];

// Right slider images (only the three farmers)
const rightSliderImages = [imgAmit, imgRajesh, imgSuresh];

const FlashcardGallery = () => (
  <section className="relative py-20 bg-[#fefcf8] mt-20 overflow-hidden px-4">
    {/* Background Image */}
    <div className="absolute inset-0 w-full mt-10 h-full z-0 opacity-10 pointer-events-none">
      <img
        src={bgIllustration}
        alt="Background"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="relative z-10 max-w-6xl mx-auto mb-12 text-center">
      <motion.h2
        className="font-extrabold text-3xl md:text-4xl text-gray-800"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Trusted by <span className="text-green-600">Farmers</span>, Loved by{" "}
        <span className="text-orange-500">Customers</span>.
      </motion.h2>
      <p className="text-gray-600 text-base md:text-lg ml-14 font-semibold max-w-3xl mx-auto mt-3 whitespace-nowrap">
        From The hands that care to the homes that share — our fresh dairy
        connects families and farmers in a bond of purity.
      </p>
    </div>
    {/* Two-column layout */}
    <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left: Swiper Slider (other images) */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            1024: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {leftSliderImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <motion.img
                src={img}
                alt={`testimonial-left-${idx}`}
                className="rounded-2xl shadow-xl mx-auto w-full max-w-xs object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Right: Swiper Slider (three farmers) */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            1024: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {rightSliderImages.map((img, idx) => (
            <SwiperSlide key={idx}>
              <motion.img
                src={img}
                alt={`testimonial-right-${idx}`}
                className="rounded-2xl shadow-xl mx-auto w-full max-w-xs object-cover"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  </section>
);

export default FlashcardGallery;
