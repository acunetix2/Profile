import React, { useState } from "react";
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
  ExternalLink,
  X,
} from "lucide-react";

// Staggered container animation
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Card entrance animation
const cardVariant = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function Experience() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <section className="min-h-screen px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 max-w-7xl mx-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Main Heading */}
      <div className="mb-12 sm:mb-16">
        <SectionHeading title="Experience & Education" />
      </div>

      <div className="space-y-16 sm:space-y-20 lg:space-y-24">
        {/* Work Experience */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/30">
                <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Work Experience
              </h2>
            </div>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {experience.map((job, i) => (
              <motion.article
                key={i}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-slate-900/95 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/5 group-hover:to-purple-500/10 transition-all duration-700" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-cyan-300 mb-2 line-clamp-2">
                    {job.role}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 font-medium mb-3">
                    {job.company}
                  </p>
                  <span className="inline-flex items-center text-xs sm:text-sm text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                    {job.duration}
                  </span>
                  <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3">
                    {job.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="mt-1.5 flex-shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                        </div>
                        <span className="text-sm sm:text-base text-slate-400 leading-relaxed">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg shadow-purple-500/30">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400">
                Education
              </h2>
            </div>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {education.map((edu, i) => (
              <motion.article
                key={i}
                variants={cardVariant}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-slate-900/95 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-purple-500/10 group-hover:via-pink-500/5 group-hover:to-orange-500/10 transition-all duration-700" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-300 mb-2 line-clamp-2">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-300 font-medium mb-4">
                    {edu.school}
                  </p>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {edu.year && (
                      <span className="inline-flex items-center text-xs sm:text-sm text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full border border-emerald-400/20">
                        {edu.year}
                      </span>
                    )}
                    {edu.grade && (
                      <span className="inline-flex items-center text-xs sm:text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1.5 rounded-full border border-cyan-400/20">
                        Grade: {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl shadow-lg shadow-blue-500/30">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Certifications
              </h2>
            </div>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {certifications.map((cert, i) => (
              <motion.article
                key={i}
                variants={cardVariant}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative bg-gradient-to-br from-slate-900/95 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-blue-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-700" />
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    {/* ✅ Small Logo */}
                    {cert.image && (
                      <motion.img
                        src={cert.image}
                        alt={cert.title}
                        className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-md bg-slate-800/30 p-1 transition-transform duration-300 ease-out group-hover:scale-125 cursor-pointer"
                        whileHover={{ scale: 2 }}
                        onClick={() => setModalImage(cert.image)}
                      />
                    )}

                    <h3 className="text-base sm:text-lg font-semibold text-blue-300 line-clamp-2 flex-1">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-400 pl-11 sm:pl-12">
                    {cert.issuer}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Training */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg shadow-indigo-500/30">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                Training
              </h2>
            </div>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {training.map((train, i) => (
              <motion.article
                key={i}
                variants={cardVariant}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative bg-gradient-to-br from-slate-900/95 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/10 group-hover:to-purple-500/10 transition-all duration-700" />
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400 flex-shrink-0" />
                    <h3 className="text-base sm:text-lg font-semibold text-purple-300 line-clamp-2 flex-1">
                      {train.title}
                    </h3>
                  </div>
                  <div className="pl-5 space-y-1.5">
                    <p className="text-sm sm:text-base text-slate-400">
                      {train.provider}
                    </p>
                    <span className="inline-flex items-center text-xs sm:text-sm text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-full border border-emerald-400/20">
                      {train.year}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Awards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="mb-8 sm:mb-10">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="p-2 sm:p-2.5 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl shadow-lg shadow-amber-500/30">
                <AwardIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-red-400">
                Awards
              </h2>
            </div>
            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-amber-400 to-orange-600 rounded-full mt-3 sm:mt-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {awards.map((award, i) => (
              <motion.article
                key={i}
                variants={cardVariant}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative bg-gradient-to-br from-slate-900/95 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-xl hover:shadow-amber-500/30 transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-500/0 group-hover:from-amber-500/10 group-hover:to-orange-500/10 transition-all duration-700" />
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-amber-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="mt-1 w-2 h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 flex-shrink-0" />
                    {award.link ? (
                      <a
                        href={award.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-semibold text-amber-300 hover:text-amber-200 transition-colors line-clamp-2 flex-1 group/link"
                      >
                        <span className="flex items-center gap-2">
                          {award.title}
                          <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        </span>
                      </a>
                    ) : (
                      <h3 className="text-base sm:text-lg font-semibold text-amber-300 line-clamp-2 flex-1">
                        {award.title}
                      </h3>
                    )}
                  </div>
                  {award.issuer && (
                    <p className="text-sm sm:text-base text-slate-400 pl-5">
                      {award.issuer}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ✅ Image Modal Overlay */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
          onClick={() => setModalImage(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <X
              className="absolute top-2 right-2 w-6 h-6 text-white cursor-pointer hover:text-red-400 transition-colors"
              onClick={() => setModalImage(null)}
            />
            <img
              src={modalImage}
              alt="Popout"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Experience;
