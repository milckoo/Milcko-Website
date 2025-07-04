import React, { useState } from 'react';
import Footer from '../components/Footer';
import supportImage from '../assets/images/contactusbg.png';


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

    // Basic validation
    if (!formData.firstName || !formData.email || !formData.message) {
      alert('Please fill in at least First Name, Email, and Message.');
      return;
    }

    // Store in localStorage
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
    <div className="pt-32 mt-10 bg-[#fefcf8] min-h-screen px-6 sm:px-10">
      {/* Centered Heading at Top */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Fresh <span className="text-green-600">Support</span>, Just Like Our <span className="text-yellow-500">Milk!</span>
        </h1>
        <p className="text-gray-700 mt-2 text-2xl ">
          For any inquiries or assistance, connect with us directly—we’re here to provide the support you need.
        </p>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left Side - Form */}
        <div className="bg-white w-full max-w-md p-8  shadow-2xs shadow-yellow-400 rounded-xl border">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Get in Touch!</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-md text-sm"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-3 border rounded-md text-sm"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-md text-sm"
            />
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="p-3 border rounded-md text-sm"
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
                className="w-full p-3 border rounded-md text-sm"
              />
            </div>
            <textarea
              name="message"
              placeholder="How can we help?"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border rounded-md text-sm"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition"
            >
              Submit
            </button>
            <p className="text-xs text-center  text-gray-500 mt-2">
              By submitting, you agree to our <strong>Terms & Conditions</strong> and <strong>Privacy Policy</strong>.
            </p>
          </form>
        </div>
{/* Right Side - Full Height and Bigger Image */}
<div className="w-full pt-10 h-full flex items-center justify-center">
  <img
    src={supportImage}
    alt="Support Illustration"
    className="w-full h-full object-cover   min-h-[450px] max-w-[900px]"
  />
</div>

      

      </div>

      {/* Footer */}
      <div className="bg-gray-100 mt-10 px-8 py-4 text-sm  flex gap-10 items-center text-center  text-gray-700 rounded-md">
        <div>
          📧 <a href="mailto:milckofficial@gmail.com" className="underline">milckofficial@gmail.com</a>
        </div>
        <div>
          📞 <a href="tel:+917567618996" className="underline">+91 75676 18196</a>
        </div>
      </div>
        <Footer />
    
    </div>
 
  );
};

   

export default Contactus;
