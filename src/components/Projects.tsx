import React from "react";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-white">Projets Récents</h2>
        <div className="w-12 h-1 bg-amber-400 mb-12"></div>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-amber-400/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-lg font-bold mb-3 text-white">
                {project.title}
              </h3>
              <p className="text-zinc-400 mb-4 text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-zinc-700 rounded text-xs text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link !== "#" ? (
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir le projet <FiExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <span className="text-zinc-600 text-sm font-medium">Bientôt disponible</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
