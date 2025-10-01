import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Iddy Chesire"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-orange-500"
      />

      {/* Name */}
      <h1 className="text-4xl font-bold mb-2">Iddy Kibor Chesire</h1>

      {/* Title */}
      <h2 className="text-xl text-orange-500 mb-4">
        Cybersecurity Analyst | Network Admin (Jr) | Web Developer
      </h2>

      {/* About */}
      <p className="max-w-2xl text-gray-600 dark:text-gray-300 mb-6">
        I’m a passionate Cybersecurity Analyst and Junior Network Administrator with 
        hands-on experience in protecting digital infrastructure, detecting vulnerabilities, 
        and ensuring secure communication. I also build and maintain web applications, 
        combining technical networking expertise with full-stack development skills.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Link to="/portfolio">
          <Button variant="default">View My Work</Button>
        </Link>
        <a href="/resume.pdf" download>
          <Button variant="outline">Download Resume</Button>
        </a>
        <Link to="/contact">
          <Button className="bg-orange-500 text-white hover:bg-orange-600">
            Let’s Connect
          </Button>
        </Link>
      </div>

      {/* Social Media */}
      <div className="flex space-x-5 mt-4">
        <a
          href="https://github.com/acunetix2"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white transform hover:scale-110 transition-all duration-300"
        >
          <Github size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/iddy-k-chesire-55009b264/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white transform hover:scale-110 transition-all duration-300"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://twitter.com/your-handle"
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white transform hover:scale-110 transition-all duration-300"
        >
          <Twitter size={22} />
        </a>
        <a
          href="mailto:iddychesire098@gmail.com"
          className="p-3 rounded-full bg-gray-800 text-gray-300 hover:bg-orange-500 hover:text-white transform hover:scale-110 transition-all duration-300"
        >
          <Mail size={22} />
        </a>
      </div>
    </section>
  );
}

export default Home;
