import Contact from "./components/Contact";
import Experience from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

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

  const skillsData = {
    frontend: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "PostgreSQL",
      "MongoDB",
    ],
    tools: ["Git", "Docker", "AWS", "CI/CD", "REST APIs"],
  };

  const experienceData = [
    {
      role: "Développeur Full Stack - Alternance",
      company: "TechCorp Solutions",
      period: "2022 - 2025",
      description:
        "Développement d'applications web, maintenance et optimisation de bases de données, participation aux sprints agiles",
    },
    {
      role: "Stage Développeur Web",
      company: "StartupWeb",
      period: "2021 - 2022",
      description:
        "Création de composants React réutilisables, intégration d'APIs REST, tests unitaires",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100">
      <Navbar />
      <Hero />
      <Projects projects={projectsData} />
      <Skills skills={skillsData} />
      <Experience experience={experienceData} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
