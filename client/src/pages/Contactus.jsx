import React, { useState } from 'react';
import Footer from '../components/Footer';
import supportImage from '../assets/images/contactusbg.png';
import Navbar from '../components/Navbar';

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+91',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in at least First Name, Email, and Message.');
      return;
    }

    const submissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    submissions.push(formData);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));

    alert('Thank you! Your message has been saved locally.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      countryCode: '+91',
      phone: '',
      message: '',
    });
  };

  return (
    <>
    <div className="pt-20 bg-[#fefcf8] min-h-screen px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <Navbar />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12">
        {/* Heading Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Fresh <span className="text-green-600">Support</span>, Just Like Our <span className="text-yellow-500">Milk!</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 mt-3 sm:mt-4 max-w-3xl mx-auto leading-relaxed">
            For any inquiries or assistance, connect with us directly—we're here to provide the support you need.
          </p>
        </div>

        {/* Form and Image Container */}
        <div className="flex flex-col lg:flex-row mb-20 items-center justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white w-full max-w-md mx-auto lg:mx-0 p-6 sm:p-8 shadow-lg rounded-xl border">
            <h2 className="text-xl font-semibold mb-4 sm:mb-6 text-gray-800">Get in Touch!</h2>
            <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-3 border rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full sm:w-1/2 p-3 border rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="📧 Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              />
              <div className="flex gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="p-3 border rounded-md text-sm w-1/4 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
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
                  className="w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                />
              </div>
              <textarea
                name="message"
                placeholder="How can we help?"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300 font-medium"
              >
                Submit
              </button>
              <p className="text-xs text-center text-gray-500 mt-2">
                By submitting, you agree to our <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong>.
              </p>
            </form>


               {/* Contact Info */}
        <div className="w-full py-6 sm:py-8 text-sm sm:text-base flex flex-col sm:flex-row justify-center items-center sm:items-start">
          <div className="flex items-center">
            <span className="mr-1">📧</span>
            <a href="mailto:milckofficial@gmail.com" className="underline hover:text-green-600 transition-colors">
              milckofficial@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-2">📞</span>
            <a href="tel:+917567618996" className="underline hover:text-green-600 transition-colors">
              +91 75676 18196
            </a>
          </div>
        </div>
          </div>

          {/* Support Image */}
          <div className="w-full max-w-lg lg:max-w-2xl flex items-center justify-center order-first lg:order-last">
            <img
              src={supportImage}
              alt="Support Illustration"
              className="w-full h-auto object-cover max-h-[400px] sm:max-h-[450px] md:max-h-[500px] rounded-lg shadow-md"
            />
          </div>
        </div>

     
      </div>

     
    </div>

     <Footer />
     </>
  );
};

export default Contactus;