import React, { useState, useEffect } from "react";

const navItems = [
  { label: "À propos", href: "#a-propos" },
  { label: "Projets", href: "#projets" },
  { label: "Compétences", href: "#competences" },
  { label: "Expérience", href: "#experience" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-zinc-900/95 backdrop-blur-sm border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-amber-400 tracking-tight">
          Eric Fief
        </div>
        <div className="flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-400 hover:text-amber-400 transition-colors duration-200 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
