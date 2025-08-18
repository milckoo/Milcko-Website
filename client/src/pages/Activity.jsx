import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Truck,
  Repeat,
  CreditCard,
  Recycle,
  Gift,
} from 'lucide-react';

// This is the main application component that renders the complete page.
export default function App() {
  // Simulating a list of recent activity data for the Milcko service.
  const activityData = [
    {
      id: 1,
      type: 'order_placed',
      user: 'You',
      description: 'Your next order of 2 bottles of cow milk has been placed.',
      timestamp: 'Just now',
    },
    {
      id: 2,
      type: 'delivery_scheduled',
      user: 'Milcko',
      description: 'Your delivery for Tuesday is scheduled.',
      timestamp: '1 hour ago',
    },
    {
      id: 3,
      type: 'subscription_updated',
      user: 'You',
      description: 'You updated your milk subscription to weekly delivery.',
      timestamp: '5 hours ago',
    },
    {
      id: 4,
      type: 'bottle_returned',
      user: 'Milcko',
      description: '4 empty bottles have been picked up and credited to your account.',
      timestamp: '1 day ago',
    },
    {
      id: 5,
      type: 'payment_processed',
      user: 'Milcko',
      description: 'Your monthly payment was successfully processed.',
      timestamp: '3 days ago',
    },
    {
      id: 6,
      type: 'new_offer',
      user: 'Milcko',
      description: 'A new offer is available: get a free butter with your next order!',
      timestamp: '4 days ago',
    },
  ];

  // A helper function to map activity types to icons.
  const getActivityIcon = (type) => {
    switch (type) {
      case 'order_placed':
        return <ShoppingCart className="text-blue-500" />;
      case 'delivery_scheduled':
        return <Truck className="text-green-500" />;
      case 'subscription_updated':
        return <Repeat className="text-purple-500" />;
      case 'payment_processed':
        return <CreditCard className="text-teal-500" />;
      case 'bottle_returned':
        return <Recycle className="text-yellow-500" />;
      case 'new_offer':
        return <Gift className="text-red-500" />;
      default:
        return <Gift className="text-gray-400" />;
    }
  };

  // Animation variants for the main container and list items.
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05, // Stagger the animation of child elements for a smooth effect.
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased text-gray-900 dark:text-white">
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 sm:p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Header Section --- */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400">
            <ShoppingCart size={24} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
              Your Milcko Activity
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Pure Milk. Fresh from Farm to Your Doorstep.
            </p>
          </div>
        </div>

        {/* --- Activity List Section --- */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {activityData.map((activity) => (
            <motion.div
              key={activity.id}
              className="flex items-start gap-4 py-6"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                {getActivityIcon(activity.type)}
              </div>
              {/* Content */}
              <div className="flex-1">
                <p className="text-gray-800 dark:text-white font-semibold">
                  <span className="font-bold text-gray-900 dark:text-gray-200">{activity.user}</span>{' '}
                  <span className="text-gray-600 dark:text-gray-400 font-normal">{activity.description}</span>
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  {activity.timestamp}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
