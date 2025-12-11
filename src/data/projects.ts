export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  images: string[];
  github?: string;
  category: string;
  date: string;
  features: string[];
  challenges: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "init-dev-serveur",
    title: "Initiation Développement Serveur",
    description: "Projet d'initiation au développement serveur avec Node.js et Express",
    longDescription: "Ce projet académique consiste en la création d'un serveur web basique avec Node.js et Express. Il inclut la gestion des routes, des middlewares, et la communication avec une base de données. Le projet démontre les concepts fondamentaux du développement backend.",
    technologies: ["JavaScript", "Node.js", "Express", "REST API", "PostgreSQL"],
    images: ["/images/projects/server-1.jpg", "/images/projects/server-2.jpg"],
    github: "https://github.com/Balency/420-707-init-dev-serveur",
    category: "Développement Backend",
    date: "2024-10-15",
    features: [
      "Serveur HTTP avec Node.js",
      "API REST avec Express",
      "Connexion à base de données",
      "Gestion des erreurs",
      "Middleware personnalisé"
    ],
    challenges: [
      "Comprendre le cycle de vie des requêtes HTTP",
      "Gérer les connexions asynchrones à la base de données",
      "Implémenter un système de routage efficace"
    ]
  },
  {
    id: 2,
    slug: "todo-app-exam",
    title: "Application To-Do (Examen)",
    description: "Application de gestion de tâches développée en PHP pour un examen",
    longDescription: "Application web complète de gestion de tâches développée en PHP dans le cadre d'un examen. Elle inclut l'authentification des utilisateurs, CRUD complet des tâches, et une interface utilisateur intuitive. Le projet démontre la maîtrise du développement web avec PHP et MySQL.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    images: ["/images/projects/todo-1.jpg", "/images/projects/todo-2.jpg"],
    github: "https://github.com/Balency/todo-exam",
    category: "Développement Web",
    date: "2024-09-20",
    features: [
      "Authentification utilisateur",
      "CRUD complet des tâches",
      "Interface responsive",
      "Validation des données",
      "Sécurité des sessions"
    ],
    challenges: [
      "Gérer les sessions utilisateur de manière sécurisée",
      "Optimiser les requêtes SQL",
      "Créer une interface utilisable sur mobile"
    ]
  },
  {
    id: 3,
    slug: "bibliotheque-gestion",
    title: "Système de Gestion de Bibliothèque",
    description: "Application web pour la gestion d'une bibliothèque avec Laravel",
    longDescription: "Système complet de gestion de bibliothèque développé avec le framework Laravel. L'application permet la gestion des livres, des membres, des prêts et des retours. Elle inclut également un système de rapports et de statistiques pour les administrateurs.",
    technologies: ["PHP", "Laravel", "Blade", "MySQL", "Bootstrap", "JavaScript"],
    images: ["/images/projects/library-1.jpg", "/images/projects/library-2.jpg"],
    github: "https://github.com/Balency/Bibbliotheque",
    category: "Application Web",
    date: "2024-08-10",
    features: [
      "Gestion des livres et auteurs",
      "Gestion des membres",
      "Suivi des prêts et retours",
      "Système de pénalités",
      "Tableau de bord administrateur"
    ],
    challenges: [
      "Modéliser les relations complexes entre entités",
      "Gérer les transactions de base de données",
      "Implémenter un système de pénalités automatique"
    ]
  },
  {
    id: 4,
    slug: "projet-tp1-lov",
    title: "Projet TP1 - Plateforme de Rencontres",
    description: "Plateforme de rencontres en ligne développée pour un travail pratique",
    longDescription: "Plateforme de rencontres sociale développée dans le cadre d'un travail pratique. L'application permet aux utilisateurs de créer des profils, de rechercher d'autres utilisateurs selon des critères spécifiques, et d'envoyer des messages. Elle intègre également un système de matchs mutuels.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    images: ["/images/projects/dating-1.jpg", "/images/projects/dating-2.jpg"],
    github: "https://github.com/Balency/projettp1lov",
    category: "Réseau Social",
    date: "2024-07-05",
    features: [
      "Création de profil utilisateur",
      "Recherche avancée avec filtres",
      "Système de matchs",
      "Messagerie interne",
      "Galerie de photos"
    ],
    challenges: [
      "Développer un algorithme de matching efficace",
      "Gérer la confidentialité des données",
      "Optimiser les performances de recherche"
    ]
  },
  {
    id: 5,
    slug: "solution-e-commerce",
    title: "Solution E-commerce",
    description: "Plateforme e-commerce avec catalogue et panier d'achat",
    longDescription: "Solution e-commerce complète développée pour un projet académique. La plateforme inclut un catalogue de produits, un système de panier, un processus de commande, et une interface d'administration. Elle démontre la compréhension des concepts fondamentaux du commerce électronique.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"],
    images: ["/images/projects/ecommerce-1.jpg", "/images/projects/ecommerce-2.jpg"],
    github: "https://github.com/Balency/solution-2",
    category: "E-commerce",
    date: "2024-06-15",
    features: [
      "Catalogue de produits avec catégories",
      "Panier d'achat persistant",
      "Processus de commande",
      "Interface administrateur",
      "Gestion des stocks"
    ],
    challenges: [
      "Gérer la persistance du panier sans compte utilisateur",
      "Sécuriser les transactions",
      "Optimiser l'affichage du catalogue"
    ]
  }
];