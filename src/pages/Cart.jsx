import { useSelector, useDispatch } from "react-redux";
import { asyncUpdateUser } from "../store/actions/UserAction";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.users);
    const cartItems = user?.cart || [];

    const handleDelete = (id) => {
        const updatedCart = cartItems.filter(item => item.product.id !== id);
        const updatedUser = { ...user, cart: updatedCart };

        dispatch(asyncUpdateUser(user.id, updatedUser));
        toast.success("Item Removed");
    };

    const totalPrice = cartItems
        .reduce((acc, item) => acc + parseFloat(item.product.price) * item.quantity, 0)
        .toFixed(2);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 80, damping: 12 }}
            className="max-w-6xl mx-auto p-4 flex gap-6 text-white min-h-screen flex-wrap pt-32"
        >
            <div className="flex-1 gap-4">
                <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-gray-400"
                    >
                        Your cart is empty.
                    </motion.p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-700">
                                    <th className="py-2">Product</th>
                                    <th className="py-2">Price</th>
                                    <th className="py-2">Quantity</th>
                                    <th className="py-2">Total</th>
                                    <th className="py-2">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <AnimatePresence>
                                    {cartItems.map(item => (
                                        <motion.tr
                                            key={item.product.id}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            transition={{ duration: 0.2 }}
                                            className="border-b border-gray-800"
                                        >
                                            <td className="py-4 flex items-center gap-6">
                                                <motion.img
                                                    src={item.product.image}
                                                    alt={item.product.title}
                                                    className="w-16 h-16 rounded-md object-cover"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.1 }}
                                                />
                                                <div>
                                                    <div className="font-semibold">{item.product.title}</div>
                                                    <div className="text-gray-400 text-sm">{item.product.category}</div>
                                                </div>
                                            </td>
                                            <td className="py-4"><i className="ri-money-rupee-circle-line text-lg"></i>{item.product.price}</td>
                                            <td className="py-4 text-center">{item.quantity}</td>
                                            <td className="py-4">
                                                <i className="ri-money-rupee-circle-line text-lg"></i>{(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                                            </td>
                                            <td className="py-4">
                                                <button
                                                    onClick={() => handleDelete(item.product.id)}
                                                    className="text-red-500 hover:text-red-400 transition-colors"
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </motion.tr>
                                    ))}
                                </AnimatePresence>
                            </tbody>
                        </table>
                    </div>
                )}
            </div>

            <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ type: "spring", stiffness: 80, damping: 12 }}
                className="w-full lg:w-1/3 bg-[#121212] p-6 rounded-xl shadow-xl border border-gray-800"
            >
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span><i className="ri-money-rupee-circle-line text-lg"></i>{totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span className="text-indigo-500">Free</span>
                </div>
                <div className="flex justify-between mb-4 border-t border-gray-700 pt-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold"><i className="ri-money-rupee-circle-line text-lg"></i>{totalPrice}</span>
                </div>
                <button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all duration-300 hover:scale-[1.02] text-white py-2 rounded-md"
                >
                    Checkout
                </button>
            </motion.div>
        </motion.div>
    );
};

export default Cart;
