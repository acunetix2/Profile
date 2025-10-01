// src/pages/Skills.jsx
import SectionHeading from "../components/SectionHeading";
import { skills } from "../data/skills.js";
import { FaExternalLinkAlt } from "react-icons/fa";

function Skills() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto text-green-400 space-y-16
                        bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800">
      <SectionHeading title="Skills" />

      {Object.keys(skills).map((category) => (
        <div key={category}>
          {/* Category Title */}
          <h3
            className={`${
              category === "tools" ? "text-2xl mb-8" : "text-xl mb-6"
            } font-bold text-gray-100 border-b border-gray-700 pb-2`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </h3>

          {/* Stats category gets special layout */}
          {category === "stats" ? (
            <div className="flex flex-col sm:flex-row gap-6">
              {skills[category].map((s, j) => (
                <a
                  key={`${category}-${j}`}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between w-full sm:w-auto
                             bg-gradient-to-r from-indigo-900 to-indigo-700
                             border border-gray-700 rounded-xl p-6 shadow-md
                             hover:shadow-indigo-500/50 hover:-translate-y-1
                             transition-all duration-300 text-gray-100"
                >
                  <span className="font-semibold text-lg">{s.name}</span>
                  <FaExternalLinkAlt className="ml-2" size={16} />
                </a>
              ))}
            </div>
          ) : (
            /* Other categories use the normal grid */
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills[category].map((s, j) => (
                <div
                  key={`${category}-${j}`}
                  className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
                             border border-gray-700 rounded-xl p-6 shadow-md
                             hover:shadow-indigo-500/50 hover:-translate-y-1
                             transition-all duration-300 flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  {s.icon && (
                    <div className="text-3xl mb-3">
                      <s.icon className={s.color || "text-indigo-400"} />
                    </div>
                  )}

                  {/* Title / Name */}
                  {s.link ? (
                    <a
                      href={s.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold 
                                 text-blue-400 hover:text-indigo-400 transition"
                    >
                      {s.name} <FaExternalLinkAlt size={12} />
                    </a>
                  ) : (
                    <h4 className="text-sm font-semibold text-gray-200">
                      {s.name || s}
                    </h4>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Skills;
