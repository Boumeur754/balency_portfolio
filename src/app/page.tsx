import { FiArrowRight, FiCode, FiDatabase, FiServer, FiLayers, FiCpu } from 'react-icons/fi'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            <span className="text-blue-300 text-sm font-medium">ÉTUDIANT EN AEC - RECHERCHE STAGE</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-white mb-2">Blondel Fred</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Développeur Web Full Stack
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Étudiant en AEC Développement d&apos;Applications Web au Collège Ahuntsic.
            Passionné par la création d&apos;applications web fonctionnelles avec PHP, Laravel et JavaScript.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/projects" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <span>Voir mes projets GitHub</span>
              <FiArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors"
            >
              Contact pour stage
            </Link>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Compétences Techniques</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Technologies et outils que j&apos;ai appris et pratiqués au cours de ma formation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Backend */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <FiServer className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement Backend</h3>
              <p className="text-gray-600 mb-6">
                Création d&apos;applications serveur robustes et d&apos;APIs RESTful.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">PHP / Laravel</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Node.js / Express</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">MySQL</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-600 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                <FiCode className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Développement Frontend</h3>
              <p className="text-gray-600 mb-6">
                Conception d&apos;interfaces utilisateur modernes, réactives et accessibles.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">HTML5 / CSS3</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">JavaScript</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">React</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-600 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Outils */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                <FiDatabase className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Outils & Méthodologies</h3>
              <p className="text-gray-600 mb-6">
                Gestion de version, déploiement et bonnes pratiques de développement.
              </p>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Git / GitHub</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Docker</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Méthodologies Agile</span>
                  <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-600 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets GitHub */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Mes Projets GitHub</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Une sélection de mes projets académiques disponibles sur GitHub
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Bibliothèque */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Système de Bibliothèque</h3>
              <p className="text-gray-600 mb-6">
                Application complète de gestion de bibliothèque développée avec Laravel et MySQL.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">PHP</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Laravel</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">MySQL</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Bootstrap</span>
              </div>
              <Link 
                href="/projects/bibliotheque-gestion" 
                className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700"
              >
                Voir le projet
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Todo App */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Application To-Do</h3>
              <p className="text-gray-600 mb-6">
                Application de gestion de tâches avec authentification, développée en PHP pour un examen.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">PHP</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">MySQL</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Bootstrap</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">JavaScript</span>
              </div>
              <Link 
                href="/projects/todo-app-exam" 
                className="inline-flex items-center text-green-600 font-semibold group-hover:text-green-700"
              >
                Voir le projet
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* E-commerce */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Solution E-commerce</h3>
              <p className="text-gray-600 mb-6">
                Plateforme e-commerce avec catalogue, panier et interface d&apos;administration.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">PHP</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">MySQL</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">jQuery</span>
              </div>
              <Link 
                href="/projects/solution-e-commerce" 
                className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700"
              >
                Voir le projet
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Serveur */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Initiation Serveur</h3>
              <p className="text-gray-600 mb-6">
                Serveur web avec Node.js et Express pour apprendre les bases du développement backend.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">JavaScript</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Express</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">PostgreSQL</span>
              </div>
              <Link 
                href="/projects/init-dev-serveur" 
                className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700"
              >
                Voir le projet
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://github.com/Balency" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              <FiDatabase className="mr-3" />
              Voir tous mes projets sur GitHub
            </a>
          </div>
        </div>
      </section>

      {/* CTA Stage */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">À la recherche d&apos;un stage</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Je suis actuellement à la recherche d&apos;un stage en développement web pour appliquer 
            mes connaissances et continuer à apprendre dans un environnement professionnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 shadow-lg text-lg"
            >
              <FiArrowRight className="mr-3" />
              Me contacter pour un stage
            </Link>
            <a 
              href="/cv-blondel-fred.pdf" 
              download="CV_Blondel_Fred.pdf"
              className="inline-flex items-center justify-center px-10 py-5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-lg"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}