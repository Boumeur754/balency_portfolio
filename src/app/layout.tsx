import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Layout/Header'
import Footer from '@/components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blondel Fred - Portfolio | AEC Développement Web',
  description: 'Portfolio étudiant de Blondel Fred, étudiant en AEC Développement d\'Applications Web au Collège Ahuntsic',
  keywords: ['portfolio étudiant', 'développement web', 'AEC', 'Collège Ahuntsic', 'React', 'Next.js'],
  authors: [{ name: 'Blondel Fred' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-gray-50`}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}