import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/UserAction";
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";

const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const LoginHandler = (user) => {
        reset();
        navigate("/");
        dispatch(asyncLoginUser(user));
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="min-h-screen bg-[#0a0a0a] flex justify-center items-center px-4"
        >
            <motion.form
                onSubmit={handleSubmit(LoginHandler)}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-md bg-[#111111] border border-neutral-700 p-6 rounded-xl shadow-lg"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-white text-2xl font-bold mb-6 text-center"
                >
                    Login to Your Account
                </motion.h2>

                {/* Email */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-4"
                >
                    <label htmlFor="email" className="text-gray-400 text-sm">Email</label>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="email@example.com"
                        className="mt-1 w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </motion.div>

                {/* Username */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-4"
                >
                    <label htmlFor="username" className="text-gray-400 text-sm">Username</label>
                    <input
                        type="text"
                        {...register("username")}
                        placeholder="yourusername"
                        autoComplete="off"
                        className="mt-1 w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </motion.div>

                {/* Password */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mb-6"
                >
                    <label htmlFor="password" className="text-gray-400 text-sm">Password</label>
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="••••••••"
                        autoComplete="new-password"
                        className="mt-1 w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </motion.div>

                {/* Login Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md transition duration-300"
                >
                    Login
                </motion.button>

                {/* Switch to Register */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-sm text-center text-gray-500 mt-4"
                >
                    Don't have an account? {" "}
                    <Link to="/register" className="text-indigo-400 hover:underline">
                        Register
                    </Link>
                </motion.p>
            </motion.form>
        </motion.div>
    );
};

export default Login;
