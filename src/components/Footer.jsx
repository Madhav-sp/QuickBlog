import React from "react";
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f9f9fe]  border-t border-gray-200 text-[#444]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-2xl font-bold text-[#5b3cf1] mb-3">QuickBlog</h2>
          <p className="text-sm text-[#666] leading-relaxed">
            Share your voice. Explore ideas from the brightest minds worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Blog", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="hover:text-[#5b3cf1] transition duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-base font-semibold mb-3">Categories</h3>
          <ul className="space-y-2 text-sm">
            {["Tech", "Startup", "Lifestyle", "Finance"].map((cat) => (
              <li key={cat}>
                <a
                  href="#"
                  className="hover:text-[#5b3cf1] transition duration-200"
                >
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-base font-semibold mb-3">Connect</h3>
          <div className="flex space-x-5 text-[#5b3cf1] text-xl">
            <a href="#" className="hover:opacity-80 transition duration-200">
              <FaTwitter />
            </a>
            <a href="#" className="hover:opacity-80 transition duration-200">
              <FaGithub />
            </a>
            <a href="#" className="hover:opacity-80 transition duration-200">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:opacity-80 transition duration-200">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-[#888] py-4 border-t border-gray-200">
        © {new Date().getFullYear()}{" "}
        <span className="text-[#5b3cf1] font-medium">QuickBlog</span>. All
        rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
