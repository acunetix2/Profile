import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gray-100 dark:bg-gray-900 py-8 mt-12">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"></div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Iddy Kibor Chesire. All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/acunetix2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/iddy-k-chesire-55009b264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Twitter size={22} />
          </a>
          <a
            href="mailto:iddychesire098@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transform hover:scale-110 transition-all duration-300"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
