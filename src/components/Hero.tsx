import React from "react";
import { ChevronDown } from "lucide-react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-3xl text-center">
        <p className="text-amber-400 text-sm font-medium tracking-widest uppercase mb-4">
          Développeur Full Stack
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
          Eric <span className="text-amber-400">Fief</span>
        </h1>
        <p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto leading-relaxed">
          3 ans d'expérience en alternance · Passionné par la création
          d'applications robustes et bien architecturées.
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#projets"
            className="px-7 py-3 bg-amber-400 text-zinc-900 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-7 py-3 border border-zinc-600 rounded-lg font-semibold text-zinc-300 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
          >
            Me contacter
          </a>
        </div>

        <div className="flex gap-6 justify-center text-zinc-500">
          <a
            href="https://github.com/ShinWolf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <SiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-fief/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:ericfief.pro@gmail.com"
            className="hover:text-amber-400 transition-colors"
          >
            <SiGmail className="w-5 h-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-zinc-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};

export default Hero;
