import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncUpdateUser } from '../store/actions/UserAction';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);

  const onAddToCart = (product) => {
    const copyUser = { ...user, cart: [...user.cart] };
    const index = copyUser.cart.findIndex((c) => c?.product?.id === product.id);
    if (index === -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        product,
        quantity: copyUser.cart[index].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
    toast.success('Added to Cart');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03, boxShadow: '0 8px 24px rgba(139, 92, 246, 0.3)' },
  };

  return (
    <motion.div
      className="flex flex-wrap gap-6 py-16 justify-center px-4 mb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {products.length > 0 ? (
        products.map((product) => (
          <motion.div
            key={product.id}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="whileHover"
            className="bg-[#111] border border-gray-700 rounded-2xl shadow-lg max-w-sm w-full overflow-hidden cursor-pointer transition duration-300 flex flex-col justify-between mt-20"
          >
            {/* Image */}
            <div className="bg-[#1a1a1a] flex items-center justify-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-48 object-contain rounded-2xl"
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col justify-between flex-1">
              <h2 className="text-white text-sm font-semibold mb-2 truncate">
                {product.title}
              </h2>

              <div className="flex justify-between items-center text-sm text-gray-400 mb-3">
                <span className="text-indigo-400 font-semibold">
                  <i className="ri-money-rupee-circle-line text-lg"></i>
                  {product.price}
                </span>
                <span className="flex items-center gap-1">
                  {product.rating?.rate}
                  <i className="ri-star-fill text-yellow-400 text-xs"></i>
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-3 line-clamp-3">
                {product.description.slice(0, 50)}...
              </p>

              <div className={`${user ? 'flex flex-row gap-2' : 'flex flex-col'} mt-auto`}>
                {user ? (
                  <>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-sm py-2 rounded-lg transition duration-300 hover:opacity-90"
                    >
                      Add to Cart
                    </button>
                    <Link
                      to={`/products/${product.id}`}
                      className="flex-1 bg-gray-700 text-white font-sm py-2 rounded-lg text-center transition duration-300 hover:bg-[#333]"
                    >
                      Know More
                    </Link>
                  </>
                ) : (
                  <Link
                    to={`/products/${product.id}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-sm py-2 rounded-lg text-center transition duration-300 hover:opacity-90"
                  >
                    Know More
                  </Link>
                )}
              </div>

            </div>
          </motion.div>
        ))
      ) : (
        <p className="text-white text-lg">Loading...</p>
      )}
    </motion.div>
  );
};

export default Product;
