import {
  Home,
  User,
  FolderKanban,
  Briefcase,
  PenTool,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBlogger } from "react-icons/fa";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "/me", label: "Home", icon: <Home size={18} /> },
    { id: "/me/aboutme", label: "About Me", icon: <User size={18} /> },
    { id: "/me/portfolio", label: "My Projects", icon: <FolderKanban size={18} /> },
    { id: "/me/experience", label: "Experience & Education", icon: <Briefcase size={18} /> },
    { id: "/me/skills", label: "Skills & Tools", icon: <PenTool size={18} /> },
    { id: "/me/blog", label: "Blog & Articles", icon: <FaBlogger size={18} /> },
    { id: "/me/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Top Navbar (mobile only) */}
      <div className="fixed top-0 left-0 right-0 h-12 
                      bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 
                      border-b border-gray-800 flex items-center px-4 z-50 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-gray-300 hover:text-white transition relative z-50"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
        <h1 className="ml-4 text-white font-semibold text-lg tracking-wide">
          Iddy Chesire
        </h1>
      </div>

      {/* Desktop Sidebar */}
      <motion.aside
        className="hidden md:flex fixed top-0 left-0 h-screen w-56
                   bg-gradient-to-b from-gray-950 via-gray-900 to-blue-950
                   border-r border-gray-800 shadow-xl flex-col justify-between pt-0 z-40"
      >
        {/* Branding */}
        <div className="flex flex-col items-center p-6 border-b border-gray-800">
          <div className="w-12 h-12 flex items-center justify-center rounded-full 
                          bg-gradient-to-br from-blue-600 to-indigo-500 
                          text-white font-bold shadow-md mb-3">
            IC
          </div>
          <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Iddy Chesire
          </h1>
          <p className="text-xs text-cyan-400 mt-1">Develop • Secure • Maintain</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-4 space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.id;
            return (
              <Link key={item.id} to={item.id} className="block">
                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                >
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start flex items-center gap-3 rounded-lg px-3 py-2 transition",
                      "text-gray-300 hover:bg-gray-800 hover:text-white",
                      isActive &&
                        "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md"
                    )}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </Button>
                </motion.div>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 text-xs text-gray-500 text-center border-t border-gray-800">
          &copy; {new Date().getFullYear()} Iddy Chesire
        </div>
      </motion.aside>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 90, damping: 18 }}
            className="fixed top-0 left-0 h-screen w-56
                       bg-gradient-to-b from-gray-950 via-gray-900 to-blue-950
                       border-r border-gray-800 shadow-xl flex flex-col justify-between pt-12 z-40 md:hidden"
          >
            {/* Branding (optional for mobile) */}
            <div className="flex flex-col items-center p-6 border-b border-gray-800">
              <div className="w-12 h-12 flex items-center justify-center rounded-full 
                              bg-gradient-to-br from-blue-600 to-indigo-500 
                              text-white font-bold shadow-md mb-3">
                IC
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Iddy Chesire
              </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = location.pathname === item.id;
                return (
                  <Link
                    key={item.id}
                    to={item.id}
                    onClick={() => setOpen(false)}
                    className="block"
                  >
                    <motion.div
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    >
                      <Button
                        variant="ghost"
                        className={cn(
                          "w-full justify-start flex items-center gap-3 rounded-lg px-3 py-2 transition",
                          "text-gray-300 hover:bg-gray-800 hover:text-white",
                          isActive &&
                            "bg-gradient-to-r from-indigo-600 to-blue-600 text-white shadow-md"
                        )}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </Button>
                    </motion.div>
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-4 text-xs text-gray-500 text-center border-t border-gray-800">
              &copy; {new Date().getFullYear()} Iddy Chesire
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
