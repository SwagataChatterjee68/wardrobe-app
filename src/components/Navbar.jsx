import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.userReducer.users);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "relative text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-white after:rounded-md"
      : "text-gray-400 hover:text-white transition duration-300 relative after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-white after:rounded-md hover:after:w-full after:transition-all after:duration-300";

  // Links to show, conditionally including Cart only when logged in
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
  ];

  if (user) {
    links.push({ to: "/cart", label: "Cart" });
  }

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed w-full z-50 bg-black shadow-sm"
    >
      <div className="max-w-7xl mx-auto pt-5 px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-2xl font-bold text-white"
        >
          <p className="bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-transparent xl:text-3xl lg:xl md:text-xl text-xl tracking-tighter">
            MostlySane MERCHGARAGE
          </p>
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          {links.map((link) => (
            <motion.div whileHover={{ scale: 1.05 }} key={link.to}>
              <NavLink to={link.to} className={linkStyle}>{link.label}</NavLink>
            </motion.div>
          ))}

          {user && user.isAdmin && (
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink to="/admin/create-product" className={linkStyle}>Create Product</NavLink>
            </motion.div>
          )}

          {user ? (
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
            </motion.div>
          ) : (
            <motion.div whileHover={{ scale: 1.05 }}>
              <NavLink
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1.5 rounded-md transition duration-300"
              >
                Login
              </NavLink>
            </motion.div>
          )}
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden text-white text-3xl cursor-pointer">
          <i
            className={`ri-${isOpen ? "close" : "menu"}-line`}
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 py-4 bg-black/90 backdrop-blur-md text-base font-medium flex flex-col space-y-4"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            {user && user.isAdmin && (
              <NavLink
                to="/admin/create-product"
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                Create Product
              </NavLink>
            )}

            {user ? (
              <NavLink
                to="/profile"
                className={linkStyle}
                onClick={() => setIsOpen(false)}
              >
                Profile
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="bg-gradient-to-r from-purple-600 to-pink-600 w-1/2 text-white px-2 py-2 rounded-md text-center transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
