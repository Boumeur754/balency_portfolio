import { notFound } from 'next/navigation'
import { projects } from '@/data/projects'
import { FiGithub, FiExternalLink, FiCalendar, FiTag, FiArrowLeft } from 'react-icons/fi'
import Link from 'next/link'

// CETTE FONCTION EST ESSENTIELLE POUR LES ROUTES DYNAMIQUES
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

// Génère les métadonnées pour chaque projet
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)
  
  if (!project) {
    return {
      title: 'Projet non trouvé',
    }
  }
  
  return {
    title: `${project.title} - Blondel Fred`,
    description: project.description,
  }
}

export default async function ProjectDetail({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Attendre la résolution des params
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header avec bouton retour */}
        <div className="mb-12">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
          >
            <FiArrowLeft className="mr-2" />
            Retour aux projets
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{project.title}</h1>
          
          <div className="flex flex-wrap gap-4 items-center text-gray-600 mb-6">
            <div className="flex items-center bg-blue-50 px-4 py-2 rounded-lg">
              <FiCalendar className="mr-2" />
              {new Date(project.date).toLocaleDateString('fr-CA', {
                year: 'numeric',
                month: 'long'
              })}
            </div>
            <div className="flex items-center bg-purple-50 px-4 py-2 rounded-lg">
              <FiTag className="mr-2" />
              {project.category}
            </div>
          </div>

          <p className="text-xl text-gray-700 mb-8 leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            {/* Images placeholder */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div 
                  key={i} 
                  className="h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <div className="text-white text-center p-6">
                    <div className="text-4xl mb-3">📱</div>
                    <p className="font-semibold">Aperçu du projet</p>
                    <p className="text-sm opacity-80 mt-1">Screenshot {i}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Fonctionnalités */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Fonctionnalités Principales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                    <span className="text-green-500 text-xl mr-3">✓</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Défis */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Défis Techniques</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <span className="text-blue-500 text-xl mr-3">⚡</span>
                    <span className="text-gray-700">{challenge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Stack Technique</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Liens */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Accès au Projet</h3>
              <div className="space-y-3">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white/20 hover:bg-white/30 p-4 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center">
                      <FiGithub className="mr-3" />
                      <span>Code source</span>
                    </div>
                    <FiExternalLink className="opacity-70 group-hover:opacity-100" />
                  </a>
                )}
                
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Détails</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold">
                    {new Date(project.date).toLocaleDateString('fr-CA')}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Catégorie</span>
                  <span className="font-semibold">{project.category}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Technologies</span>
                  <span className="font-semibold">{project.technologies.length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}