import React from "react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

interface ExperienceProps {
  experience: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-white">Expérience</h2>
        <div className="w-12 h-1 bg-amber-400 mb-12"></div>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-700 ml-1"></div>
          <div className="space-y-10">
            {experience.map((exp, index) => (
              <div key={index} className="pl-8 relative">
                <div className="absolute left-0 top-1.5 w-2.5 h-2.5 rounded-full bg-amber-400 -translate-x-0.75"></div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 mb-1">
                  <h3 className="text-white font-bold">{exp.role}</h3>
                  <span className="hidden sm:block text-zinc-600 mx-2">·</span>
                  <span className="text-amber-400 text-sm font-medium">{exp.company}</span>
                </div>
                <p className="text-xs text-zinc-500 mb-3 font-medium tracking-wide">{exp.period}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
