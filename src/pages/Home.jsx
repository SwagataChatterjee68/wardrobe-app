import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import CategorySection from "./Category";


const Home = () => {
  return (
    <div className="bg-black min-h-screen text-gray-200 font-sans ">
      {/* Header Hero Section with Background Image */}
      <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-black text-gray-200 p-6 pt-24 flex flex-col items-center justify-center">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">

          {/* Left Paragraph with Animation */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bringing You Products That Inspire Your Everyday.
            </h1>
            <p className="text-gray-300 text-lg md:text-md">
              Discover premium, creator-inspired merchandise crafted for MostlySane fans. Our collection blends vibrant humor and warmth with comfort, letting you carry your favorite creator’s energy into your daily life.
            </p>
            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-white shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
              >
                Shop Now
              </motion.button>
            </Link>

          </motion.div>

          {/* Right Image with Animation */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <motion.img
              src="https://img.freepik.com/premium-photo/black-friday-sale-concept-young-woman-holding-shopping-bag-dark-background-fashion-style_742418-94131.jpg"
              alt="MostlySane Merch"
              className="rounded-3xl shadow-2xl w-full max-w-xl object-cover"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 100 }}
            />
          </motion.div>

        </div>
      </div>
  
      {/* Category Section */}
      <CategorySection />

      {/* CTA / Newsletter Section */}
      <section className="relative overflow-hidden py-24 md:py-32 flex flex-col items-center justify-center text-center px-4 bg-[#0d0d0d]">
        <div className="absolute top-0 left-0 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-20 animate-pulse translate-x-1/2 translate-y-1/2"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-2xl"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
            Join Our Creator Community
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-8">
            Stay updated on exclusive launches, discounts, and new drops by subscribing to our newsletter and following us on social media.
          </p>
          <Link
            to="https://www.youtube.com/channel/UCvCyIiKSCA1fHKSCOKJyjXA"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition transform hover:scale-105"
          >
            Subscribe Now
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;



