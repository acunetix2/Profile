import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills.js";
import { FaExternalLinkAlt } from "react-icons/fa";

function Skills() {
  return (
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <SectionHeading title="Skills" />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Object.keys(skills).map((category, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 shadow-lg rounded-xl p-6 hover:shadow-2xl transition"
          >
            <h3 className="text-lg font-semibold capitalize mb-4 text-white border-b border-gray-700 pb-2">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills[category].map((s, j) =>
                typeof s === "string" ? (
                  <span
                    key={j}
                    className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-200 border border-gray-600 shadow-sm hover:shadow-md hover:scale-105 hover:bg-indigo-600 hover:text-white transition transform"
                  >
                    {s}
                  </span>
                ) : (
                  <a
                    key={j}
                    href={s.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 text-sm rounded-full bg-gray-700 text-blue-400 border border-gray-600 shadow-sm hover:shadow-md hover:scale-105 hover:bg-indigo-600 hover:text-white flex items-center gap-1 transition transform"
                  >
                    {s.name} <FaExternalLinkAlt size={12} />
                  </a>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
