import React from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

function Navbar({ toggleSidebar }) {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed top-0 left-0 md:left-56 right-0 h-20 bg-[#0f172a]/95 backdrop-blur-md 
                 flex items-center justify-between px-6 shadow-lg z-40"
    >
      {/* Left: Hamburger (mobile only) */}
      <motion.button
        whileTap={{ scale: 0.85 }}
        whileHover={{ scale: 1.1 }}
        onClick={toggleSidebar}
        className="p-4 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition md:hidden"
      >
        <Menu size={24} />
      </motion.button>

      {/* Right: Name */}
      <motion.h1
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
        className="text-lg md:text-xl font-extrabold tracking-wide text-blue-400"
      >
        Iddy Chesire
      </motion.h1>
    </motion.nav>
  );
}

export default Navbar;
