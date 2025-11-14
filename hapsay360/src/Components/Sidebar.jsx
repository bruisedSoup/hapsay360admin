import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  FileText,
  AlertTriangle,
  Users,
  Bell,
  Database,
  Shield,
} from "lucide-react";

const Sidebar = ({ activePage }) => {
  const menuItems = [
    {
      label: "Dashboard Overview",
      icon: <Home size={24} />,
      path: "/AdminDashboard",
      id: "dashboard",
    },
    {
      label: "Clearance Application",
      icon: <FileText size={24} />,
      path: "/ClearancePage",
      id: "clearance",
    },
    {
      label: "Blotter Incident Reports",
      icon: <Shield size={24} />,
      path: "/BlotterPage",
      id: "blotter",
    },
    {
      label: "SOS Requests",
      icon: <AlertTriangle size={24} />,
      path: "/SOSRequests",
      id: "sos",
    },
    {
      label: "Stations & Personnel",
      icon: <Users size={24} />,
      path: "/Stations",
      id: "stations",
    },
    {
      label: "Manage Announcements",
      icon: <Bell size={24} />,
      path: "/Announcements",
      id: "announcements",
    },
    {
      label: "User Database",
      icon: <Database size={24} />,
      path: "/UserDatabase",
      id: "users",
    },
  ];

  return (
    <aside className="fixed top-0 left-0 h-full w-96 bg-[#1A1740] text-white flex flex-col p-6">
      {/* Logo */}
      <div className="mb-4 flex justify-center">
        <img
          src="../images/icon.png"
          alt="HAPSAY360 Logo"
          className="w-24 h-24 object-contain"
        />
      </div>

      {/* Title */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-semibold">
          HAPSAY<span className="text-2xl font-semibold">360</span> Admin
        </h1>
        <p className="text-sm text-gray-300 mt-1">Barangay Service Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-4 text-left rounded text-lg font-medium transition-colors ${
                isActive || activePage === item.id
                  ? "bg-[#4C2DB1]"
                  : "hover:bg-[#4C2DB1]"
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
