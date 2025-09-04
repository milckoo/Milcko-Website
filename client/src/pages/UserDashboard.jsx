import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const UserDashboard = () => (
  <div className="min-h-screen bg-[#FFFBF3]">
    <Navbar />
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-10 ml-64 mt-20">
        <Outlet /> 
      </main>
    </div>
  </div>
);

export default UserDashboard;
