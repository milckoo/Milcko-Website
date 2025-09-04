import React from "react";
import { motion } from "framer-motion";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Regular Customer",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content: "I've been getting Milcko's milk delivered for over a year now, and the difference in taste is incredible. My kids love it, and I love knowing exactly where it comes from.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Chef & Restaurant Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content: "As a chef, quality ingredients are everything. Milcko's dairy products have transformed my desserts and sauces. The rich, creamy texture is unmatched.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Nutritionist",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      content: "I recommend Milcko to all my clients. The nutritional profile is superior to mass-produced options, and you can really taste the difference that ethical farming practices make.",
      rating: 5
    },
    {
      name: "David Wilson",
      role: "Coffee Shop Owner",
      image: "https://randomuser.me/api/portraits/men/86.jpg",
      content: "Our lattes have never been better since switching to Milcko. Our customers constantly comment on the rich, creamy texture of our coffee drinks now.",
      rating: 4
    },
    {
      name: "Priya Patel",
      role: "Mother of Three",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
      content: "The subscription service is a lifesaver for our busy household. Fresh milk delivered right to our doorstep twice a week - one less thing to worry about!",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Fitness Trainer",
      image: "https://randomuser.me/api/portraits/men/53.jpg",
      content: "The high protein content in Milcko's Greek yogurt is perfect for my post-workout recovery. Clean ingredients, great taste, and supports local farmers.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-[#FFFBF3] min-h-screen pt-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers Say
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from the people who enjoy Milcko products every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-yellow-50 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Customer Satisfaction</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">98%</div>
              <p className="text-gray-700">Customers rate us 4+ stars</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">24k+</div>
              <p className="text-gray-700">Happy households</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">92%</div>
              <p className="text-gray-700">Subscription renewal rate</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers enjoying fresh, ethically-produced dairy products.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full shadow-md"
          >
            Start Your Order
          </motion.button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Testimonials;