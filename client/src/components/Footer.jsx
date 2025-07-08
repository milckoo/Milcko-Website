import React from "react";

import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

import footerBg from "../assets/images/footerbg.png";
import logoIcon from "../assets/logos/milcko.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  return (
    <footer className="relative bg-[#121212] text-white py-1 px-6 md:px-12 overflow-hidden text-sm">
      
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src={footerBg}
          alt="Footer background"
          className="w-full h-full object-cover"
        />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 pt-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
       
        <motion.div
          className="flex flex-col items-center"
          variants={fadeUp}
          transition={{ delay: 0.1 }}
        >
          <img
            src={logoIcon}
            alt="Milcko Logo"
            className="h-50 w-auto object-contain mt-25"
          />
          <p className="text-gray-300 mb-4  leading-relaxed">
            Sip the goodness of the nature.
          </p>
          <div className="flex gap-4 text-orange-500 text-base">
            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaYoutube].map(
              (Icon, i) => (
                <Icon
                  key={i}
                  className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110 cursor-pointer"
                />
              )
            )}
          </div>
        </motion.div>

      
        <motion.div
          className="flex flex-col mt-20 items-center"
          variants={fadeUp}
          transition={{ delay: 0.2 }}
        >
          <h3 className="font-semibold mt-15 text-white mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "About Us",
             <Link
          to="/our-farmers"
        >
          Our Farmers
        </Link>,
            <Link to="/our-process">Our Process</Link>,
              <Link to="/sustainability">
  <button >Sustainability</button>
</Link>,
              "Careers",
              "Testimonials",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Support */}
        <motion.div
          className="flex flex-col items-center"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <h3 className="font-semibold mt-35 text-white mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            {[
              "FAQs",
              "Contact Us",
              "Delivery Areas",
              "Return & Refund Policy",
              "Terms & Conditions",
              "Privacy Policy",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-yellow-400 transition duration-300 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* App Download + Contact */}
        <motion.div
          className="flex flex-col items-center"
          variants={fadeUp}
          transition={{ delay: 0.4 }}
        >
          <h3 className="font-semibold pt-10 text-white mb-4">Download App</h3>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <motion.a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="h-10"
              />
            </motion.a>
            <motion.a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
            </motion.a>
          </div>
          <p className="text-gray-300 mt-9 leading-relaxed">
            <strong className="text-white">Our Address:</strong>
            <br />
            Kalchuri LNCT Incubation Centre, LNCTE,
            <br />
            Kalchuri Nagar, Raisen Road,
            <br />
            Bhopal, Madhya Pradesh – 462022
          </p>
          <p className="mt-4 text-gray-300">
            <strong className="text-white">Need Assistance?</strong>
            <br />
            <a
              href="mailto:milckoofficial@gmail.com"
              className="underline hover:text-yellow-400"
            >
              milckoofficial@gmail.com
            </a>
            <br />
            <a
              href="tel:+917387018156"
              className="underline hover:text-yellow-400"
            >
              +91 73870 18156
            </a>
            <br />
            <br />
               <a
              href="mailto:milckoofficial@gmail.com"
              className=" hover:text-yellow-400"
            >
             
            </a>
          </p>
        </motion.div>
      </motion.div>

      {/* Copyright */}
      <motion.div
        className="relative z-10 text-center text-gray-500 text-xs mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        © 2025 Milcko | Pure. Fresh. Delivered with Care. All Rights Reserved.

       
      </motion.div>
       <div className=" pb-10 pl-281">  Made By : Ayush Bunkar</div>
    </footer>
  );
};

export default Footer;
