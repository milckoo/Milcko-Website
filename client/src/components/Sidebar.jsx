import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import {
  HomeIcon,
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const { currentUser, logout } = useContext(AuthContext);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", icon: HomeIcon, href: "/dashboard" },
    { name: "Activity", icon: ChartBarIcon, href: "/dashboard/activity" },
    { name: "Settings", icon: CogIcon, href: "/dashboard/settings" },
    { name: "Support", icon: QuestionMarkCircleIcon, href: "/dashboard/support" },
  ];

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white w-64 py-6 px-3">
      <div className="flex items-center justify-center mb-6">
        <Link to="/" className="text-xl font-bold">
          Milcko Dashboard
        </Link>
      </div>

      {currentUser && (
        <div className="flex flex-col items-center mb-6 px-4 py-3 bg-gray-700 rounded-lg">
          <UserCircleIcon className="h-12 w-12 text-yellow-400" />
          <h3 className="mt-2 font-medium text-lg">{currentUser.name}</h3>
          <p className="text-sm text-gray-300">{currentUser.email}</p>
        </div>
      )}

      <nav className="flex-1 mt-6">
        <ul className="space-y-2">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                    isActive
                      ? "bg-yellow-400 text-black font-medium"
                      : "hover:bg-gray-700"
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-auto pt-4 border-t border-gray-700">
        <button
          onClick={logout}
          className="flex items-center w-full px-4 py-3 text-left rounded-md hover:bg-gray-700 transition-colors"
        >
          <ArrowLeftOnRectangleIcon className="h-5 w-5 mr-3" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
