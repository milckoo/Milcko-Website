import React from "react";
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
  return (
    <section className="bg-[#fffefb] py-10">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
        Beyond <span className="text-yellow-500">Roles</span>, Towards{" "}
        <span className="text-green-700">Change</span>.
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop={true} // ✅ Enables infinite scroll
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
                alt={`Role ${index + 1}`}
                className="h-full w-auto max-w-5xl object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RoleCarousel;
