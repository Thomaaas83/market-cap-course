import { Link } from 'react-router-dom'
import { useMemo } from 'react'
import { Clock, ArrowRight, BookOpen, Target, TrendingUp } from 'lucide-react'
import { chapters } from '../data/chapters'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslatedChapter } from '../utils/translation'

export default function Home() {
  const { language, t } = useLanguage()
  
  // Traduire les chapitres selon la langue - mémorisé
  const translatedChapters = useMemo(() => 
    chapters.map(ch => getTranslatedChapter(ch, language)),
    [language]
  )
  
  // Calcul des statistiques - mémorisé
  const { totalLessons, totalQuizzes } = useMemo(() => {
    const lessons = translatedChapters.reduce((acc, ch) => acc + ch.lessons.length, 0)
    const quizzes = translatedChapters.reduce((acc, ch) => 
      acc + ch.lessons.reduce((sum, lesson) => 
        sum + lesson.content.filter(c => c.type === 'quiz').length, 0
      ), 0
    )
    return { totalLessons: lessons, totalQuizzes: quizzes }
  }, [translatedChapters])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
      {/* Decorative background elements - style Apple - Optimisé : désactivé sur mobile */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-purple-400/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/15 to-pink-600/15 rounded-full blur-3xl"></div>
      </div>
      {/* Hero Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-20">

          
          {/* Titre principal avec effet gradient */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight">
            {t('Finance de Marché', 'Market Finance')}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-[length:200%_auto] animate-gradient">
              {t('Maîtrisez les concepts clés', 'Master Key Concepts')}
            </span>
          </h2>
          
          {/* Description avec meilleur contraste */}
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            {t(
              `Un cours interactif conçu pour comprendre en profondeur, pas juste mémoriser. Explorez ${totalLessons} leçons structurées avec des exemples concrets et ${totalQuizzes} quiz.`,
              `An interactive course designed to understand deeply, not just memorize. Explore ${totalLessons} structured lessons with concrete examples and ${totalQuizzes} quizzes.`
            )}
          </p>

          {/* Stats avec glassmorphism */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="group flex items-center gap-3 bg-white/40 backdrop-blur-2xl px-6 py-4 rounded-2xl shadow-lg border border-white/60 hover:bg-white/50 hover:scale-105 hover:shadow-xl transition-all duration-300 glass-optimized">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-2xl text-gray-900">{translatedChapters.length}</div>
                <div className="text-sm text-gray-600 font-medium">{t('chapitres', 'chapters')}</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-3 bg-white/40 backdrop-blur-2xl px-6 py-4 rounded-2xl shadow-lg border border-white/60 hover:bg-white/50 hover:scale-105 hover:shadow-xl transition-all duration-300 glass-optimized">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-2xl text-gray-900">{totalLessons}</div>
                <div className="text-sm text-gray-600 font-medium">{t('leçons', 'lessons')}</div>
              </div>
            </div>
            
            <div className="group flex items-center gap-3 bg-white/40 backdrop-blur-2xl px-6 py-4 rounded-2xl shadow-lg border border-white/60 hover:bg-white/50 hover:scale-105 hover:shadow-xl transition-all duration-300 glass-optimized">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2.5 rounded-xl shadow-md group-hover:scale-110 transition-transform">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="font-bold text-2xl text-gray-900">{totalQuizzes}</div>
                <div className="text-sm text-gray-600 font-medium">{t('quiz', 'quizzes')}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Chapitres Grid avec effet 3D */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('Parcours de formation', 'Learning Path')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t(
                'Progressez à votre rythme à travers un parcours structuré et interactif',
                'Progress at your own pace through a structured and interactive path'
              )}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {translatedChapters.map((chapter, index) => {
              const IconComponent = chapter.icon
              return (
                <Link
                  key={chapter.id}
                  to={`/chapitre/${chapter.id}`}
                  className="group relative bg-white/40 backdrop-blur-2xl rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-white/60 hover:border-white/80 hover:-translate-y-3 hover:bg-white/50 glass-optimized"
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Reflet subtil à la Apple */}
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Badge numéro minimaliste */}
                  <div className="relative flex items-start justify-between mb-6">
                    <div className={`${chapter.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md backdrop-blur-sm group-hover:scale-110 transition-all duration-300`}>
                      <IconComponent className="h-8 w-8 text-gray-700" />
                    </div>
                    <span className="text-xs font-semibold text-gray-400 bg-gray-100/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {index + 1}
                    </span>
                  </div>

                  <h3 className="relative text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {chapter.title}
                  </h3>
                  
                  <p className="relative text-gray-600 mb-6 text-base leading-relaxed line-clamp-3">
                    {chapter.description}
                  </p>

                  {/* Footer minimaliste */}
                  <div className="relative flex items-center justify-between pt-5 border-t border-gray-200/50">
                    <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                      <div className="bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-lg">
                        <Clock className="h-4 w-4 text-gray-600" />
                      </div>
                      <span>
                        {chapter.lessons.length} {t('leçon', 'lesson')}{chapter.lessons.length > 1 ? (language === 'fr' ? 's' : 's') : ''}
                      </span>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>


      </div>
    </div>
  )
}
