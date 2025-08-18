import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import footerBg from "../assets/images/footerbg.png";
import logoIcon from "../assets/logos/milcko.png";

const Footer = () => {
  return (
    <footer className="relative bg-[#121212] text-white py-4 px-6 md:px-12 text-sm">
      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src={footerBg}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
      </div>

   
      <div className="relative z-10 max-w-7xl justify-center mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left pt-6">
        
       
        <div className="flex flex-col content-center mt-10  items-start space-y-2">
          <img
            src={logoIcon}
            alt="Milcko Logo"
            className="h-40 w-auto justify-center  object-contain"
          />
          <p className="text-gray-300 leading-relaxed text-sm">
            Sip the goodness of the nature.
          </p>
          <div className="flex gap-7 text-orange-500 text-base">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-yellow-400 transition duration-300 cursor-pointer"
                />
              )
            )}
          </div>
        </div>

       
        <div className="flex flex-col">
          <h3 className="font-semibold text-base mt-10 text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              <Link to="/about-us" className="text-gray-300 hover:text-yellow-400">About Us</Link>,
              <Link to="/our-farmers" className="text-gray-300 hover:text-yellow-400">Our Farmers</Link>,
              <Link to="/our-process" className="text-gray-300 hover:text-yellow-400">Our Process</Link>,
              <Link to="/sustainability" className="text-gray-300 hover:text-yellow-400">Sustainability</Link>,
              <Link to="/careers" className="text-gray-300 hover:text-yellow-400">Careers</Link>,
              <Link to="/testimonials" className="text-gray-300 hover:text-yellow-400">Testimonials</Link>,
            ].map((item, i) => (
              <li
                key={i}
                className="transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

       
        <div className="flex flex-col">
          <h3 className="font-semibold text-base mt-10 text-white mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              <Link to="/faqs" className="text-gray-300 hover:text-yellow-400">FAQs</Link>,
              <Link to="/contactus" className="text-gray-300 hover:text-yellow-400">Contact Us</Link>,
              <Link to="/delivery-areas" className="text-gray-300 hover:text-yellow-400">Delivery Areas</Link>,
              <Link to="/return-policy" className="text-gray-300 hover:text-yellow-400">Return & Refund Policy</Link>,
              <Link to="/terms-conditions" className="text-gray-300 hover:text-yellow-400">Terms & Conditions</Link>,
              <Link to="/privacy-policy" className="text-gray-300 hover:text-yellow-400">Privacy Policy</Link>,
            ].map((item, i) => (
              <li
                key={i}
                className="transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

      
        <div className="flex flex-col space-y-6">
          <div>
            <h3 className="font-semibold text-base mt-10 text-white mb-4">Download App</h3>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  className="h-10"
                />
              </a>
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          <div className="text-gray-300 text-sm space-y-4">
            <p className="leading-relaxed">
              <strong className="text-white">Our Address:</strong>
              <br />
              Kalchuri LNCT Incubation Centre, LNCTE,
              <br />
              Kalchuri Nagar, Raisen Road,
              <br />
              Bhopal, Madhya Pradesh – 462022
            </p>

            <p>
              <strong className="text-white">Need Assistance?</strong>
              <br />
              <a
                href="mailto:milckoofficial@gmail.com"
                className="underline text-gray-300 hover:text-yellow-400"
              >
                milckoofficial@gmail.com
              </a>
              <br />
              <a
                href="tel:+917387018156"
                className="underline text-gray-300 hover:text-yellow-400"
              >
                +91 73870 18156
              </a>
            </p>
          </div>
        </div>
      </div>

   
      <div className="relative z-10 text-center text-gray-500 text-xs mt-8">
        © 2025 Milcko | Pure. Fresh. Delivered with Care. All Rights Reserved.
      </div>
      <div className="text-xs text-left pl-4 pt-2 pb-6">
        Made By: Ayush Bunkar
      </div>
    </footer>
  );
};

export default Footer;
