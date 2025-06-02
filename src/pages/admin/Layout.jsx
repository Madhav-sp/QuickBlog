import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { assets } from "../../assets/assets";
import Sidebar from "../../components/admin/sidebar";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false); // ✅ Explicit close function

  return (
    <>
      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="flex items-center gap-4">
            <button
              className="lg:hidden text-xl"
              onClick={toggleSidebar}
              aria-label="Toggle Sidebar"
            >
              {sidebarOpen ? <FaTimes /> : <FaBars />}
            </button>

            <NavLink to="/">
              <img src={assets.logo} alt="Logo" className="sm:h-7 h-5" />
            </NavLink>
          </div>

          <NavLink to="/">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#5b3cf1] text-white font-medium hover:bg-[#4327da] transition cursor-pointer">
              Logout <FaArrowRight />
            </button>
          </NavLink>
        </div>
      </header>

      {/* Layout Container */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div
          className={`fixed lg:static top-0 left-0 h-full z-40 
            transition-transform duration-300 bg-white shadow-md 
            w-64 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0`}
        >
          <Sidebar closeSidebar={closeSidebar} /> {/* ✅ Pass prop */}
        </div>

        {/* Overlay */}
        {sidebarOpen && (
          <div
            onClick={closeSidebar}
            className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          />
        )}

        {/* Main Content */}
        <main className="flex-1 p-4 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
