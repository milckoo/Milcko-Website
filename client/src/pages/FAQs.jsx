import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Added for navigation
import faqImage from "../assets/images/faq.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import faqbackground from "../assets/images/faqbackground.png";
import faqinside from "../assets/images/faqinside.png";

// Fixed category names for consistency
const faqData = [
  {
    question: "How do I place a new order?",
    answer:
      "You can place your order directly through the MILCKO app. Select your milk type and delivery schedule.",
    category: "Ordering & Delivery",
  },
  {
    question: "Can I change my delivery address?",
    answer: "Yes, update it in account settings before the next delivery.",
    category: "Ordering & Delivery",
  },
  {
    question: "What if I miss my delivery?",
    answer: "Missed deliveries are rescheduled. You can also contact support.",
    category: "Ordering & Delivery",
  },
  {
    question: "Do you deliver on weekends?",
    answer: "Yes, every day. Holiday schedules may vary.",
    category: "Ordering & Delivery",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, cards, net banking, and wallet payments.",
    category: "Payments & Plans",
  },
  {
    question: "How can I check milk quality?",
    answer: "Every batch is tested for purity and delivered fresh.",
    category: "Milk Quality",
  },
  {
    question: "I forgot my password. What should I do?",
    answer: "Go to account settings → Forgot Password and reset with OTP.",
    category: "Account Help",
  },
  {
    question: "How do payouts work for farmers?",
    answer: "Payments are transferred weekly to registered bank accounts.",
    category: "Payouts & Earnings",
  },
  {
    question: "What are your quality guidelines?",
    answer: "We follow strict FSSAI and A2 purity standards.",
    category: "Quality Guidelines",
  },
  {
    question: "What is MILCKO all about?",
    answer: "MILCKO is your trusted farm-to-home A2 milk delivery service.",
    category: "About MILCKO",
  },
  {
    question: "Any future plans for expansion?",
    answer: "Yes, we plan to expand to more cities in the coming year.",
    category: "Future Plans",
  },
  {
    question: "How do you ensure sustainability?",
    answer: "We use eco-friendly bottles and support ethical farming.",
    category: "Sustainability",
  },
  {
    question: "What is the trial pack?",
    answer: "A one-time pack to try our A2 milk before subscribing.",
    category: "Trial Pack",
  },
  {
    question: "How do you collect milk?",
    answer: "Milk is collected fresh every morning from local farms.",
    category: "Milk Collection",
  },
  {
    question: "The app is not working, what should I do?",
    answer: "Clear cache, update the app, or contact support.",
    category: "App Support",
  },
];

const categories = [
  "All Questions",
  "Ordering & Delivery",
  "Milk Quality",
  "Payments & Plans",
  "Account Help",
  "Payouts & Earnings",
  "Quality Guidelines",
  "About MILCKO",
  "Future Plans",
  "Sustainability",
  "Trial Pack",
  "Milk Collection",
  "App Support",
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState("All Questions");
  const navigate = useNavigate(); // For navigation

  const filteredFaqs =
    activeCategory === "All Questions"
      ? faqData
      : faqData.filter((item) => item.category === activeCategory);

  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="bg-[#FFFBF3] min-h-screen flex flex-col items-center">
        {/* Hero */}
        <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
          {/* Background Image */}
          <img
            src={faqbackground}
            alt="FAQ Background"
            className="w-full h-full object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={faqinside}
              alt="FAQ Inside"
              className="max-w-[20%] mt-30 h-auto object-contain"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full pl-20 px-3 py-4 flex flex-col lg:flex-row gap-4">
          {/* Left Side */}
          <div className="left-0 w-full lg:w-2/5 space-y-4">
            {/* Heading */}
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
              Have <span className="text-green-600">Questions</span>? We’ve Got
              Answers.
            </h2>

            {/* Subheading */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Explore our frequently asked questions to learn more about our
              products, services, and partnerships.
            </p>

            {/* Categories - Desktop */}
            <div className="hidden lg:block">
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition ${
                      activeCategory === category
                        ? "bg-black text-white font-semibold"
                        : "bg-gray-100 text-gray-700 hover:bg-yellow-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Support Box */}
            <div className="mt-4">
              <p className="text-gray-800 font-semibold text-sm">
                Need More Info?
              </p>
              <p className="text-gray-600 text-xs mb-3">
                Couldn’t find what you were looking for? We’ve got answers.
              </p>
              <button
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold text-sm px-5 py-2.5 rounded-full shadow-md transition"
                onClick={() => navigate("/contact-us")}
              >
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full lg:w-3/5 space-y-2">
            {/* Categories Mobile */}
            <div className="block lg:hidden mb-2">
              <div className="flex flex-wrap gap-1">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-2 py-1 rounded-full text-xs ${
                      activeCategory === category
                        ? "bg-yellow-400 text-black font-semibold"
                        : "bg-gray-200 text-gray-700 hover:bg-yellow-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            {/* FAQ List */}
            {filteredFaqs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-gray-200 rounded-md p-3 shadow-sm"
              >
                <p className="text-gray-800 text-sm font-medium">
                  {item.question}
                </p>
                <p className="mt-2 text-gray-600 text-xs leading-snug border-t border-gray-100 pt-2">
                  {item.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer Small */}
        <div className="w-full mt-4">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default FAQ;
