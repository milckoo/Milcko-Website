import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  {
    icon: "🥛",
    title: "87% Deliveries in Glass Bottles",
    desc: "Reducing waste, one bottle at a time — our customers choose sustainability every day.",
  },
  {
    icon: "🔁",
    title: "15,000+ Bottles Reused",
    desc: "Each reused bottle is a step toward a cleaner, circular system.",
  },
  {
    icon: "🐄",
    title: "98% Farms Use Organic Feed",
    desc: "We work with farmers committed to purity, nutrition, and environmental harmony.",
  },
  {
    icon: "🚫🥤",
    title: "4,000+ Plastic Bottles Avoided Monthly",
    desc: "That’s thousands of single-use plastics kept out of landfills — every month.",
  },
];

const ImpactSection = () => {
  return (
    <section className="bg-gradient-to-r from-cream-100 to-cream-200 px-6 py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Our <span className="text-yellow-500">Impact</span> in Numbers.
        </h2>
        <p className="mt-4 text-lg text-gray-700">
          A quick look at how your choices fuel real-world change.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white shadow-md rounded-xl p-6 flex items-start gap-4 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20 bg-yellow-100 rounded-xl py-10 px-6 lg:flex lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-6 lg:mb-0 lg:mx-0 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl"
        >
          <img
            src="/assets/return_bottles.png" // Replace this with your actual local image path
            alt="Return bottles"
            className="object-cover w-full h-full"
          />
        </motion.div>

        <div className="text-center lg:text-left max-w-xl">
          <h3 className="text-3xl font-bold text-green-700">
            Join the <span className="text-green-900">Green</span> Movement!
          </h3>
          <p className="mt-4 text-gray-700 text-base">
            Every returned bottle tells a story of care. <br />
            Join hands with us to support farmers and nurture a cleaner, greener tomorrow.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
            Become a Green Milcko Member
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
