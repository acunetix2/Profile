import SectionHeading from "../components/SectionHeading";
import { Button } from "@/components/ui/button";
import { FileDown, Shield, Github } from "lucide-react";

function About() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800">
      <SectionHeading title="About Me" />

      <div className="bg-gray-900 border border-gray-800 rounded-xl shadow-lg p-8 mt-8 
                      hover:shadow-xl transition">
        <p className="text-gray-300 leading-relaxed mb-6">
          I’m <span className="text-white font-semibold">Iddy Kibor Chesire</span>, 
          an aspiring <span className="text-blue-400">Cybersecurity Analyst</span>, 
          <span className="text-blue-400"> Junior Network Administrator</span>, 
          and <span className="text-blue-400">Web Developer</span> currently building 
          and sharpening my skills in protecting systems, securing networks, and 
          developing applications. Alongside this, I have a growing passion for 
          <span className="text-green-400"> Artificial Intelligence (AI)</span> and how it 
          intersects with security and technology.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          My tech journey began with curiosity breaking down how networks 
          communicate, why security vulnerabilities exist, and how systems can 
          be made stronger. Since then, I’ve been learning, experimenting, and 
          building projects that combine practical knowledge with real-world 
          problem-solving.
        </p>

        {/* TryHackMe Profile */}
        <div className="mb-8 mt-6 p-4 rounded-lg border border-gray-800 bg-gray-800/60 hover:border-blue-500/40 transition text-center">
          <div className="flex items-center gap-3 justify-center mb-3">
            <Shield className="w-6 h-6 text-blue-400" />
            <h3 className="text-white font-semibold text-lg">TryHackMe Profile</h3>
          </div>
          <a
            href="https://tryhackme.com/p/Phantomjac007"
            target="_blank"
            rel="noreferrer"
          >
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=3276864"
              title="TryHackMe Profile Badge"
              className="mx-auto w-full max-w-md h-[220px] border-0 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            ></iframe>
          </a>
        </div>

        {/* GitHub Stats */}
        <div className="mb-8 mt-6 p-4 rounded-lg border border-gray-800 bg-gray-800/60 hover:border-blue-500/40 transition text-center">
          <div className="flex items-center gap-3 justify-center mb-3">
            <Github className="w-6 h-6 text-gray-400" />
            <h3 className="text-white font-semibold text-lg">GitHub Stats</h3>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            {/* Stats Card */}
            <img
              src="https://github-readme-stats.vercel.app/api?username=acunetix2&show_icons=true&theme=radical"
              alt="GitHub Stats"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            {/* Languages Card */}
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=acunetix2&layout=compact&theme=radical"
              alt="Most Used Languages"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Resume Button */}
        <div className="flex justify-start">
          <a href="/resume.pdf" download>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-2 transition-all duration-300">
              <FileDown size={16} />
              Download My Resume
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
