import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncUpdateUser } from '../store/actions/UserAction'
import { toast } from 'react-toastify'
import { motion } from 'framer-motion'

const Product = () => {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.productReducer.products)
  const user = useSelector((state) => state.userReducer.users)

  const onAddToCart = (product) => {
    const copyUser = { ...user, cart: [...user.cart] }
    const index = copyUser.cart.findIndex((c) => c?.product?.id == product.id)
    if (index == -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        product,
        quantity: copyUser.cart[index].quantity + 1
      }
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser))
    toast.success("Added to Cart")
    console.log(copyUser)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    whileHover: { scale: 1.03, boxShadow: "0 8px 24px rgba(139, 92, 246, 0.3)" },
  };

  const renderedProduct = product.map((product) => {
    return (
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
              <i className="ri-money-rupee-circle-line text-lg"></i>{product.price}
            </span>
            <span className="flex items-center gap-1">
              {product.rating?.rate}
              <i className="ri-star-fill text-yellow-400 text-xs"></i>
            </span>
          </div>

          <p className="text-gray-400 text-sm mb-3 line-clamp-3">
            {product.description.slice(0, 50)}...
            <Link to={`/products/${product.id}`} className='text-indigo-400 cursor-pointer ml-1'>
              More Info
            </Link>
          </p>

          <button
            onClick={() => onAddToCart(product)}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-sm py-2 rounded-lg transition duration-300 hover:opacity-90 mt-auto"
          >
            Add to Cart
          </button>
        </div>
      </motion.div>

    )
  })

  return (
    <motion.div
      className='flex flex-wrap gap-6 py-16 justify-center px-4  mb-20'
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {product.length > 0 ? renderedProduct : "Loading..."}
    </motion.div>
  )
}

export default Product
