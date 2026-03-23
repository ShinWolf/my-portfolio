import React from "react";
import { MapPin, Briefcase, GraduationCap, Heart } from "lucide-react";

const About: React.FC = () => {
  return (
    <section id="a-propos" className="py-24 px-6 bg-zinc-800/40">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-white">À propos</h2>
        <div className="w-12 h-1 bg-amber-400 mb-12"></div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Bio */}
          <div className="md:col-span-3 space-y-5">
            <p className="text-zinc-300 leading-relaxed">
              Développeur Full-Stack avec 3 ans d'alternance chez Worldline,
              passionné par le développement web, l'optimisation des performances
              et les bonnes pratiques. Je travaille aussi bien sur le back-end en
              Java / Spring Boot que sur des interfaces modernes en React ou Angular.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              En dehors du travail, je construis mes propres projets — comme
              NovaBank, une application bancaire complète — je joue beaucoup
              aux jeux vidéo, et je pratique le football et le badminton en club.
            </p>
          </div>

          {/* Quick facts */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Localisation</p>
                <p className="text-zinc-400 text-sm">Hénin-Beaumont, Nord (62)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Briefcase className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Expérience</p>
                <p className="text-zinc-400 text-sm">3 ans en alternance — Worldline, Seclin</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Formation</p>
                <p className="text-zinc-400 text-sm">Expert informatique & SI — EPSI Arras (2023–2025)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-white text-sm font-medium">Intérêts</p>
                <p className="text-zinc-400 text-sm">Football, badminton, projets perso (jeux, apps mobiles)</p>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#cv"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-amber-400 text-amber-400 rounded-lg text-sm font-medium hover:bg-amber-400/10 transition-colors duration-200"
              >
                Voir mon CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
