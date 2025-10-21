import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="w-full sm:w-[40%] md:w-[48%] lg:w-[97%]" 
    >
      <Card className="bg-[#0f172a] border border-gray-800 rounded-lg shadow-md hover:shadow-indigo-500/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 transform relative overflow-hidden group">
        
        {/* Glowing border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/40 rounded-lg transition duration-300 pointer-events-none" />

        <CardContent className="p-5 space-y-3 relative z-10">
          {/* Title */}
          <h3 className="text-lg font-semibold text-white truncate group-hover:text-indigo-400 transition">
            {project.title}
          </h3>

          {/* Description (shortened) */}
          <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition">
            {project.description}
          </p>

          {/* Tools */}
          {project.tools?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-gray-800 text-gray-300 text-[11px] px-2 py-0.5 rounded-md hover:bg-indigo-600 hover:text-white transition"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex justify-end gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 hover:scale-110 transition transform"
              >
                <Github size={18} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-indigo-400 hover:scale-110 transition transform"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
