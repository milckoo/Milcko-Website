import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import role1 from "../assets/images/Card1.png";
import role2 from "../assets/images/Card2.png";
import role3 from "../assets/images/Card3.png";
import role4 from "../assets/images/Card4.png";
import role5 from "../assets/images/Card5.png";

const roleImages = [role1, role2, role3, role4, role5];

const RoleCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-[#fffefb] py-10 relative">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
        Beyond <span className="text-yellow-500">Roles</span>, Towards{" "}
        <span className="text-green-700">Change</span>.
      </h2>

      <div className="relative">
        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full"
        >
          {roleImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="h-[80vh] w-full flex justify-center items-center">
                <img
                  src={image}
                  alt={`Role ${index + 2}`}
                  className="h-full w-auto max-w-5xl object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev Button */}
        <button
          ref={prevRef}
          className="absolute left-60 top-1/2  transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-yellow-100 transition duration-300 animate-bounce-slow z-10"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Custom Next Button */}
        <button
          ref={nextRef}
          className="absolute right-60 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-yellow-100 transition duration-300 animate-bounce-slow z-10"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default RoleCarousel;
