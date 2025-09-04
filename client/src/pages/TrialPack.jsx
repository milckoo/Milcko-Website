import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bottleImage from "../assets/images/leftmilkbottle.png"; // replace with correct path

const TrialPack = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    phone: "",
    countryCode: "+91",
    email: "",
    deliveryAddress: "",
    packType: "A2 Cow Milk",
  });

  const [addressLength, setAddressLength] = React.useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === "deliveryAddress") {
      setAddressLength(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! Check the console for the data.");
    console.log("Trial Pack Form Data:", formData);
  };

  return (
    <>
      <div className=" bg-[#FFFBF3]">
        <div className="sticky top-0  z-50">
        <Navbar />
      </div>

      <div className="text-center bg-[#FFFBF3] mt-20 max-w-4xl mx-auto px-4">
        {/* Heading */}
        <h1 className="text-3xl bg-[#FFFBF3] sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Taste The <span className="text-yellow-600">Difference!</span>
        </h1>

        {/* Subheading */}
        <p className="text-gray-600 mt-3 text-base sm:text-lg leading-relaxed max-w-8xl mx-auto">
          Try our Trial Pack—a convenient way to experience the quality and taste of our A2 Cow Milk and A2 Buffalo Milk, before
                          making it a part of your daily routine. Because your first impression matters to us.
        </p>
      </div>

      <div className="bg-[#FFFBF3] min-h-[100vh] w-full flex flex-col lg:flex-row items-center justify-between py-8 lg:py-0 font-sans">
       
       
        {/* LEFT SIDE (Image) */}
        <div className="w-full lg:w-[40%] flex justify-start relative">
          <img
            src={bottleImage}
            alt="Trial Pack Bottle"
            className="h-auto w-[20rem] sm:w-[18rem] md:w-[20rem] lg:w-[25rem] object-contain"
          />
        </div>

        {/* RIGHT SIDE (Text + Form) */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start lg:ml-8 px-6 lg:px-0">
          {/* Heading + Subtext */}

          {/* Form */}
          <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-2 rounded-2xl shadow-lg border border-gray-200 w-full max-w-md">
            <div className="bg-white/90 backdrop-blur-sm p-2 sm:p-2 rounded-2xl shadow-lg border border-gray-200 w-full max-w-md mx-auto">
              <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                Get Your Trial Pack!
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    onChange={handleChange}
                    value={formData.firstName}
                    className="w-full p-3 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-yellow-400"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    onChange={handleChange}
                    value={formData.lastName}
                    className="w-full p-3 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                <div className="flex items-center border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-yellow-400">
                  <select
                    name="countryCode"
                    onChange={handleChange}
                    value={formData.countryCode}
                    className="bg-transparent p-3 text-sm border-r border-gray-300 focus:outline-none pl-4"
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    onChange={handleChange}
                    value={formData.phone}
                    className="w-full p-3 bg-transparent border-none focus:ring-0 text-sm"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.email}
                  className="w-full p-3 border border-gray-300 rounded-full text-sm focus:ring-2 focus:ring-yellow-400"
                  required
                />

                <div className="relative">
                  <textarea
                    name="deliveryAddress"
                    placeholder="Delivery Address"
                    rows="3"
                    maxLength="150"
                    onChange={handleChange}
                    value={formData.deliveryAddress}
                    className="w-full p-3 border border-gray-300 rounded-2xl text-sm focus:ring-2 focus:ring-yellow-400 resize-none"
                    required
                  ></textarea>
                  <span className="absolute bottom-2 right-3 text-xs text-gray-400">
                    {addressLength}/150
                  </span>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Select Trial Pack Type
                  </p>
                  <div className="flex items-center space-x-6">
                    {["A2 Cow Milk", "A2 Buffalo Milk", "Both"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center cursor-pointer text-sm"
                      >
                        <input
                          type="radio"
                          name="packType"
                          value={type}
                          checked={formData.packType === type}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center mr-2 ${
                            formData.packType === type
                              ? "border-yellow-500"
                              : "border-gray-300"
                          }`}
                        >
                          {formData.packType === type && (
                            <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                          )}
                        </span>
                        {type}
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white font-bold py-3.5 rounded-full hover:bg-black transition-colors duration-300"
                >
                  Submit
                </button>

                <p className="text-xs text-center text-gray-500">
                  By submitting, you agree to our{" "}
                  <strong className="font-medium text-gray-700">
                    Terms & Conditions
                  </strong>{" "}
                  and{" "}
                  <strong className="font-medium text-gray-700">
                    Privacy Policy
                  </strong>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </>
  );
};

export default TrialPack;
