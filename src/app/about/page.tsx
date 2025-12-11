import { FiDownload, FiBriefcase, FiBook, FiAward, FiMapPin, FiCalendar, FiCode, FiGlobe, FiUser } from 'react-icons/fi'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">À propos de moi</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Étudiant passionné en développement web, je transforme des idées créatives en solutions digitales performantes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 -mt-12">
        {/* Carte profil */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="md:flex">
            {/* Photo de profil */}
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center p-12">
              <div className="text-center">
                <div className="w-48 h-48 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-6xl">
                  <FiUser className="w-20 h-20" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Blondel Fred</h2>
                <p className="text-gray-600 mt-1">Étudiant en AEC</p>
                <p className="text-gray-600">Collège Ahuntsic</p>
                
                {/* Téléchargement CV */}
                <a 
                  href="/cv-blondel-fred.pdf" 
                  download="CV_Blondel_Fred.pdf"
                  className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all w-full max-w-xs"
                >
                  <FiDownload className="mr-3" />
                  Télécharger mon CV
                </a>
              </div>
            </div>

            {/* Informations */}
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <FiMapPin className="text-blue-600 mr-3 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Localisation</p>
                    <p className="font-semibold text-gray-900">Montréal, Québec</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <FiBook className="text-blue-600 mr-3 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Formation</p>
                    <p className="font-semibold text-gray-900">AEC Développement Web</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <FiCalendar className="text-blue-600 mr-3 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Disponibilité</p>
                    <p className="font-semibold text-gray-900">Immédiate</p>
                  </div>
                </div>
                <div className="flex items-center bg-gray-50 p-4 rounded-xl">
                  <FiGlobe className="text-blue-600 mr-3 w-6 h-6" />
                  <div>
                    <p className="text-sm text-gray-500">Langues</p>
                    <p className="font-semibold text-gray-900">Français, Anglais</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 flex items-center text-gray-900">
                  <FiCode className="mr-3 text-blue-600" />
                  Mon parcours
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Actuellement étudiant en AEC Développement d&apos;Applications Web au Collège Ahuntsic, 
                  je me spécialise dans la création d&apos;applications web modernes avec React, Next.js et Node.js. 
                  Passionné par l&apos;apprentissage continu, je me tiens constamment à jour avec les dernières 
                  technologies et meilleures pratiques du développement web.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Mon objectif est de combiner créativité et expertise technique pour développer des solutions 
                  innovantes qui répondent aux besoins réels des utilisateurs tout en étant performantes et accessibles.
                </p>
              </div>

              {/* Compétences rapides */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">Expertises clés</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Git', 'Docker'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-blue-50 text-blue-700 font-medium rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sections détaillées */}
        <div className="max-w-6xl mx-auto mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formation */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
                <FiBook className="mr-3 text-blue-600" />
                Formation Académique
              </h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900">AEC en Développement d&apos;Applications Web</h3>
                  <p className="text-gray-600 mb-2">Collège Ahuntsic • 2023-2024</p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Développement Frontend avec React et Next.js
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Développement Backend avec Node.js et bases de données
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Déploiement et DevOps avec Docker et Vercel
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Gestion de projet Agile et méthodologies de développement
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-xl font-semibold text-gray-900">Certifications</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">AWS Certified Cloud Practitioner</h4>
                      <p className="text-gray-600">Amazon Web Services • 2024</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Next.js Foundations</h4>
                      <p className="text-gray-600">Vercel • 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compétences */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-900">
                <FiAward className="mr-3 text-blue-600" />
                Compétences Techniques
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Développement Frontend</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'Redux', 'Framer Motion'].map(skill => (
                      <span key={skill} className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Développement Backend</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Python'].map(skill => (
                      <span key={skill} className="px-3 py-2 bg-green-100 text-green-800 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3 text-gray-900">Outils & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions', 'Figma', 'VS Code'].map(skill => (
                      <span key={skill} className="px-3 py-2 bg-purple-100 text-purple-800 rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Projets académiques */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Projets Académiques Réalisés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Système de gestion de bibliothèque",
                  desc: "Application complète avec authentification, recherche et gestion des prêts",
                  tech: ["React", "Node.js", "PostgreSQL"],
                  link: "#"
                },
                {
                  title: "Plateforme de recettes collaboratives",
                  desc: "Site de partage de recettes avec système de notation et favoris",
                  tech: ["Next.js", "TypeScript", "MongoDB"],
                  link: "#"
                },
                {
                  title: "Dashboard de données en temps réel",
                  desc: "Visualisation de données avec graphiques interactifs et WebSocket",
                  tech: ["React", "Chart.js", "Socket.io"],
                  link: "#"
                }
              ].map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-200">
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white text-gray-700 text-xs rounded border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                    Voir le projet →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Objectifs */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Mes Objectifs</h2>
            <div className="space-y-4">
              <p className="text-blue-100">
                Je recherche actuellement un stage ou une opportunité en développement web full stack 
                où je pourrai mettre en pratique mes compétences et continuer à apprendre dans un environnement professionnel.
              </p>
              <p className="text-blue-100">
                Mon but est de contribuer à des projets innovants tout en développant mon expertise 
                dans les technologies web modernes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}