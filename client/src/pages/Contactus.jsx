import React, { useState } from "react";
import Footer from "../components/Footer";
import supportImage from "../assets/images/contactusbg.png";
import Navbar from "../components/Navbar";
import email from "../assets/images/mail.png";
import call from "../assets/images/call.png";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
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
      alert("Please fill in at least First Name, Email, and Message.");
      return;
    }

    const submissions =
      JSON.parse(localStorage.getItem("contactSubmissions")) || [];
    submissions.push(formData);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    alert("Thank you! Your message has been saved locally.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+91",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <div className="pt-7 bg-[#FFFBF3]  min-h-screen px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        <Navbar />

        {/* Main Content */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-10 md:mt-12">
          {/* Heading Section */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Fresh <span className="text-green-600">Support</span>, Just Like
              Our <span className="text-yellow-500">Milk!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-extrabold mt-3 sm:mt-2 mx-auto leading-relaxed whitespace-nowrap overflow-x-auto">
              For any inquiries or assistance, connect with us directly—we're
              here to provide the support you need.
            </p>
          </div>
          {/* Form and Image Container */}
          <div className="flex flex-col  lg:flex-row items-center justify-between gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className="bg-white w-[380px] h-[448px] mb-13 mx-auto p-2 pb-10 shadow-md rounded-xl border border-amber-200">
              <h2 className="text-lg font-semibold mb-5 text-gray-800">
                Get in Touch!
              </h2>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name Fields */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full sm:w-1/2 p-3 border rounded-full text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full sm:w-1/2 p-3 border rounded-full text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="📧 Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-full text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  required
                />

                {/* Phone */}
                <div className="flex gap-3">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleChange}
                    className="p-3 border rounded-full text-sm w-1/4 focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
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
                    className="w-full p-3 border rounded-full text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder="How can we help?"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  maxLength="120"
                  className="w-full p-3 border rounded-lg text-sm focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none"
                  required
                ></textarea>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-full hover:bg-gray-800 transition duration-300 text-sm font-medium"
                >
                  Submit
                </button>

                {/* Terms */}
                <p className="text-[11px] text-center text-gray-500 mt-2">
                  By submitting, you agree to our{" "}
                  <strong>Terms & Conditions</strong> and{" "}
                  <strong>Privacy Policy</strong>.
                </p>
              </form>

              {/* Contact Info OUTSIDE the form */}
              <div className="w-full mt-  justify-between text-xs flex flex-col sm:flex-row  items-center ">
                <div className="flex items-center">
                  <img
                    src={email} // <-- import your icon at the top
                    alt="email icon"
                    className="w-4 h-4 mr-1"
                  />
                  <a
                    href="mailto:milckofficial@gmail.com"
                    className="underline mt-1 hover:text-green-600 transition-colors"
                  >
                    milckofficial@gmail.com
                  </a>
                </div>

                <div className="flex items-center">
                  <img
                    src={call} 
                    alt="phone icon"
                    className="w-4 h-4  mr-1"
                  />
                  <a
                    href="tel:+917567618996"
                    className="underline mt-1 hover:text-green-600 transition-colors"
                  >
                    +91 75676 18196
                  </a>
                </div>
              </div>
            </div>

          
            <div className="w-full mt-6 max-w-lg lg:max-w-2xl flex items-center justify-center order-first lg:order-last">
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
