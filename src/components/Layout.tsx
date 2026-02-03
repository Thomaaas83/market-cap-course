import { ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, Home, Languages } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header moderne */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo et titre */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white w-10 h-10 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {t('Finance de Marché', 'Market Finance')}
                </h1>
                <p className="text-xs text-gray-500">{t('Cours interactif', 'Interactive Course')}</p>
              </div>
            </Link>

            {/* Navigation */}
            <nav className="flex items-center gap-2">
              <Link
                to="/"
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  isHome
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                <Home className="h-4 w-4" />
                <span className="hidden sm:inline">{t('Accueil', 'Home')}</span>
              </Link>
              
              {/* Sélecteur de langue */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setLanguage('fr')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
                    language === 'fr'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Languages className="h-3.5 w-3.5" />
                  FR
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
                    language === 'en'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Languages className="h-3.5 w-3.5" />
                  EN
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="min-h-[calc(100vh-4rem)]">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <GraduationCap className="h-5 w-5 text-blue-600" />
              <span className="text-sm">
                {t(
                  'Cours de Finance de Marché - Plateforme interactive de révision',
                  'Market Finance Course - Interactive Learning Platform'
                )}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {t(
                'Conçu pour comprendre, pas juste mémoriser',
                'Designed to understand, not just memorize'
              )}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
