import React from "react";
import { motion } from "framer-motion";

import glassBottleIcon from "../assets/images/icon1.png";
import reusedBottleIcon from "../assets/images/icon2.png";
import organicFeedIcon from "../assets/images/icon3.png";
import plasticAvoidedIcon from "../assets/images/icon4.png";


const stats = [
  {
    icon: glassBottleIcon,
    title: "87% Deliveries in Glass Bottles",
    desc: "Reducing waste, one bottle at a time — our customers choose sustainability every day.",
  },
  {
    icon: reusedBottleIcon,
    title: "15,000+ Bottles Reused",
    desc: "Each reused bottle is a step toward a cleaner, circular system.",
  },
  {
    icon: organicFeedIcon,
    title: "98% Farms Use Organic Feed",
    desc: "We work with farmers committed to purity, nutrition, and environmental harmony.",
  },
  {
    icon: plasticAvoidedIcon,
    title: "4,000+ Plastic Bottles Avoided Monthly",
    desc: "That’s thousands of single-use plastics kept out of landfills — every month.",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-[#d9d3c8] px-6 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-yellow-600">Impact</span> in Numbers.
        </h2>
        <p className="mt-4 text-lg text-gray-800">
          A quick look at how your choices fuel real-world change.
        </p>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              {/* Individual icon image */}
          <img
  src={item.icon}
  alt="Impact icon"
  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
/>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
