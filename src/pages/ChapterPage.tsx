import { useParams, Link } from 'react-router-dom'
import { Clock, ArrowRight, BookOpen, Construction } from 'lucide-react'
import { chapters } from '../data/chapters'

export default function ChapterPage() {
  const { chapterId } = useParams()
  const chapter = chapters.find(c => c.id === chapterId)

  if (!chapter) {
    return <div className="max-w-7xl mx-auto px-4 py-12">Chapitre non trouvé</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header du chapitre */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-10">
          <div className="flex items-start gap-6">
            <div className={`${chapter.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm flex-shrink-0`}>
              {(() => {
                const IconComponent = chapter.icon
                return <IconComponent className="h-10 w-10 text-gray-700" />
              })()}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                  {chapter.lessons.length} leçon{chapter.lessons.length > 1 ? 's' : ''}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {chapter.title}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {chapter.description}
              </p>
            </div>
          </div>
        </div>

        {chapter.lessons.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-blue-600" />
                Parcours de leçons
              </h2>
              <span className="text-sm text-gray-500">
                Progression : 0/{chapter.lessons.length}
              </span>
            </div>

            <div className="space-y-4">
              {chapter.lessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  to={`/chapitre/${chapterId}/lecon/${lesson.id}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-0.5"
                >
                  <div className="flex items-start gap-4">
                    {/* Numéro de leçon */}
                    <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                          Leçon {index + 1}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1.5" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {lesson.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {lesson.description}
                      </p>
                    </div>

                    {/* Icône */}
                    <ArrowRight className="h-6 w-6 text-blue-600 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-2xl p-8 text-center">
            <div className="flex justify-center mb-4">
              <Construction className="h-16 w-16 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Chapitre en préparation
            </h3>
            <p className="text-gray-600">
              Les leçons de ce chapitre seront bientôt disponibles. Revenez plus tard !
            </p>
          </div>
        )}

        {/* Retour à l'accueil */}
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            <ArrowRight className="h-4 w-4 mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Retour aux chapitres
          </Link>
        </div>
      </div>
    </div>
  )
}
