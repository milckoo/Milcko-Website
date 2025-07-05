import React, { useState } from 'react';
import trialImage from '../assets/images/leftmilkbottle.png';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

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
    <div className="bg-[#fefcf8] min-h-screen w-full overflow-hidden">
      {/* Heading */}
      <div className="text-center pt-24 pb-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Taste The <span className="text-yellow-500">Difference</span>!
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl max-w-4xl font-semibold mx-auto">
          Try our Trial Pack—a convenient way to experience the quality and taste of our A2 Cow Milk and A2 Buffalo Milk, 
          before making it a part of your daily routine. Because your first impression matters to us.
        </p>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Left Side - Image Flush Left */}
        <div className="w-full lg:w-1/2 flex items-center lg:pl-0 pl-4">
  <img
    src={trialImage}
    alt="Trial Milk Bottle"
    className="w-full max-w-[700px] object-contain ml-0"
  />
</div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex mr-30 items-center  justify-center px-6 py-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white w-full max-w-lg p-8 rounded-xl shadow-2xl shadow-amber-300 "
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Get Your Trial Pack!</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-1/2 border p-3 rounded-md text-sm"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-1/2 border p-3 rounded-md text-sm"
                />
              </div>

              <div className="flex gap-2">
                <select
                  name="countryCode"
                  className="p-3 border rounded-md text-sm"
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
                  className="w-full border p-3 rounded-md text-sm"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded-md text-sm"
              />

              <textarea
                name="address"
                placeholder="Delivery Address"
                rows={2}
                maxLength={150}
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-3 rounded-md text-sm"
              />

              <div>
                <label className="block mb-2 text-sm font-semibold text-gray-600">
                  Select Trial Pack Type:
                </label>
                <div className="flex gap-6">
                  <label>
                    <input
                      type="radio"
                      name="packType"
                      value="A2 Cow Milk"
                      checked={formData.packType === 'A2 Cow Milk'}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    A2 Cow Milk
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="packType"
                      value="A2 Buffalo Milk"
                      checked={formData.packType === 'A2 Buffalo Milk'}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    A2 Buffalo Milk
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="packType"
                      value="Both"
                      checked={formData.packType === 'Both'}
                      onChange={handleChange}
                      className="mr-1"
                    />
                    Both
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
              >
                Submit
              </button>

              <p className="text-xs text-center text-gray-500 mt-2">
                By submitting, you agree to our <strong>Terms & Conditions</strong> and{' '}
                <strong>Privacy Policy</strong>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default TrialPack;
