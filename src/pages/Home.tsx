import { Link } from 'react-router-dom'
import { Clock, ArrowRight, BookOpen, Target, Zap, TrendingUp } from 'lucide-react'
import { chapters } from '../data/chapters'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslatedChapter } from '../utils/translation'

export default function Home() {
  const { language, t } = useLanguage()
  
  // Traduire les chapitres selon la langue
  const translatedChapters = chapters.map(ch => getTranslatedChapter(ch, language))
  // Calcul des statistiques
  const totalLessons = translatedChapters.reduce((acc, ch) => acc + ch.lessons.length, 0)
  const totalQuizzes = translatedChapters.reduce((acc, ch) => 
    acc + ch.lessons.reduce((sum, lesson) => 
      sum + lesson.content.filter(c => c.type === 'quiz').length, 0
    ), 0
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="h-4 w-4" />
            {t('Plateforme interactive de révision', 'Interactive Learning Platform')}
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t('Finance de Marché', 'Market Finance')}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {t('Maîtrisez les concepts clés', 'Master Key Concepts')}
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {t(
              `Un cours interactif conçu pour comprendre en profondeur, pas juste mémoriser. Explorez ${totalLessons} leçons structurées avec des exemples concrets et ${totalQuizzes} quiz.`,
              `An interactive course designed to understand deeply, not just memorize. Explore ${totalLessons} structured lessons with concrete examples and ${totalQuizzes} quizzes.`
            )}
          </p>

          {/* Stats rapides */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-lg shadow-sm">
              <BookOpen className="h-5 w-5 text-blue-600" />
              <span className="font-semibold text-gray-900">{translatedChapters.length}</span>
              <span className="text-gray-600">{t('chapitres', 'chapters')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-lg shadow-sm">
              <Target className="h-5 w-5 text-purple-600" />
              <span className="font-semibold text-gray-900">{totalLessons}</span>
              <span className="text-gray-600">{t('leçons', 'lessons')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-lg shadow-sm">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-gray-900">{totalQuizzes}</span>
              <span className="text-gray-600">{t('quiz interactifs', 'interactive quizzes')}</span>
            </div>
          </div>
        </div>

        {/* Chapitres Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t('Parcours de formation', 'Learning Path')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {translatedChapters.map((chapter, index) => {
              const IconComponent = chapter.icon
              return (
                <Link
                  key={chapter.id}
                  to={`/chapitre/${chapter.id}`}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
                >
                  {/* Badge numéro */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`${chapter.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}>
                      <IconComponent className="h-7 w-7 text-gray-700" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                      #{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {chapter.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {chapter.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1.5" />
                      <span className="font-medium">
                        {chapter.lessons.length} {t('leçon', 'lesson')}{chapter.lessons.length > 1 ? (language === 'fr' ? 's' : 's') : ''}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Méthode pédagogique */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('Une approche pédagogique efficace', 'An Effective Teaching Approach')}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('Contenu structuré', 'Structured Content')}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {t(
                  'Progression logique du simple au complexe, avec des concepts expliqués clairement',
                  'Logical progression from simple to complex, with clearly explained concepts'
                )}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('Exemples concrets', 'Concrete Examples')}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {t(
                  'Chaque notion illustrée par des cas pratiques et des situations réelles',
                  'Each concept illustrated with practical cases and real situations'
                )}
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg mb-2">{t('Quiz interactifs', 'Interactive Quizzes')}</h3>
              <p className="text-blue-100 text-sm leading-relaxed">
                {t(
                  'Validez votre compréhension immédiatement avec des explications détaillées',
                  'Validate your understanding immediately with detailed explanations'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
