import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

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
  <div className="bg-white rounded-2xl shadow-xl px-6 py-8 w-full max-w-md mx-auto relative flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 animate-fadeInUp">
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
  </div>
);

const FlashcardGallery = () => {
  return (
    <section className="relative bg-[#fdfdfd] py-20 px-4 overflow-hidden">
      {/* Top Section */}
      <div className="text-center max-w-5xl mx-auto mb-16 px-4 animate-fadeIn">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight md:leading-tight">
          Trusted by <span className="text-green-600">Farmers</span>, Loved by <span className="text-orange-500">Customers</span>.
        </h2>
        <p className="text-gray-600 text-lg md:text-xl">
          The hands that care to the homes that share - our fresh dairy connects families and farmers in a bond of purity.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative z-10">
        <Swiper
          modules={[Navigation, Pagination, A11y, EffectFade]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          navigation
          pagination={{ clickable: true }}
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

      {/* Background Illustration */}
      <div className="absolute bottom-0 left-0 w-full opacity-10 z-0">
        <img
          src={bgIllustration}
          alt="Farm background"
          className="w-full object-cover"
        />
      </div>
    </section>
  );
};

export default FlashcardGallery;
