import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
    hover: { scale: 1.02 },
  };

  return (
    <div className="font-inter antialiased bg-black text-gray-100 min-h-screen flex items-center justify-center py-16 px-4 pt-32">
      <motion.div
        className="max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-start gap-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Side: Image */}
        <motion.img
          src="https://images.filmibeat.com/ph-big/2024/12/prajakta-koli-aka-mostlysane-from-mismatched-season-3-know-all-about-the-talented-actress1734412264_2.jpg"
          alt="Prajakta Koli - MostlySane"
          className="rounded-2xl shadow-2xl w-full max-w-sm object-cover hover:shadow-pink-500/40 transition-all duration-500"
          variants={imageVariants}
          whileHover="hover"
        />

        {/* Right Side: Text */}
        <motion.div
          className="space-y-6 text-gray-300 text-lg leading-relaxed lg:w-2/3"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white tracking-tight">
            About <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">MostlySane</span>
          </h2>

          <p>
            <span className="text-white font-semibold">Prajakta Koli</span>, widely known as <span className="text-pink-400 font-semibold">MostlySane</span>,
            is a beloved Indian YouTuber, actress, and author who inspires millions with her
            authentic storytelling and relatable humor. Starting with light-hearted observational
            videos, she has evolved into a creative powerhouse, bringing her unique perspective
            to acting, social advocacy, and writing.
          </p>

          <p>
            Her content resonates with young audiences, seamlessly blending comedy with important
            conversations around mental health, education for girls, and body positivity. Prajakta’s
            raw honesty and courage in sharing her journey have fostered a deeply connected community.
          </p>

          <p>
            From starring in <em>Mismatched</em> to appearing in <em>Jug Jugg Jeeyo</em> and penning her debut novel <em>Too Good To Be True</em>,
            she is a testament to the power of authenticity and passion in creating a fulfilling
            creative career.
          </p>

          <p>
            <span className="text-purple-400 font-semibold">MostlySane</span> is not just a YouTube channel; it’s a beacon of hope, laughter,
            and growth, reminding us that staying true to ourselves can create ripples of positive
            change in the world.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
