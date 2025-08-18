import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const OrderConfirmation = () => {
  // Generate a random order number
  const orderNumber = `MK-${Math.floor(100000 + Math.random() * 900000)}`;

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="bg-white p-8 rounded-lg shadow-md text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CheckCircleIcon className="mx-auto h-20 w-20 text-green-500" />
          
          <h1 className="mt-4 text-3xl font-bold text-gray-900">Order Confirmed!</h1>
          
          <p className="mt-2 text-lg text-gray-600">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-md inline-block">
            <p className="text-gray-700">Order Number:</p>
            <p className="text-xl font-bold text-gray-900">{orderNumber}</p>
          </div>
          
          <div className="mt-8 text-left border-t border-gray-200 pt-6">
            <h2 className="text-xl font-medium text-gray-900 mb-4">What happens next?</h2>
            
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="bg-yellow-100 text-yellow-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">1</span>
                <div>
                  <p className="font-medium">Order Confirmation Email</p>
                  <p className="text-gray-600">You will receive an email with your order details.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-yellow-100 text-yellow-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">2</span>
                <div>
                  <p className="font-medium">Order Processing</p>
                  <p className="text-gray-600">We'll prepare your items for shipping within 24 hours.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <span className="bg-yellow-100 text-yellow-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">3</span>
                <div>
                  <p className="font-medium">Shipping</p>
                  <p className="text-gray-600">Once shipped, you'll receive tracking information via email.</p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/dashboard"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              View My Orders
            </Link>
            
            <Link
              to="/products"
              className="px-6 py-3 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderConfirmation;