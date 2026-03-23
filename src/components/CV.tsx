import React from "react";
import { FileText, ExternalLink, Download } from "lucide-react";

const CV: React.FC = () => {
  const handleExportPdf = () => {
    const win = window.open("/cv/index.html", "_blank");
    if (win) {
      win.addEventListener("load", () => win.print());
    }
  };

  return (
    <section id="cv" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-white">Mon CV</h2>
        <div className="w-12 h-1 bg-amber-400 mb-12"></div>

        <div className="bg-zinc-800 border border-zinc-700 rounded-xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-zinc-700 rounded-lg">
              <FileText className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <p className="text-white font-semibold">Curriculum Vitae</p>
              <p className="text-zinc-400 text-sm">Eric Fief — Développeur Full Stack</p>
            </div>
          </div>
          <div className="flex gap-3 shrink-0">
            <a
              href="/cv/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-zinc-600 text-zinc-300 rounded-lg font-semibold hover:border-amber-400 hover:text-amber-400 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Voir
            </a>
            <button
              onClick={handleExportPdf}
              className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 text-zinc-900 rounded-lg font-semibold hover:bg-amber-300 transition-colors duration-200"
            >
              <Download className="w-4 h-4" />
              Exporter en PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV;
