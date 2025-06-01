import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-7xl font-bold text-[#5044E5] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="bg-[#5044E5] hover:bg-[#3d35b5] text-white px-6 py-3 rounded-lg font-medium transition duration-300"
      >
        Go Back Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
