import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqImage from '../assets/images/faq.png';
import Footer from '../components/Footer';

const faqData = [
  {
    question: 'How do I place a new order?',
    answer:
      'You can place your order directly through the MILCKO mobile app. Simply select your preferred milk type and delivery schedule.',
  },
  {
    question: 'Can I change my delivery address after placing an order?',
    answer:
      'Yes, you can update your delivery address through your account settings before the next scheduled delivery.',
  },
  {
    question: 'What if I miss my delivery?',
    answer:
      'Missed deliveries are usually rescheduled for the next available slot. You can also contact support for help.',
  },
  {
    question: 'Do you deliver on weekends and holidays?',
    answer:
      'Yes, we deliver every day including weekends. For holidays, schedules may vary and will be notified in advance.',
  },
];

const categories = [
  'Ordering & Delivery',
  'Milk Quality',
  'Payments & Plans',
  'Account Help',
  'Payouts & Earnings',
  'Quality Guidelines',
  'About MILCKO',
  'Future Plans',
  'Sustainability',
  'Trial Pack',
  'Milk Collection',
  'App Support',
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#fefcf8]  min-h-screen ">
      {/* Centered Image */}
    <div className="w-full overflow-hidden bg-black/40 mb-20">
  <img
    src={faqImage}
    alt="FAQ Illustration"
    className="w-full max-h-[450px] object-cover"
  />
</div>


      {/* Main Grid */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Column - Text + Categories */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Have <span className="text-green-600">Questions</span>? We’ve Got Answers.
            </h2>
            <p className="text-gray-600 text-base font-medium">
              Explore our frequently asked questions to learn more about our products,
              services, and partnerships.
            </p>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <span
                key={index}
                className="bg-gray-200 text-sm px-4 py-1.5 rounded-full cursor-pointer hover:bg-yellow-100 transition"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Support Button */}
          <div className="pt-6">
            <p className="text-sm text-gray-500">Need More Info?</p>
            <p className="text-sm text-gray-500 mb-3">
              Couldn’t find what you were looking for? We’ve got answers.
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-2 rounded-full transition">
              Contact Support
            </button>
          </div>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="w-full lg:w-1/2 space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg p-4 shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-800 text-lg"
              >
                {item.question}
                <span className="text-xl">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

<div className='mt-20'>
{/* Footer */}
      <Footer />
</div>
      
    </div>
  );
};

export default FAQ;
