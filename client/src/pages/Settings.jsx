import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Package,
  Bell,
  LogOut,
  Save,
  CheckCircle,
} from 'lucide-react';

// This is the main application component that renders the complete settings page.
export default function App() {
  // State for user profile details (simulated)
  const [profile, setProfile] = useState({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    address: '123 Farm Lane, Village, USA',
  });

  // State for a simple notification toggle
  const [receiveEmails, setReceiveEmails] = useState(true);

  // Animation variants for the main container and content sections.
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1, // Stagger the animation of child elements.
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  
  // A simple handler to simulate saving changes.
  const handleSaveChanges = (e) => {
    e.preventDefault();
    console.log("Saving changes:", profile);
    // In a real app, this would be an API call to save the data.
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased text-gray-900 dark:text-white">
      <motion.div
        className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Header Section --- */}
        <div className="flex items-center gap-4 mb-10 border-b border-gray-200 dark:border-gray-700 pb-6">
          <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400">
            <User size={32} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-400 dark:to-indigo-500">
              Account Settings
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Manage your personal information and preferences.
            </p>
          </div>
        </div>

        {/* --- Profile Information Section --- */}
        <motion.section
          className="mb-10"
          variants={sectionVariants}
        >
          <div className="flex items-center mb-6">
            <User className="w-6 h-6 mr-3 text-blue-500" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Profile Information
            </h2>
          </div>
          <form className="space-y-6" onSubmit={handleSaveChanges}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={profile.name}
                  onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={profile.email}
                  onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Delivery Address
              </label>
              <textarea
                id="address"
                rows="3"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white p-3 transition-colors duration-200"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Save className="w-5 h-5 mr-2" />
              Save Changes
            </motion.button>
          </form>
        </motion.section>

        {/* --- Subscription Details Section --- */}
        <motion.section
          className="mb-10"
          variants={sectionVariants}
        >
          <div className="flex items-center mb-6">
            <Package className="w-6 h-6 mr-3 text-green-500" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Subscription Details
            </h2>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
            <p className="text-lg font-semibold text-gray-800 dark:text-white">Current Plan: <span className="text-green-600 dark:text-green-400">Weekly Delivery</span></p>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              Next delivery scheduled for **Wednesday**. You are currently receiving 2 bottles of cow milk per week.
            </p>
            <motion.button
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Manage Subscription
            </motion.button>
          </div>
        </motion.section>

        {/* --- Notification Preferences Section --- */}
        <motion.section
          className="mb-10"
          variants={sectionVariants}
        >
          <div className="flex items-center mb-6">
            <Bell className="w-6 h-6 mr-3 text-yellow-500" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Notification Preferences
            </h2>
          </div>
          <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
            <div className="flex items-center justify-between">
              <label htmlFor="email-notifications" className="text-lg font-medium text-gray-800 dark:text-white">
                Receive promotional emails
              </label>
              <motion.button
                onClick={() => setReceiveEmails(!receiveEmails)}
                className={`relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  receiveEmails ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600'
                }`}
                role="switch"
                aria-checked={receiveEmails}
              >
                <span
                  className={`pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition ease-in-out duration-200 ${
                    receiveEmails ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </motion.button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}
