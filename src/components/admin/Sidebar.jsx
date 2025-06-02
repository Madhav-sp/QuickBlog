import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = ({ closeSidebar }) => {
  return (
    <aside className="min-h-screen w-64 bg-white  px-6 py-8 shadow-sm pt-16 lg:pt-8">
      {/* Show logo only on small screens */}
      <div className="lg:hidden flex justify-center mb-6">

      </div>

      <nav className="flex flex-col space-y-4">
        <NavItem
          to=" "
          icon={assets.home_icon}
          label="Dashboard"
          onClick={closeSidebar}
        />
        <NavItem
          to="addblog"
          icon={assets.add_icon}
          label="Add Blog"
          onClick={closeSidebar}
        />
        <NavItem
          to="listblog"
          icon={assets.list_icon}
          label="Blog List"
          onClick={closeSidebar}
        />
        <NavItem
          to="comments"
          icon={assets.comment_icon}
          label="Comments"
          onClick={closeSidebar}
        />
      </nav>
    </aside>
  );
};

const NavItem = ({ to, icon, label, onClick }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `flex items-center space-x-3 px-4 py-3 rounded-md transition-all duration-200 ${
          isActive
            ? "bg-purple-100 text-purple-700 font-semibold"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
        }`
      }
    >
      <img src={icon} alt="" className="w-5 h-5" />
      <span>{label}</span> {/* 👈 Keep name visible on all screen sizes */}
    </NavLink>
  );
};

export default Sidebar;
