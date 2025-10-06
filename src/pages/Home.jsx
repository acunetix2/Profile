import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import  profile  from "@/assets/profile.jpg";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[90vh] text-center px-6 
                        bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800">
      {/* Profile Image */}
      <img
        src={profile}
        alt="Iddy Chesire"
        className="w-40 h-40 rounded-full shadow-2xl mb-6 border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
      />

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">Iddy Kibor Chesire</h1>

      {/* Title */}
      <h2 className="text-xl md:text-2xl text-blue-400 mb-4 font-medium">
        Cybersecurity Analyst | Network Admin (Jr) | Web Developer
      </h2>

      {/* About */}
      <p className="max-w-2xl text-gray-300 mb-6 leading-relaxed">
        I’m an Undergraduate Information Technology Student with passion Cybersecurity. Adept in Computer Networking with an interest in protecting digital infrastructure, detecting vulnerabilities, and ensuring 
        secure communication. I also engage in building and maintaining web applications, combining my development skills with security.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <Link to="/portfolio">
          <Button variant="default" className="hover:scale-105 transition-transform duration-300">
            View My Work
          </Button>
        </Link>
        <a href="/resume.pdf" download>
          <Button variant="outline" className="hover:scale-105 transition-transform duration-300">
            Download Resume
          </Button>
        </a>
        <Link to="/contact">
          <Button className="bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 transition-all duration-300">
            Let’s Connect
          </Button>
        </Link>
      </div>

      {/* Social Media */}
      <div className="flex space-x-5 mt-4">
        {[
          { icon: <Github size={22} />, link: "https://github.com/acunetix2" },
          { icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/iddy-k-chesire-55009b264/" },
          { icon: <Twitter size={22} />, link: "https://twitter.com/metapeek" },
          { icon: <Mail size={22} />, link: "mailto:iddychesire098@gmail.com" },
        ].map((social, idx) => (
          <a
            key={idx}
            href={social.link || "#"}
            target={social.link.startsWith("mailto:") ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-sky-800 text-gray-300 hover:bg-blue-500 hover:text-white 
                       transform hover:scale-110 transition-all duration-300"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}

export default Home;
