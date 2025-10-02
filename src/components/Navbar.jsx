import React from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

function Navbar({ toggleSidebar }) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 14 }}
      className="fixed top-0 left-0 right-0 h-20 
           bg-gray-950
           backdrop-blur-xl flex items-center justify-between px-6 
           shadow-xl shadow-blue-500/20 z-50 border-b border-blue-500/10"
    >
      {/* Left: Branding with Quote */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <div className="w-10 h-10 flex items-center justify-center rounded-full 
                bg-gradient-to-br from-orange-900 via-orange-800 to-orange-900 
                text-blue-300 font-bold shadow-lg shadow-red-500/30">
          IC
        </div>

        <h1 className="text-lg md:text-xl font-extrabold tracking-wide text-white">
          Living proof rm -rf / is a bad idea.
        </h1>
      </motion.div>

      {/* Right: Mobile Hamburger */}
      <motion.button
        whileTap={{ scale: 0.85, rotate: -10 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        onClick={toggleSidebar}
        aria-label="Open menu"
        className="p-4 rounded-lg text-gray-200 hover:text-white 
                   bg-gradient-to-br from-gray-800/40 to-gray-700/40 
                   hover:from-pink-500/30 hover:to-purple-500/30
                   transition-all duration-300 ease-out md:hidden"
      >
        <Menu size={26} />
      </motion.button>
    </motion.nav>
  );
}

export default Navbar;
