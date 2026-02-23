import React from "react";
import { Code2, ChevronDown } from "lucide-react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl text-center relative z-10">
        <div className="mb-6 inline-block">
          <Code2 className="w-16 h-16 text-cyan-400 mx-auto animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          Développeur Full Stack
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          3 ans d'expérience en alternance • Passionné par le code et
          l'innovation
        </p>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#projets"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
          >
            Me contacter
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/ShinWolf"
            className="hover:text-cyan-400 transition-colors"
          >
            <SiGithub className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/eric-fief/"
            className="hover:text-cyan-400 transition-colors"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:ericfief.pro@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            <SiGmail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-cyan-400" />
      </div>
    </section>
  );
};

export default Hero;
