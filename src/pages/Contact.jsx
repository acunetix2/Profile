import SectionHeading from "../components/SectionHeading";
import ContactForm from "../components/ContactForm";
import { Github, Linkedin, Mail } from "lucide-react";

function Contact() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto text-center">
      {/* Heading */}
      <SectionHeading title="Contact Me" />

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info */}
      <div className="mt-8">
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          Email:{" "}
          <a
            href="mailto:iddychesire098@gmail.com"
            className="text-blue-400 hover:underline"
          >
            iddychesire098@gmail.com
          </a>
        </p>

        {/* Social Links with Icons */}
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/iddy-k-chesire-55009b264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="https://github.com/acunetix2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="mailto:iddychesire098@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-400 transform hover:scale-110 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
