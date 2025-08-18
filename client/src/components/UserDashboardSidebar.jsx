import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarLinks } from "../constants/dashboardSidebarLinks";
import { Home, User, Settings, HelpCircle, LogOut } from "lucide-react";

const iconMap = {
  Home,
  User,
  Settings,
  HelpCircle,
  LogOut,
};

const UserDashboardSidebar = () => {
  return (
    <aside className="sidebar fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-20 flex flex-col">
      <div className="sidebar-header p-6 font-bold text-xl border-b">Dashboard</div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = iconMap[link.icon] || Home;
            return (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors duration-200 ${
                      isActive ? "bg-blue-100 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                  end={link.end || false}
                >
                  <Icon size={20} />
                  <span>{link.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default UserDashboardSidebar;
