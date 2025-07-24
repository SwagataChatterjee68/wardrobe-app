
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.5 }}
    >
      {/* Animated Logo or Loader */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1.2, 1] }}
        transition={{ duration: 1 }}
      >

      </motion.div>

      {/* Text animation */}
      <motion.h1
        className="mt-6 text-white text-2xl font-semibold tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        Loading MostlySane MERCH GARAGE...
      </motion.h1>
    </motion.div>
  );
};

export default Loading;
