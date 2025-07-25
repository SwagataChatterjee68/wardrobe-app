import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../../store/actions/UserAction";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const UserProfile = () => {
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.userReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UpdateHandler = (formData) => {
    if (!user?.id) {
      toast.error("User ID missing, cannot update profile.");
      return;
    }
    dispatch(asyncUpdateUser(user.id, formData));
    toast.success("Account Updated");
  };

  const LogoutHandler = () => {
    dispatch(asyncLogoutUser());
    localStorage.clear();
    sessionStorage.clear();
    toast.success("Logout Successfully");
    navigate("/login");
  };

  const DeleteHandler = () => {
    if (!user?.id) {
      toast.error("User ID missing, cannot delete profile.");
      return;
    }
    dispatch(asyncDeleteUser(user.id));
    toast.success("Account Deleted");
    navigate("/");
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen bg-[#0a0a0a] flex justify-center items-center pt-20 px-4 py-10"
    >
      <motion.form
        onSubmit={handleSubmit(UpdateHandler)}
        className="w-full max-w-5xl  border border-neutral-700 rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
      >
        {/* Sidebar */}
        <motion.div
          className="col-span-1 flex flex-col items-center py-8 border-b md:border-b-0 md:border-r border-neutral-700"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 0.5 } }}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-bold"
          >
            {user?.name?.charAt(0)}
          </motion.div>
          <h2 className="text-white text-lg font-semibold mt-4">{user?.name}</h2>
          <p className="text-gray-400 text-sm">{user?.username}</p>

          <div className="mt-6 w-full px-6 space-y-2">
            <h2 className="w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold text-xl">
              {user?.isAdmin ? "Admin Panel" : "User Profile"}
            </h2>
          </div>
        </motion.div>

        {/* Profile Form */}
        <motion.div
          className="col-span-3 p-6 md:p-10"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3, duration: 0.5 } }}
        >
          <h1 className="text-white text-2xl font-bold mb-6">Profile</h1>
          <div className="space-y-4">
            {['name', 'username', 'email', 'password'].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="text-gray-400 text-sm capitalize">
                  {field}
                </label>
                <input
                  type={field === 'password' ? 'password' : 'text'}
                  defaultValue={user?.[field]}
                  {...register(field)}
                  autoComplete={field === 'password' ? 'new-password' : 'off'}
                  className="mt-1 w-full px-4 py-2  border border-[#2a2a2a] rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
            ))}

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6">
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md transition duration-300"
              >
                Update Profile
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={DeleteHandler}
                className="flex-1 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-medium rounded-md transition duration-300"
              >
                Delete Profile
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={LogoutHandler}
                className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-md transition duration-300"
              >
                Logout
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.form>
    </motion.div>
  );
};

export default UserProfile;
