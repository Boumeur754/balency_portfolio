import Link from 'next/link'
import { projects } from '@/data/projects'
import { FiGithub, FiExternalLink, FiFolder, FiCode, FiStar, FiArrowRight } from 'react-icons/fi'

export default function Projects() {
  const categories = [...new Set(projects.map(p => p.category))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Mes Projets</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez une sélection de mes réalisations techniques les plus significatives, 
            allant des projets académiques aux applications web complètes.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filtres par catégorie */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Filtrer par catégorie</h2>
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors">
              Tous les projets
            </button>
            {categories.map(category => (
              <button 
                key={category}
                className="px-6 py-3 bg-white text-gray-700 font-medium rounded-xl border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 group"
            >
              {/* En-tête du projet */}
              <div className="relative h-48 bg-gradient-to-r from-blue-500 to-cyan-500 overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform">🚀</div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <div className="flex items-center text-yellow-500">
                    <FiStar className="mr-1" />
                    <span className="font-semibold">Pro</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Technologies utilisées</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions et liens */}
                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group/link"
                  >
                    Voir les détails
                    <FiArrowRight className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <div className="flex items-center space-x-4">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Code source GitHub"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors"
                        title="Voir la démo"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <FiFolder className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">{projects.length}</h3>
                <p className="text-gray-600">Projets réalisés</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                <FiCode className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {projects.reduce((acc, project) => acc + project.technologies.length, 0)}
                </h3>
                <p className="text-gray-600">Technologies maîtrisées</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                <FiStar className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900">100%</h3>
                <p className="text-gray-600">Projets fonctionnels</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Vous avez un projet en tête ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Je serais ravi de discuter de vos idées et de voir comment je peux vous aider à les concrétiser.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg"
          >
            Discutons de votre projet
          </Link>
        </div>
      </div>
    </div>
  )
}