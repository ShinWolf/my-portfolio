import About from "./components/About";
import Contact from "./components/Contact";
import CV from "./components/CV";
import Experience from "./components/Experiences";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  const projectsData = [
    {
      title: "NovaBank (SOON)",
      description:
        "Application bancaire complète : API sécurisée avec gestion utilisateurs, comptes et virements, couplée à une interface web responsive avec Angular Material et NgRx.",
      tech: [
        "Java 25",
        "Spring Boot 3+",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "Angular 18+",
        "NgRx",
        "Docker",
      ],
      link: "#",
    },
    {
      title: "CandiFlow",
      description:
        "SaaS de suivi de candidatures : tableau de bord, gestion des statuts (Applied, Interview, Offer, Rejected), filtres, pagination et statistiques. Authentification JWT avec rôles USER / ADMIN.",
      tech: [
        "Java 25",
        "Spring Boot 3+",
        "Spring Security",
        "JWT",
        "PostgreSQL",
        "React",
        "Docker",
        "Swagger",
      ],
      link: "https://github.com/ShinWolf/CandiFlow",
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
        "Swagger",
        "React",
        "Docker",
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
    <div className="min-h-screen bg-zinc-900 text-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Projects projects={projectsData} />
      <Skills skills={skillsData} />
      <Experience experience={experienceData} />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
