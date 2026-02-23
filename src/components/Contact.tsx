import React from "react";
import { SiGithub, SiGmail } from "react-icons/si";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-800/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Travaillons Ensemble
        </h2>
        <p className="text-gray-300 mb-8 text-lg">
          Je suis toujours ouvert à de nouvelles opportunités et collaborations
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ericfief.pro@gmail.com?subject=Contact Portfolio"
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <SiGmail className="w-5 h-5" />
            Envoyer un email
          </a>

          <a
            href="https://github.com/ShinWolf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-cyan-400 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            <SiGithub className="w-5 h-5" />
            Voir mon GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
