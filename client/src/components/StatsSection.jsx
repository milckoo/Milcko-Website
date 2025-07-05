import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
} from "framer-motion";

import farmerCowsImg from "../assets/images/cattle.png";
import milkWaveBg from "../assets/images/milkwave.png";
import farmBg from "../assets/images/farm.png";

import { FaUserFriends, FaHandshake } from "react-icons/fa";
import { PiFlask } from "react-icons/pi";
import { GiMilkCarton } from "react-icons/gi";

const stats = [
  {
    icon: <FaUserFriends className="text-green-600 text-3xl mb-2" />,
    number: 5000,
    label: "Happy customers enjoying pure freshness",
  },
  {
    icon: <FaHandshake className="text-green-600 text-3xl mb-2" />,
    number: 2500,
    label: "Farmers growing with us every day",
  },
  {
    icon: <GiMilkCarton className="text-green-600 text-3xl mb-2" />,
    number: 10000,
    label: "Liters of farm-fresh milk delivered",
  },
  {
    icon: <PiFlask className="text-green-600 text-3xl mb-2" />,
    number: 15000,
    label: "Quality tests ensuring purity",
  },
];

const AnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 2,
        onUpdate: (latest) => {
          if (ref.current) {
            ref.current.textContent = Math.floor(latest).toLocaleString() + "+";
          }
        },
      });
      return () => controls.stop();
    }
  }, [value, isInView]);

  return <p ref={ref} className="text-2xl font-bold text-gray-800" />;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section
      ref={ref}
      className="relative bg-[#fefcf8] py-20 px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      {/* 🌄 Background container below all */}
      <div className="absolute inset-x-0 bottom-19 w-full z-0 pointer-events-none">
        <img
          src={milkWaveBg}
          alt="Milk wave background"
          className="w-full object-cover opacity-10"
        />
        <img
          src={farmBg}
          alt="Farm background"
          className="w-full object-cover opacity-20 -mt-10"
        />
      </div>

      {/* ✅ Foreground content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* 👈 Left image */}
        <motion.div
          className="w-full lg:w-[40%] flex justify-center"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <img
            src={farmerCowsImg}
            alt="Farmer and cows"
            className="w-[85%] rounded-xl shadow-md object-cover"
          />
        </motion.div>

        {/* 👉 Stats content */}
        <motion.div
          className="w-full lg:w-[60%] text-left"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Freshness is <span className="text-orange-500">Beyond Numbers</span>.
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            But here are a few stats that tell our story!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={index + 2}
              >
                <div>{stat.icon}</div>
                <div>
                  <AnimatedNumber value={stat.number} />
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
