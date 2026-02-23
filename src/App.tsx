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
      title: "NovaBank API (SOON)",
      description:
        "API bancaire complète avec gestion utilisateurs, comptes, virements, 2FA et historique, sécurisée avec JWT et Spring Security.",
      tech: [
        "Java 25",
        "Spring Boot 3+",
        "PostgreSQL",
        "Spring Security",
        "JWT",
        "Flyway",
        "Swagger",
      ],
      link: "#",
    },
    {
      title: "NovaBank UI (SOON)",
      description:
        "Interface utilisateur web responsive pour gérer comptes, virements et notifications, avec Angular Material et NgRx.",
      tech: [
        "Angular 18+",
        "Angular Material",
        "NgRx",
        "Responsive Design",
        "HTTP Interceptors",
        "Guards de routes",
      ],
      link: "#",
    },
    {
      title: "TaskManager (SOON)",
      description:
        "Application web complète type Jira pour gérer projets, tickets, utilisateurs, rôles, commentaires et notifications, avec API sécurisée et interface responsive.",
      tech: [
        "Java 25",
        "Spring Boot 3+",
        "PostgreSQL",
        "Spring Security",
        "JWT",
        "Flyway",
        "Swagger",
        "React",
      ],
      link: "#",
    },
  ];

  const skillsData = {
    frontend: ["TypeScript", "React", "Angular", "Tailwind CSS", "Flutter"],
    backend: ["Node.js", "Express", "Fastify", "Java", "Spring", "PostgreSQL"],
    tools: ["Git", "Docker", "CI/CD", "REST APIs"],
  };

  const experienceData = [
    {
      role: "Développeur Full-Stack - Alternance",
      company: "Worldline, Seclin",
      period: "Sept 2022 - Sept 2025",
      description:
        "Participation à l'évolution de projets existants, ajout de fonctionnalités et amélioration de l'ergonomie. Renforcement de la maintenabilité du code, correction de failles de sécurité, optimisation des performances. Utilisation de JSP, EmberJS pour le front-end, Spring Boot pour le back-end, gestion de bases de données et déploiement via Docker.",
    },
    {
      role: "Développeur - Stage",
      company: "GameWork, Somain",
      period: "Janv 2022 - Févr 2022",
      description:
        "Réalisation d'un gestionnaire de fichiers pour stocker et partager tous types de documents (vidéo, photo, ODT, PDF). Découverte et utilisation de Node.js et Socket.io.",
    },
    {
      role: "Développeur - Stage",
      company: "GameWork, Somain",
      period: "Mai 2021 - Juin 2021",
      description:
        "Création d'un site internet en PHP, JS et CSS. Découverte de technologies comme SASS et BEM pour l'architecture CSS.",
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
