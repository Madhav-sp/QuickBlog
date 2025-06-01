import React, { useState } from "react";
import { motion } from "framer-motion";
import { assets, blog_data } from "../assets/assets";
import BlogCard from "./BlogCard";
import Footer from "./Footer";

const Header = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Technology", "Startup", "Lifestyle", "Finance"];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-20 px-6 text-center bg-gradient-to-br from-[#fef5f5] to-[#f1f9ff]">
        {/* Announcement */}
        <div className="inline-block px-4 py-1 mb-6 rounded-full bg-[#dcd9ff] text-[#4b3cf1] text-sm font-medium shadow">
          🚀 New: AI feature integration
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
          Your own <span className="text-[#5b3cf1]">blogging</span>{" "}
          <br className="hidden sm:inline" />
          platform<span className="text-gray-900">.</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto px-2">
          Think out loud, share what matters, and write without filters. One
          word or a thousand, your story starts here.
        </p>

        {/* Search */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder="Search for blogs"
            className="px-4 sm:px-6 py-3 rounded-md w-full sm:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5b3cf1] transition"
          />
          <button className="w-full sm:w-auto bg-[#5b3cf1] hover:bg-[#3e2ec0] text-white font-medium px-6 py-3 rounded-md transition">
            Search
          </button>
        </div>

        {/* Category Filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-3 px-2">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(category)}
              className="relative px-5 py-2 rounded-full text-sm font-medium border border-gray-400 transition duration-300"
              style={{ zIndex: 1 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-[#5b3cf1] z-[-1]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span
                className={`relative z-10 ${
                  activeCategory === category ? "text-white" : "text-gray-700"
                }`}
              >
                {category}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blog_data
            .filter(
              (blog) =>
                activeCategory === "All" || blog.category === activeCategory
            )
            .map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
        </div>
      </section>

      {/* Subscription Section */}
      <section className=" py-20 px-4 text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900">
          Never Miss a Blog!
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Subscribe to get the latest blog updates, new tech insights, and
          exclusive news.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 sm:px-6 py-3 rounded-md w-full sm:w-80 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#5b3cf1] transition"
          />
          <button className="w-full sm:w-auto bg-[#5b3cf1] hover:bg-[#3e2ec0] text-white font-medium px-6 py-3 rounded-md transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Header;
