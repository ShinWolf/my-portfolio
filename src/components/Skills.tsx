import React from "react";

interface SkillsProps {
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
  };
}

const SkillGroup: React.FC<{ title: string; items: string[]; accent: string }> = ({
  title,
  items,
  accent,
}) => (
  <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
    <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 ${accent}`}>
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1.5 bg-zinc-700 rounded-lg text-sm text-zinc-300"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="competences" className="py-24 px-6 bg-zinc-800/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-white">Compétences</h2>
        <div className="w-12 h-1 bg-amber-400 mb-12"></div>
        <div className="grid md:grid-cols-3 gap-6">
          <SkillGroup title="Frontend" items={skills.frontend} accent="text-amber-400" />
          <SkillGroup title="Backend" items={skills.backend} accent="text-orange-400" />
          <SkillGroup title="Outils" items={skills.tools} accent="text-yellow-400" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
