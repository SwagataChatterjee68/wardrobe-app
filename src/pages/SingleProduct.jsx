import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncProductDelete } from "../store/actions/ProductAction";
import { asyncUpdateUser } from '../store/actions/UserAction';
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.users);
  const product = products.find((product) => product.id == id);

  const onAddToCart = (product) => {
    const copyUser = { ...user, cart: [...user.cart] };
    const index = copyUser.cart.findIndex((c) => c?.product?.id == product.id);
    if (index == -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[index] = {
        product,
        quantity: copyUser.cart[index].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
    toast.success("Added to Cart");
  };

  const DeleteHandler = () => {
    dispatch(asyncProductDelete(id));
    navigate(`/products`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Product not found.
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex flex-col md:flex-row pt-24 px-6 md:px-16">
      {/* Left: Image */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 flex justify-center items-center p-6"
      >
        <motion.img
          src={product.image}
          alt={product.title}
          className="rounded-2xl w-full max-w-[400px] object-contain border border-[#222] shadow-xl hover:scale-105 transition-transform duration-300"
          whileHover={{ scale: 1.05 }}
        />
      </motion.div>

      {/* Right: Details */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="flex-1 flex flex-col justify-center space-y-6"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
          {product.title}
        </h1>
        <p className="text-gray-400 leading-relaxed max-w-prose">
          {product.description}
        </p>

        <div className="flex flex-col gap-4">
          <div>
            <span className="text-sm uppercase text-gray-500">Price</span>
            <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              <i className="ri-money-rupee-circle-line text-lg "></i>{product.price}
            </p>
          </div>
          <div>
            <span className="text-sm uppercase text-gray-500">Category</span>
            <p className="text-gray-300">{product.category}</p>
          </div>
          <div>
            <span className="text-sm uppercase text-gray-500">Rating</span>
            <p className="text-yellow-400 font-semibold text-lg">
              ⭐ {product.rating?.rate ?? "N/A"} 
              <span className="text-gray-400 text-sm ml-1">
                ({product.rating?.count ?? 0} reviews)
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Link
            to="/cart"
            onClick={() => onAddToCart(product)}
            className="px-6 py-3 bg-yellow-600 hover:bg-yellow-500 text-black font-semibold rounded-md text-center"
          >
            Add To Cart
          </Link>

          {user && user.isAdmin && (
            <>
              <Link
                to={`/admin/update-product/${product.id}`}
                className="px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-md text-center"
              >
                Update Product
              </Link>

              <button
                onClick={DeleteHandler}
                className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-md text-center"
              >
                Delete Product
              </button>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SingleProduct;
