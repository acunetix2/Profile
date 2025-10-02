import React from "react";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, damping: 14 }}
      className="fixed top-0 left-0 md:left-56 right-0 h-20 
                 bg-gray-950 backdrop-blur-xl flex items-center justify-between px-6 
                 shadow-xl shadow-blue-500/20 z-30 border-b border-blue-500/10"
    >
      {/* Branding Quote */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-3"
      >
        <h1 className="text-lg md:text-xl font-extrabold tracking-wide text-white">
          Living proof rm -rf / is a bad idea.
        </h1>
      </motion.div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Add profile or buttons if needed */}
      </div>
    </motion.nav>
  );
}

export default Navbar;
