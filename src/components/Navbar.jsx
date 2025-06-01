import React from "react";
import { assets } from "../assets/assets";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        <NavLink to="/">
          <img src={assets.logo} alt="Logo" className="sm:h-7 h-5" />
        </NavLink>

        <NavLink to="/admin">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-md bg-[#5b3cf1] text-white font-medium hover:bg-[#4327da] transition">
            Login <FaArrowRight />
          </button>
        </NavLink>
      </div>
    </header>
  );
};

export default Navbar;
