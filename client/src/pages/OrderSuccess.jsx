import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const OrderSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderId, paymentId, amount } = location.state || {};

  useEffect(() => {
    if (orderId && paymentId && amount) {
      fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderId,
          paymentId,
          amount,
          // add other order details here if needed
        }),
      })
        .then((res) => res.json())
        .catch((err) => {
          // handle error if needed
        });
    }
  }, [orderId, paymentId, amount]);

  return (
    <div className="min-h-screen flex flex-col justify-between pt-24 bg-yellow-50">
      <div className="flex-grow flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center max-w-2xl w-full"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 20 }}
            className="mx-auto mb-6 h-20 w-20 flex items-center justify-center rounded-full bg-green-100"
          >
            <svg
              className="h-12 w-12 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-4">
            Thank You for Your Order!
          </h1>
          <p className="text-yellow-700 text-lg mb-6">
            Your payment was successful and your order is confirmed.
          </p>

          <div className="bg-yellow-100 border-2 border-dashed border-yellow-300 rounded-xl p-4 inline-block mb-8">
            <span className="text-yellow-800 font-bold">Order ID: </span>
            <span className="font-mono text-yellow-900">{orderId}</span>
          </div>

          <p className="text-yellow-600 mb-8">
            You will receive an email confirmation shortly.
          </p>

          <Link
            to="/products"
            className="inline-block w-full max-w-xs bg-yellow-400 text-black font-bold py-3 px-6 rounded-xl hover:bg-yellow-500 text-center transition-transform transform hover:scale-105"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default OrderSuccess;