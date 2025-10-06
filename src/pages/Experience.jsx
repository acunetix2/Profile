import SectionHeading from "../components/SectionHeading";
import {
  experience,
  education,
  certifications,
  training,
  awards,
} from "../data/experience";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  BadgeCheck,
  BookOpen,
  Award as AwardIcon,
} from "lucide-react";

// Reusable animation variants for slow slide-in
const slideIn = {
  hidden: { opacity: 0, y: 100 }, // start lower on the screen
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25, // slower stagger
      duration: 1.2, // smooth slow motion
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic easing
    },
  }),
};

function Experience() {
  return (
    <motion.section
      className="px-6 py-12 max-w-5xl mx-auto bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800 overflow-hidden"
      initial="hidden"
      animate="visible"
    >
      {/* Main Heading */}
      <SectionHeading title="Experience & Education" />

      {/* Work Experience */}
      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
          <Briefcase className="w-6 h-6 text-orange-500" /> Work Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.map((job, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={slideIn}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-[#0f172a]/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-400">{job.role}</h3>
              <p className="text-gray-300">{job.company}</p>
              <span className="text-sm text-green-400 italic block mt-1">
                {job.duration}
              </span>
              <ul className="list-disc list-inside mt-3 text-green-400 space-y-1 text-sm">
                {job.details.map((detail, j) => (
                  <li key={j}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
          <GraduationCap className="w-6 h-6 text-orange-500" /> Education
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={slideIn}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-[#0f172a]/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/30 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-indigo-400">{edu.degree}</h3>
              <p className="text-gray-300">{edu.school}</p>
              {edu.year && (
                <span className="text-sm text-green-400 italic block mt-1">
                  {edu.year}
                </span>
              )}
              {edu.grade && (
                <span className="block text-sm text-green-400">
                  Grade: {edu.grade}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
          <BadgeCheck className="w-6 h-6 text-orange-500" /> Certifications
        </h2>
        <ul className="space-y-4">
          {certifications.map((cert, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={slideIn}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-[#0f172a]/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/30 transition-all duration-300"
            >
              <span className="text-indigo-400 font-semibold">{cert.title}</span>{" "}
              <span className="text-green-400"> :: {cert.issuer}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Training */}
      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
          <BookOpen className="w-6 h-6 text-orange-500" /> Training
        </h2>
        <ul className="space-y-4">
          {training.map((train, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={slideIn}
              whileHover={{ scale: 1.03, y: -4 }}
              className="bg-[#0f172a]/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/30 transition-all duration-300"
            >
              <span className="text-indigo-400 font-semibold">{train.title}</span>{" "}
              <span className="text-green-400">
                :: {train.provider} ({train.year})
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Awards */}
      <div>
        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
          <AwardIcon className="w-6 h-6 text-orange-500" /> Awards
        </h2>
        <ul className="space-y-4">
          {awards.map((award, i) => (
            <motion.li
              key={i}
              custom={i}
              variants={slideIn}
              whileHover={{ y: -4, scale: 1.03 }}
              className="bg-[#0f172a]/90 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/30 transition-all duration-300"
            >
              {award.link ? (
                <a
                  href={award.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:underline font-semibold"
                >
                  {award.title}
                </a>
              ) : (
                <span className="text-indigo-400 font-semibold">
                  {award.title}
                </span>
              )}
              {award.issuer && (
                <span className="text-green-400"> : {award.issuer}</span>
              )}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.section>
  );
}

export default Experience;
