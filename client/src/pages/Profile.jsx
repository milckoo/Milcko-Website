import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  MapPin,
  Edit,
  Save,
  CheckCircle,
  XCircle,
  Upload,
} from 'lucide-react';

// This is the main application component that renders the complete profile page.
export default function App() {
  const [profile, setProfile] = useState(null);
  const [tempProfile, setTempProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [showSaveMessage, setShowSaveMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  // Animation variants for the main container and content sections.
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  // Fetches user data from the backend API or uses a mock profile if no token is found.
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          // If no token exists, use mock data to avoid the fetch error.
          const mockData = {
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            phone: '+1 (555) 123-4567',
            address: '123 Farm Lane, Village, USA',
            profilePicture: 'https://placehold.co/150x150/60a5fa/ffffff?text=JD',
          };
          setProfile(mockData);
          setIsLoading(false);
          return; // Exit the function to prevent the fetch call
        }

        const response = await fetch('http://localhost:4500/api/auth/profile', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.msg || 'Failed to fetch user data');
        }

        const fetchedData = await response.json();
        setProfile({
          name: fetchedData.name,
          email: fetchedData.email,
          phone: fetchedData.phone,
          address: fetchedData.address,
          profilePicture: fetchedData.profilePicture || 'https://placehold.co/150x150/60a5fa/ffffff?text=JD',
        });
      } catch (error) {
        console.error('Fetch error:', error.message);
        setShowErrorMessage(true);
      }
      setIsLoading(false);
    };
    fetchUserData();
  }, []);

  const handleEditClick = () => {
    setTempProfile({ ...profile });
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setTempProfile(null);
  };

  // Saves updated user data to the backend
  const handleSaveChanges = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error('No authentication token found.');

      const response = await fetch('http://localhost:4500/api/auth/profile', {
        method: 'PUT', // Use PUT or PATCH for updates
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(tempProfile),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.msg || 'Failed to save changes');
      }

      setProfile(tempProfile);
      setIsEditing(false);
      setTempProfile(null);
      setShowSaveMessage(true);
      setTimeout(() => setShowSaveMessage(false), 3000);
    } catch (error) {
      console.error('Save error:', error.message);
      setShowErrorMessage(true);
    }
  };

  // Handles profile picture upload to the backend
  const handlePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('profilePicture', file);
    const token = localStorage.getItem('token');

    try {
      const response = await fetch('http://localhost:4500/api/auth/upload-profile-picture', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to upload image');
      const data = await response.json();
      
      const newProfile = { ...profile, profilePicture: data.profilePicture };
      setProfile(newProfile);
      if (isEditing) {
        setTempProfile(newProfile);
      }
    } catch (error) {
      console.error('Upload error:', error.message);
      setShowErrorMessage(true);
    }
  };
  
  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex justify-center items-center h-full">
      <motion.div
        className="w-12 h-12 border-4 border-blue-200 dark:border-blue-700 border-t-blue-500 rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );

  if (isLoading || !profile) {
    return (
      <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-4 flex items-center justify-center font-sans antialiased">
        <LoadingSpinner />
      </div>
    );
  }

  const currentProfile = isEditing ? tempProfile : profile;

  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans antialiased text-gray-900 dark:text-white">
      <motion.div
        className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {showSaveMessage && (
            <motion.div
              className="fixed inset-x-0 top-16 z-50 flex justify-center p-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="flex items-center gap-2 bg-green-500 text-white p-4 rounded-xl shadow-lg">
                <CheckCircle className="w-6 h-6" />
                <p>Profile updated successfully!</p>
              </div>
            </motion.div>
          )}
          {showErrorMessage && (
            <motion.div
              className="fixed inset-x-0 top-16 z-50 flex justify-center p-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
            >
              <div className="flex items-center gap-2 bg-red-500 text-white p-4 rounded-xl shadow-lg">
                <XCircle className="w-6 h-6" />
                <p>An error occurred. Please try again.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* --- Header Section with Profile Picture and Actions --- */}
        <div className="flex flex-col items-center text-center mb-8 pb-8 border-b border-gray-200 dark:border-gray-700">
          <motion.div
            className="relative w-28 h-28 mb-4 rounded-full border-4 border-blue-500 dark:border-blue-400 shadow-lg group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <img
              src={currentProfile.profilePicture}
              alt="User Profile"
              className="w-full h-full rounded-full object-cover"
            />
            {isEditing && (
              <motion.label
                className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                <Upload className="w-6 h-6" />
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handlePhotoUpload}
                />
              </motion.label>
            )}
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white"
            variants={sectionVariants}
          >
            {currentProfile.name}
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300"
            variants={sectionVariants}
          >
            Manage your personal and delivery information.
          </motion.p>
        </div>

        {/* --- Profile Information Form --- */}
        <motion.section variants={sectionVariants}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <User className="w-6 h-6 mr-3 text-blue-500" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                Contact Information
              </h2>
            </div>
            {!isEditing && (
              <motion.button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl text-blue-600 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                onClick={handleEditClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </motion.button>
            )}
          </div>
          <form className="space-y-6" onSubmit={handleSaveChanges}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Full Name</label>
                <div className="mt-1 flex items-center p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                  <User className="text-gray-400 w-5 h-5 mr-2" />
                  <input
                    type="text"
                    id="name"
                    value={currentProfile.name}
                    onChange={(e) => isEditing && setTempProfile({ ...tempProfile, name: e.target.value })}
                    readOnly={!isEditing}
                    className="flex-1 bg-transparent focus:outline-none dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email Address</label>
                <div className="mt-1 flex items-center p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                  <Mail className="text-gray-400 w-5 h-5 mr-2" />
                  <input
                    type="email"
                    id="email"
                    value={currentProfile.email}
                    onChange={(e) => isEditing && setTempProfile({ ...tempProfile, email: e.target.value })}
                    readOnly={!isEditing}
                    className="flex-1 bg-transparent focus:outline-none dark:text-white"
                  />
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Phone Number</label>
              <div className="mt-1 flex items-center p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                <Phone className="text-gray-400 w-5 h-5 mr-2" />
                <input
                  type="tel"
                  id="phone"
                  value={currentProfile.phone}
                  onChange={(e) => isEditing && setTempProfile({ ...tempProfile, phone: e.target.value })}
                  readOnly={!isEditing}
                  className="flex-1 bg-transparent focus:outline-none dark:text-white"
                />
              </div>
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Delivery Address</label>
              <div className="mt-1 flex items-start p-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700">
                <MapPin className="text-gray-400 w-5 h-5 mr-2 mt-1" />
                <textarea
                  id="address"
                  rows="3"
                  value={currentProfile.address}
                  onChange={(e) => isEditing && setTempProfile({ ...tempProfile, address: e.target.value })}
                  readOnly={!isEditing}
                  className="flex-1 bg-transparent focus:outline-none dark:text-white resize-none"
                ></textarea>
              </div>
            </div>
            
            <AnimatePresence>
              {isEditing && (
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  <motion.button
                    type="button"
                    onClick={handleCancelEdit}
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-xl text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <XCircle className="w-5 h-5 mr-2" />
                    Cancel
                  </motion.button>
                  <motion.button
                    type="submit"
                    className="flex-1 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Save className="w-5 h-5 mr-2" />
                    Save Changes
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.section>
      </motion.div>
    </div>
  );
}
