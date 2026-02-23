import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
function App() {
  const projectsData = [
    {
      title: "Plateforme E-commerce",
      description:
        "Application complète avec panier, paiement Stripe et dashboard admin",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Gestionnaire de Projets",
      description:
        "Outil collaboratif de gestion de tâches avec système de notifications en temps réel",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
      link: "#",
    },
    {
      title: "API REST Analytics",
      description:
        "Backend pour analyse de données avec authentification JWT et rate limiting",
      tech: ["Python", "Django", "Redis", "Docker"],
      link: "#",
    },
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      <Navbar />
      <Hero />
      <Projects projects={projectsData} />
    </div>
  );
}

export default App;
