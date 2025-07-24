// CreateProduct.jsx with Framer Motion animations

import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncProductCreation } from "../../store/actions/ProductAction";
import { motion } from "framer-motion";

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const CreateProductHandler = (product) => {
    product.id = nanoid();
    reset();
    navigate("/products");
    dispatch(asyncProductCreation(product));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-[#090808] flex justify-center items-center px-4 pt-24"
    >
      <motion.form
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        onSubmit={handleSubmit(CreateProductHandler)}
        className="w-full max-w-3xl bg-gradient-to-br bg-neutral-900 border border-gray-700 rounded-2xl shadow-2xl p-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-white text-2xl font-bold mb-8 text-center tracking-wide"
        >
          Add New Product
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Title */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <label className="block text-sm text-gray-400 mb-1">Title</label>
            <input
              type="text"
              {...register("title")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Product title"
              required
            />
          </motion.div>

          {/* Price */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <label className="block text-sm text-gray-400 mb-1">Price ($)</label>
            <input
              type="number"
              {...register("price")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="0.00"
              required
            />
          </motion.div>

          {/* Rating */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <label className="block text-sm text-gray-400 mb-1">Rating (0–5)</label>
            <input
              type="number"
              step="0.1"
              min="0"
              max="5"
              {...register("rating.rate")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Rating"
              required
            />
          </motion.div>

          {/* Category */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <label className="block text-sm text-gray-400 mb-1">Category</label>
            <input
              type="text"
              {...register("category")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Category"
              required
            />
          </motion.div>

          {/* Image URL */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <label className="block text-sm text-gray-400 mb-1">Image URL</label>
            <input
              type="url"
              {...register("image")}
              className="w-full bg-neutral-900 text-white px-4 py-2 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Image URL"
              required
            />
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-6"
        >
          <label className="block text-sm text-gray-400 mb-1">Description</label>
          <textarea
            rows="4"
            {...register("description")}
            className="w-full bg-neutral-900 text-white px-4 py-3 rounded-md border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            placeholder="Description"
            required
          ></textarea>
        </motion.div>

        {/* Submit Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          type="submit"
          className="mt-8 w-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-md"
        >
          Create Product
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default CreateProduct;