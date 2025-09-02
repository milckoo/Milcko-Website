import React, { useState } from 'react';
import trialImage from '../assets/images/leftmilkbottle.png';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const TrialPack = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    packType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('trialPackForm', JSON.stringify(formData));
    alert('Thank you! Your request has been saved.');
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      packType: '',
    });
  };

  return (
    <div className="bg-[#fefcf8] min-h-screen w-full overflow-x-hidden">
      <Navbar />
      
      {/* Heading Section */}
      <div className="text-center pt-24 pb-8 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Taste The <span className="text-yellow-500">Difference</span>!
        </h1>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
          Try our Trial Pack—a convenient way to experience the quality and taste of our A2 Cow Milk and A2 Buffalo Milk, 
          before making it a part of your daily routine. Because your first impression matters to us.
        </p>
      </div>

      {/* Layout Container */}
      <div className="flex flex-col lg:flex-row   w-full max-w-7xl  ml-0 mb-10">
        {/* Left Side - Image */}
        <div className="w-full flex  lg:justify-start lg:mb-0 ml-0">
          <motion.img
            src={trialImage}
            alt="Trial Milk Bottle"

            className="w-full  md:max-w-lg   ml-0 "
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-xl shadow-xl"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center sm:text-left">
              Get Your Trial Pack!
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full sm:w-1/2 border p-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 border p-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <div className="flex gap-2">
                <select
                  name="countryCode"
                  className="p-3 border rounded-md text-sm w-1/4 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  defaultValue="+91"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                </select>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border p-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                rows={3}
                maxLength={150}
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full border p-3 rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
              />

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-gray-600">
                  Select Trial Pack Type:
                </label>
                <div className="flex flex-col sm:flex-row sm:gap-6 gap-3">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="packType"
                      value="A2 Cow Milk"
                      checked={formData.packType === 'A2 Cow Milk'}
                      onChange={handleChange}
                      required
                      className="mr-2"
                    />
                    <span className="text-sm">A2 Cow Milk</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="packType"
                      value="A2 Buffalo Milk"
                      checked={formData.packType === 'A2 Buffalo Milk'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm">A2 Buffalo Milk</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="packType"
                      value="Both"
                      checked={formData.packType === 'Both'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    <span className="text-sm">Both</span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300 font-medium"
              >
                Submit Request
              </button>

              <p className="text-xs text-center text-gray-500 mt-3">
                By submitting, you agree to our{' '}
                <a href="/terms-conditions" className="text-yellow-600 hover:underline font-semibold">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="/privacy-policy" className="text-yellow-600 hover:underline font-semibold">
                  Privacy Policy
                </a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="bg-yellow-50 rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
            What's Included in Your Trial Pack?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white p-4 rounded-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🥛</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Fresh Milk</h4>
              <p className="text-sm text-gray-600">500ml of premium A2 milk</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📦</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Free Delivery</h4>
              <p className="text-sm text-gray-600">At your convenient time</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎁</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Special Offer</h4>
              <p className="text-sm text-gray-600">Discount on first subscription</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TrialPack;