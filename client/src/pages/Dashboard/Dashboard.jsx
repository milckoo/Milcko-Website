import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Welcome back, {currentUser?.name || 'User'}!</h2>
        <p className="text-gray-600">
          This is your personal dashboard where you can manage your Milcko account, 
          track your orders, and explore our products.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Orders</h3>
          <p className="text-3xl font-bold text-yellow-500">3</p>
          <p className="text-sm text-gray-500 mt-1">Recent orders</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Subscriptions</h3>
          <p className="text-3xl font-bold text-yellow-500">1</p>
          <p className="text-sm text-gray-500 mt-1">Active subscription</p>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6">
          <h3 className="text-lg font-medium mb-2">Rewards</h3>
          <p className="text-3xl font-bold text-yellow-500">250</p>
          <p className="text-sm text-gray-500 mt-1">Reward points available</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;