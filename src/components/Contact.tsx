import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-zinc-800/40">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2 text-white">Contact</h2>
        <div className="w-12 h-1 bg-amber-400 mb-8 mx-auto"></div>
        <p className="text-zinc-400 mb-10 text-base leading-relaxed">
          Je suis ouvert à de nouvelles opportunités et collaborations.
          N'hésitez pas à me contacter.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:ericfief.pro@gmail.com?subject=Contact Portfolio"
            className="px-7 py-3 bg-amber-400 text-zinc-900 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            <SiGmail className="w-4 h-4" />
            Envoyer un email
          </a>

          <a
            href="https://www.linkedin.com/in/eric-fief/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-zinc-600 rounded-lg font-semibold text-zinc-300 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            <SiLinkedin className="w-4 h-4" />
            LinkedIn
          </a>

          <a
            href="https://github.com/ShinWolf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-zinc-600 rounded-lg font-semibold text-zinc-300 hover:border-amber-400 hover:text-amber-400 transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            <SiGithub className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
