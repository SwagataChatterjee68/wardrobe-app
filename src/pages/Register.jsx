import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from "../store/actions/UserAction";
import { useDispatch } from 'react-redux';
import { motion } from "framer-motion";

const Register = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const RegisterHandler = (user) => {
        const newUser = {
            ...user,
            id: nanoid(),
            cart: [],
            isAdmin: false
        };
        dispatch(asyncRegisterUser(newUser));
        reset();
        navigate("/");
    };

    return (
        <motion.div
            className="min-h-screen bg-[#0a0a0a] flex justify-center items-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <motion.form
                onSubmit={handleSubmit(RegisterHandler)}
                className="w-full max-w-md bg-[#111111] border border-neutral-700 p-6 rounded-xl shadow-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
                <motion.h2
                    className="text-white text-2xl font-bold mb-6 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    Create Your Account
                </motion.h2>

                {/* Full Name */}
                <motion.div className="mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }}>
                    <label htmlFor="name" className="text-gray-400 text-sm">Full Name</label>
                    <input
                        type="text"
                        {...register("name")}
                        placeholder="John Doe"
                        className="mt-1 w-full px-4 py-2 bg-[#0a0a0a] border border-[#2a2a2a] rounded-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </motion.div>

                {/* Email */}
                <motion.div className="mb-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
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
                <motion.div className="mb-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }}>
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
                <motion.div className="mb-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }}>
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

                {/* Register Button */}
                <motion.button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Register
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default Register;
