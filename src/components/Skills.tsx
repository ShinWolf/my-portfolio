import React from "react";
import { Code2 } from "lucide-react";

interface SkillsProps {
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="compétences" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Compétences Techniques
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
              <Code2 className="w-5 h-5" /> Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.frontend.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg text-sm border border-cyan-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
              <Code2 className="w-5 h-5" /> Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.backend.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg text-sm border border-blue-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Outils */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <h3 className="text-xl font-bold mb-4 text-purple-400 flex items-center gap-2">
              <Code2 className="w-5 h-5" /> Outils
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.tools.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg text-sm border border-purple-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
