import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import bgIllustration from "../assets/images/cows.png";

// Avatar images
const images = {
  woman: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
  seniorMan: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
  man: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
  farmerHat: "https://images.unsplash.com/photo-1601933470928-c52f8e77c3d3",
  smilingLady: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39",
  turbanFarmer: "https://images.unsplash.com/photo-1611611159578-712d8b9ad854",
};

const reviews = [
  {
    image: images.woman,
    title: "Eco-friendly & delightful!",
    quote:
      "I appreciate that they use glass bottles, less plastic, and still deliver amazing milk!",
    name: "Megha Jain",
    role: "Customer",
    quoteColor: "text-orange-500",
  },
  {
    image: images.seniorMan,
    title: "Fair Pay, On-Time Always!",
    quote:
      "This platform ensures I get paid on time and the process is transparent.",
    name: "Rajesh Kumar",
    role: "Dairy Farmer",
    quoteColor: "text-green-600",
  },
  {
    image: images.man,
    title: "Purest milk I've ever had!",
    quote:
      "Fresh, creamy, and delivered on time every day. No preservatives—just goodness!",
    name: "Sameer Jain",
    role: "Customer",
    quoteColor: "text-orange-500",
  },
  {
    image: images.farmerHat,
    title: "A blessing for farmers",
    quote:
      "The support and fair rates helped me invest back into my farm and grow.",
    name: "Lakhan Bhai",
    role: "Local Farmer",
    quoteColor: "text-green-600",
  },
  {
    image: images.smilingLady,
    title: "Just amazing service!",
    quote:
      "Milk is always fresh, packaging is eco-conscious, and they are never late.",
    name: "Ritu Sharma",
    role: "Customer",
    quoteColor: "text-orange-500",
  },
  {
    image: images.turbanFarmer,
    title: "Proud to be a partner",
    quote:
      "I feel proud supplying to such a genuine platform that values our effort.",
    name: "Baldev Singh",
    role: "Farmer",
    quoteColor: "text-green-600",
  },
];

const StarRating = () => (
  <div className="flex justify-center mb-4">
    {[...Array(5)].map((_, i) => (
      <span key={i} className="text-yellow-400 text-xl">★</span>
    ))}
  </div>
);

const Flashcard = ({ image, title, quote, name, role, quoteColor }) => (
  <motion.div
    className="bg-white mt-10 rounded-2xl shadow-xl px-6 py-8 w-full max-w-md mx-auto relative flex flex-col items-center text-center transition-transform duration-500 hover:scale-105"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.2 }}
  >
    <img
      src={image}
      alt={name}
      className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-white shadow-md"
    />
    <StarRating />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600 text-base mb-4">{quote}</p>
    <p className="text-sm font-medium text-gray-700">{name}</p>
    <p className="text-sm text-gray-500">{role}</p>
    <div className={`text-5xl absolute bottom-4 left-4 font-serif ${quoteColor}`}>“</div>
    <div className={`text-5xl absolute bottom-4 right-4 font-serif ${quoteColor}`}>”</div>
  </motion.div>
);

const FlashcardGallery = () => {
  return (
    <section className="relative mt-20 bg-[#fdfdfd] py-20 px-4 overflow-hidden">
      {/* Header */}
      <motion.div
        className="max-w-6xl mx-auto px-4 text-center mb-16"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.4 }}
      >
        <motion.h2
          className="font-extrabold text-gray-800 text-[clamp(1.75rem,4vw,3rem)]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Trusted by <span className="text-green-600">Farmers</span>, Loved by{" "}
          <span className="text-orange-500">Customers</span>.
        </motion.h2>
        <motion.p
          className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto mt-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          The hands that care to the homes that share — our fresh dairy connects families and farmers in a bond of purity.
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          speed={800}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Flashcard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Background Image */}
      <div className="absolute bottom-0 left-0 w-full z-0 opacity-10 pointer-events-none">
        <img
          src={bgIllustration}
          alt="Farm background"
          className="w-full object-cover align-bottom"
        />
      </div>
    </section>
  );
};

export default FlashcardGallery;
