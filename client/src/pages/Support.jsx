// import React from 'react';
// import FAQs from './FAQs';

// const Support = () => {
//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-4">Support</h2>
//       <FAQs />
//     </div>
//   );a
// };

// export default Support;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail, Phone, HelpCircle } from 'lucide-react';
import UserDashboardSidebar from '../components/UserDashboardSidebar';

// This is the main application component that renders the complete page.
export default function App() {
  // State to manage which FAQ item is currently open.
  const [openFaq, setOpenFaq] = useState(null);

  // Define a simple list of FAQ items.
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page. An email with instructions will be sent to you.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, including Visa, Mastercard, and American Express. We also support PayPal and Google Pay.",
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach our support team via the contact form below or by emailing us directly at support@example.com.",
    },
    {
      question: "Where can I find my order history?",
      answer: "Your order history is available in your account dashboard under the 'Orders' section. You must be logged in to view it.",
    },
  ];

  // Function to toggle the open/close state of an FAQ item.
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Define animation variants for the components.
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of child elements.
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#FFFBF3] dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased text-gray-900 dark:text-white">
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Header Section --- */}
        <div className="text-center mb-12">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500 mb-4"
            variants={itemVariants}
          >
            How can we help?
          </motion.h1>
          <motion.p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto" variants={itemVariants}>
            We're here to assist you with any questions or issues you may have. Explore our FAQ or get in touch with our team.
          </motion.p>
        </div>

        {/* --- FAQ Section (Accordion) --- */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
            <HelpCircle className="w-8 h-8 mr-3 text-blue-500" />
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm">
                {/* FAQ Header */}
                <motion.button
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg text-gray-800 dark:text-white bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  onClick={() => toggleFaq(index)}
                  initial={false}
                  animate={{
                    backgroundColor: openFaq === index ? 'var(--tw-bg-gray-100)' : 'var(--tw-bg-gray-50)',
                    color: openFaq === index ? 'var(--tw-text-blue-600)' : 'var(--tw-text-gray-800)',
                  }}
                  whileTap={{ scale: 0.99 }}
                >
                  {faq.question}
                  <motion.div
                    className="ml-2"
                    initial={false}
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
                {/* FAQ Content with AnimatePresence for exit animations */}
                <AnimatePresence initial={false}>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="p-6 text-gray-600 dark:text-gray-300"
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.section>

        {/* --- Contact Form Section --- */}
        <motion.section className="mb-12" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
            <Mail className="w-8 h-8 mr-3 text-blue-500" />
            Contact Us
          </h2>
          <motion.div
            className="p-8 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-700"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <form className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                  placeholder="Your Name"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                  placeholder="you@example.com"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-800 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                  placeholder="Describe your issue or question..."
                ></textarea>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.section>

        {/* --- Footer Contact Info --- */}
        <motion.div className="text-center mt-12" variants={itemVariants}>
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">Need immediate assistance?</h3>
          <p className="text-gray-600 dark:text-gray-300 flex justify-center items-center">
            <Phone className="w-5 h-5 mr-2" />
            Call us at 
            <a href="tel:1-800-555-0199" className="text-blue-600 dark:text-blue-400 hover:underline ml-1 transition-colors duration-200">
              1-800-555-0199
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
