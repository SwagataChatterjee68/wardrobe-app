import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function CategorySection() {
  const navigate = useNavigate();

  const categories = [
    { name: 'T-Shirts', value: 'tshirts', image: 'https://ik.imagekit.io/merchbay/category/c8b69546-b7ee-45fc-a72b-4a6d7088dc1f.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Oversized Tshirts', value: 'oversized-tshirts', image: 'https://ik.imagekit.io/merchbay/category/bd624c33-713b-4a59-9610-45a0966a5bb0.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Hoodies', value: 'hoodies', image: 'https://ik.imagekit.io/merchbay/category/f3006326-6fc0-4ea1-8b6c-6562161272b2.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Totes', value: 'totes', image: 'https://ik.imagekit.io/merchbay/category/c47eeaab-47f6-4ab2-a116-418490fdd8fa.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Masks', value: 'masks', image: 'https://ik.imagekit.io/merchbay/category/8924eeb9-8449-4935-a850-b78726e51ce3.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Sweatshirts', value: 'sweatshirts', image: 'https://ik.imagekit.io/merchbay/seller/productimage/cc9b75d7-0b7c-4d4f-9e3d-5db6387c9029.jpg?tr=w-400,dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Mugs', value: 'mugs', image: 'https://ik.imagekit.io/merchbay/category/3a5bb618-a0a7-4813-91b5-6a77c94061bc.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Mobile Covers', value: 'mobile-covers', image: 'https://ik.imagekit.io/merchbay/category/6841a922-f5d8-41b5-b9d3-e7ecd0f07fa9.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Sippers', value: 'sippers', image: 'https://ik.imagekit.io/merchbay/category/82b52fdc-8249-46d8-b6ce-abf7d9a81347.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
    { name: 'Diaries', value: 'diaries', image: 'https://ik.imagekit.io/merchbay/category/4c83da95-2196-4477-97ff-c6ea9c1adbd4.jpg?tr=dpr-2,q-50,f-jpg,pr-true' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl lg:text-4xl xl:text-5xl  font-extrabold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-12 text-center"
      >
        Explore Categories
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 max-w-6xl w-full mt-5">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className="bg-gray-900 rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => navigate(`/shop/${cat.value}`)}
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold text-white">{cat.name}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}