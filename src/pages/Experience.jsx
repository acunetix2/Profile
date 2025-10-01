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

function Experience() {
  return (
    <section className="px-6 py-12 max-w-5xl mx-auto bg-gradient-to-b from-gray-900 via-blue-900 to-gray-800">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0f172a] border border-gray-800 rounded-xl p-5 shadow hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-lg font-semibold text-indigo-400">
                {job.role}
              </h3>
              <p className="text-gray-300">{job.company}</p>
              <span className="text-sm text-green-400 italic block mt-1">
                {job.duration}
              </span>
              <ul className="list-disc list-inside mt-2 text-green-400 space-y-1">
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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0f172a] border border-gray-800 rounded-xl p-5 shadow hover:shadow-blue-500/20 transition"
            >
              <h3 className="text-lg font-semibold text-indigo-400">
                {edu.degree}
              </h3>
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
        <ul className="space-y-3">
          {certifications.map((cert, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0f172a] border border-gray-800 rounded-xl p-4 shadow hover:shadow-blue-500/20 transition"
            >
              <span className="text-indigo-400 font-semibold">{cert.title}</span>{" "}
              <span className="text-green-400"> : : {cert.issuer}</span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Training */}
      <div className="mb-12">
        <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-400 mb-6 border-b border-gray-700 pb-2">
          <BookOpen className="w-6 h-6 text-orange-500" /> Training
        </h2>
        <ul className="space-y-3">
          {training.map((train, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0f172a] border border-gray-800 rounded-xl p-4 shadow hover:shadow-blue-500/20 transition"
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
        <ul className="space-y-3">
          {awards.map((award, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#0f172a] border border-gray-800 rounded-xl p-4 shadow hover:shadow-blue-500/20 transition"
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
    </section>
  );
}

export default Experience;
