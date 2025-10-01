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

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { id: "/", label: "Home", icon: <Home size={18} /> },
    { id: "/about", label: "About", icon: <User size={18} /> },
    { id: "/portfolio", label: "Projects", icon: <FolderKanban size={18} /> },
    { id: "/experience", label: "Experience", icon: <Briefcase size={18} /> },
    { id: "/skills", label: "Skills", icon: <PenTool size={18} /> },
    { id: "/contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  return (
    <>
      {/* Top Navbar (mobile only) */}
      <div className="fixed top-0 left-0 right-0 h-12 bg-gray-900 border-b border-gray-800 flex items-center px-4 z-50 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-gray-300 hover:text-white transition"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
        <h1 className="ml-4 text-white font-semibold text-lg tracking-wide">
          Iddy Chesire
        </h1>
      </div>

      {/* Sidebar (desktop + mobile overlay) */}
      <AnimatePresence>
        {(open || window.innerWidth >= 768) && (
          <motion.aside
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={cn(
              "fixed top-0 left-0 h-screen w-56 bg-gray-900 border-r border-gray-800 shadow-lg flex flex-col justify-between z-40 pt-12 md:pt-0"
            )}
          >
            {/* Logo / Name (desktop only) */}
            <div className="hidden md:block p-6 border-b border-gray-800">
              <h1 className="text-xl font-bold text-white">Iddy Chesire</h1>
              <p className="text-sm text-gray-400">Cybersecurity Analyst</p>
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
                    <Button
                      variant="ghost"
                      className={cn(
                        "w-full justify-start flex items-center gap-3 text-gray-300 hover:bg-gray-800 hover:text-white rounded-lg px-3 py-2 transition",
                        isActive &&
                          "bg-indigo-600 text-white hover:bg-indigo-500"
                      )}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="p-4 text-xs text-gray-500 text-center border-t border-gray-800">
              © {new Date().getFullYear()} Iddy Chesire
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
