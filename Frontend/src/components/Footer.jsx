import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0d0d0d] text-gray-300 py-10 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div>
          <h2 className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Merch Garage</h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover official MostlySane merchandise crafted to bring humor, warmth, and a piece of your favorite creator into your daily life.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Quick Links</h3>
          <ul className="space-y-2 text-sm text-center">
            <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="/products" className="hover:text-pink-400 transition">Product</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Stay Updated</h3>
          <p className="text-sm mb-4 text-gray-400 text-center">
            Get exclusive updates, offers, and new drops in your inbox.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-md bg-[#1a1a1a] text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-600"
            />
            <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-r-md text-white font-medium transition">
              Subscribe
            </button>
          </div>
        </div>
      </motion.div>
      <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto">
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl"><i className="ri-facebook-circle-fill"></i></a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl"><i className="ri-instagram-fill"></i></a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl"><i className="ri-twitter-x-fill"></i></a>
          <a href="#" className="text-gray-400 hover:text-pink-400 transition text-xl"><i className="ri-github-fill"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
