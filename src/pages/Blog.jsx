import SectionHeading from "../components/SectionHeading";
import { motion } from "framer-motion";
import { ExternalLink, Shield, Cpu, Wifi } from "lucide-react";

function Blog() {
  const highlights = [
    {
      title: "Cybersecurity Insights",
      desc: "Practical tips, GRC trends, and security best practices.",
      icon: <Shield className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "Networking",
      desc: "Routing, switching, VLANs, and real-world troubleshooting.",
      icon: <Wifi className="w-6 h-6 text-blue-400" />,
    },
    {
      title: "AI & Emerging Tech",
      desc: "Exploring AI applications in security and beyond.",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
    },
  ];

  return (
    <section className="px-6 py-20 max-w-6xl mx-auto text-center bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      {/* Heading */}
      <SectionHeading title="Blog & Insights" />

      {/* Intro */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto"
      >
        I share thoughts on cybersecurity, networking, and AI.  
        You’ll find articles ranging from hands-on tutorials to industry insights.  
        For full posts, visit{" "}
        <a
          href="https://www.linkedin.com/in/iddy-k-chesire-55009b264/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-medium text-blue-400 hover:text-blue-500 transition-colors"
        >
          LinkedIn <ExternalLink size={16} />
        </a>
        .
      </motion.p>

      {/* Highlights Grid */}
      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              delay: 0.3 + i * 0.2,
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="p-6 rounded-2xl bg-gray-900 border border-gray-800 shadow-lg hover:shadow-xl hover:border-blue-500/40 transition-all cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              {item.icon}
              <h3 className="font-semibold text-gray-100">{item.title}</h3>
            </div>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mt-14 inline-block"
      >
        <a
          href="https://www.linkedin.com/in/iddy-k-chesire-55009b264/"
          target="_blank"
          rel="noreferrer"
          className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg hover:shadow-blue-600/50 transition-transform hover:-translate-y-0.5"
        >
          Explore More Articles
        </a>
      </motion.div>
    </section>
  );
}

export default Blog;
