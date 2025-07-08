import React from "react";
import { motion } from "framer-motion";
import icon1 from "../assets/images/purposeicon1.png";
import icon2 from "../assets/images/purposeicon2.png";
import icon3 from "../assets/images/purposeicon3.png";
import icon4 from "../assets/images/purposeicon4.png";

// Card content
const cardData = [
  {
    icon: icon1,
    title: "Purpose-Driven Culture",
    text: "At Milcko, everything you do directly impacts the lives of farmers and helps reduce waste. Every task contributes to a more sustainable future, and you’ll see the difference your work makes in real-time.",
  },
  {
    icon: icon2,
    title: "Startup Energy, Big Impact",
    text: "Join our fast-growing, passionate team where every day is an opportunity to make a big difference. At Milcko, we move quickly, innovate boldly, and create real change that matters.",
  },
  {
    icon: icon3,
    title: "Your Work, Your Way",
    text: "We believe in empowering our team with the freedom to work from anywhere. Whether at home or on-site, we focus on your results, creativity, and collaboration rather than where you work.",
  },
  {
    icon: icon4,
    title: "Learning & Growth",
    text: "Step into a world of hands-on learning with plenty of opportunities to grow. At Milcko, you’ll gain experience in various areas, develop new skills, and build a solid foundation for your career.",
  },
];

// Component
const PurposeCards = () => {
  return (
    <section className="bg-[#fff6e5] w-full py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-700">Purpose</span> at the{" "}
          <span className="text-yellow-600">Core</span>.
        </motion.h2>

        {/* Subheading Single Line */}
        <motion.p
          className="text-gray-700 font-semibold text-lg max-w-7xl mx-auto mb-16 whitespace-nowrap overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Milcko, every task you do fuels a bigger mission — fair pay, zero waste, and a fresher planet. Your work truly means something.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative bg-white rounded-xl shadow-md pt-20 pb-6 px-6 text-center flex flex-col items-center hover:shadow-lg transition duration-300"
            >
              {/* Floating Icon */}
              <div className="absolute -top-14 bg-[#fff6e5] p-4 rounded-full shadow-lg">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Text Content */}
              <h3 className="text-lg font-semibold mb-2 mt-6">{card.title}</h3>
              <p className="text-sm text-gray-700">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeCards;
