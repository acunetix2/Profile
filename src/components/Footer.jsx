import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative  bg-gray-100 dark:bg-gray-900 py-4 mt-12">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400  to-green-700"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-gradient-to-b from-gray-900 via-blue-900 to-gray-800 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Iddy Chesire. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/acunetix2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 dark:text-green-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/iddy-k-chesire-55009b264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/metapeek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-700 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Twitter size={22} />
          </a>
          <a
            href="mailto:iddychesire098@gmail.com"
            className="text-green-600 dark:text-gray-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
