import { FiGithub, FiLinkedin, FiMail, FiHeart, FiCode, FiBook } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="container mx-auto px-4">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Présentation */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                  <FiCode className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Blondel Fred</h3>
                  <p className="text-gray-400 text-sm">Étudiant AEC - Collège Ahuntsic</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Portfolio présentant mes projets académiques et mes compétences 
                en développement d&apos;applications web.
              </p>
            </div>

            {/* Liens rapides */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Navigation</h4>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Accueil</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white transition-colors">À propos</a></li>
                <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors">Projets GitHub</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Stage</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Liens</h4>
              <div className="space-y-3">
                <a 
                  href="https://github.com/Balency" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FiGithub className="mr-3 w-5 h-5" />
                  GitHub - Balency
                </a>
                <a 
                  href="mailto:blondel.fred@college-ahuntsic.ca" 
                  className="flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <FiMail className="mr-3 w-5 h-5" />
                  Email académique
                </a>
                <div className="flex items-center text-gray-400">
                  <FiBook className="mr-3 w-5 h-5" />
                  <span>Collège Ahuntsic</span>
                </div>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-gray-800 my-8"></div>

          {/* Bas de footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} Blondel Fred - Portfolio AEC
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2">Projet Next.js pour</span>
              <FiHeart className="text-red-400 mx-1" />
              <span className="ml-2">AEC Développement Web</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}