import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import faqImage from '../assets/images/faq.png';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const faqData = [
  {
    question: 'How do I place a new order?',
    answer: 'You can place your order directly through the MILCKO mobile app. Simply select your preferred milk type and delivery schedule.',
    category: 'Ordering & Delivery'
  },
  {
    question: 'Can I change my delivery address after placing an order?',
    answer: 'Yes, you can update your delivery address through your account settings before the next scheduled delivery.',
    category: 'Ordering & Delivery'
  },
  {
    question: 'What if I miss my delivery?',
    answer: 'Missed deliveries are usually rescheduled for the next available slot. You can also contact support for help.',
    category: 'Ordering & Delivery'
  },
  {
    question: 'Do you deliver on weekends and holidays?',
    answer: 'Yes, we deliver every day including weekends. For holidays, schedules may vary and will be notified in advance.',
    category: 'Ordering & Delivery'
  },
  {
    question: 'How fresh is your milk?',
    answer: 'Our milk is delivered fresh daily from our farms. We ensure it reaches you within hours of milking.',
    category: 'Milk Quality'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept various payment methods including credit/debit cards, UPI, net banking, and cash on delivery.',
    category: 'Payments & Plans'
  },
  {
    question: 'How can I reset my password?',
    answer: 'You can reset your password using the "Forgot Password" link on the login page of our app or website.',
    category: 'Account Help'
  }
];

const categories = [
  'All Questions',
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
  const [activeCategory, setActiveCategory] = useState('All Questions');

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = activeCategory === 'All Questions' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  return (
    <> 

    <div className="sticky top-0 mb-15 z-50">
      <Navbar />
    </div>
    <div className="bg-[#fefcf8] min-h-screen">
     
      
      {/* Hero Section with Image */}
      <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden top-5">
        <img
          src={faqImage}
          alt="FAQ Illustration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center px-4">
            Frequently Asked Questions
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Category Filters - Mobile */}
        <div className="lg:hidden mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Filter by Category:</h3>
          <select 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
          >
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column - Text + Categories */}
          <div className="w-full lg:w-2/5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                Have <span className="text-green-600">Questions</span>? We've Got Answers.
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Explore our frequently asked questions to learn more about our products,
                services, and partnerships.
              </p>
            </div>

            {/* Category Chips - Desktop */}
            <div className="hidden lg:block">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Browse by Category:</h3>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm transition-colors ${
                      activeCategory === category
                        ? 'bg-yellow-400 text-black font-semibold'
                        : 'bg-gray-200 text-gray-700 hover:bg-yellow-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Support Section */}
            <div className="bg-yellow-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Need More Info?</h3>
              <p className="text-gray-600 text-sm mb-4">
                Couldn't find what you were looking for? We're here to help!
              </p>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full transition-colors w-full sm:w-auto">
                Contact Support
              </button>
            </div>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="w-full lg:w-3/5 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {activeCategory === 'All Questions' ? 'All Questions' : `${activeCategory} Questions`}
            </h3>
            
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full text-left font-medium text-gray-800 text-lg"
                  >
                    <span className="pr-4">{item.question}</span>
                    <span className="text-xl flex-shrink-0">
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
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-gray-600 text-base leading-relaxed border-t border-gray-100 pt-3">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No questions found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12">
        <Footer />
      </div>
    </div>
    </>
  );
};

export default FAQ;