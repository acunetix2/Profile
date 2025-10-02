import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 py-8 mt-20">
      {/* Top Gradient Bar */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-center md:text-left">
        {/* Copyright */}
        <p className="text-sm text-gray-400 mb-4 md:mb-0">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Iddy Chesire</span>. All
          rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/acunetix2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transform hover:scale-110 transition duration-300"
          >
            <Github size={22} />
          </a>
          <a
            href="https://linkedin.com/in/iddy-k-chesire-55009b264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-500 transform hover:scale-110 transition duration-300"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://twitter.com/metapeek"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-sky-400 transform hover:scale-110 transition duration-300"
          >
            <Twitter size={22} />
          </a>
          <a
            href="mailto:iddychesire098@gmail.com"
            className="text-gray-400 hover:text-pink-400 transform hover:scale-110 transition duration-300"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
