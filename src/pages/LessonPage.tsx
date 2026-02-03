import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, AlertTriangle, BookmarkCheck, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { chapters } from '../data/chapters'
import { QuizContent } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslatedChapter, getTranslatedLesson } from '../utils/translation'
import { replaceEmojisWithIcons } from '../utils/emojiToIcon'

export default function LessonPage() {
  const { chapterId, lessonId } = useParams()
  const { language, t } = useLanguage()
  
  const chapter = chapters.find(c => c.id === chapterId)
  const lesson = chapter?.lessons.find(l => l.id === lessonId)

  if (!chapter || !lesson) {
    return <div className="max-w-7xl mx-auto px-4 py-12">{t('Leçon non trouvée', 'Lesson not found')}</div>
  }

  // Traduire le chapitre et la leçon
  const translatedChapter = getTranslatedChapter(chapter, language)
  const translatedLesson = getTranslatedLesson(lesson, language)

  // Navigation entre leçons
  const currentLessonIndex = chapter.lessons.findIndex(l => l.id === lessonId)
  const previousLesson = currentLessonIndex > 0 ? chapter.lessons[currentLessonIndex - 1] : null
  const nextLesson = currentLessonIndex < chapter.lessons.length - 1 ? chapter.lessons[currentLessonIndex + 1] : null
  
  // Traduire les leçons de navigation
  const translatedPreviousLesson = previousLesson ? getTranslatedLesson(previousLesson, language) : null
  const translatedNextLesson = nextLesson ? getTranslatedLesson(nextLesson, language) : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb amélioré */}
        <div className="flex items-center gap-3 mb-8">
          <Link
            to={`/chapitre/${chapterId}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            {translatedChapter.title}
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 text-sm">{t('Leçon', 'Lesson')} {currentLessonIndex + 1}</span>
        </div>

        {/* Header de la leçon */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`${chapter.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                {(() => {
                  const IconComponent = chapter.icon
                  return <IconComponent className="h-6 w-6 text-gray-700" />
                })()}
              </div>
              <div>
                <div className="text-sm font-medium text-blue-600 mb-1">
                  {t('Leçon', 'Lesson')} {currentLessonIndex + 1} {t('sur', 'of')} {chapter.lessons.length}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                  {translatedLesson.title}
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-2 rounded-lg">
              <Clock className="h-4 w-4" />
              <span>{lesson.duration}</span>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {translatedLesson.description}
          </p>
        </div>

        {/* Contenu de la leçon */}
        <div className="space-y-6">
          {translatedLesson.content.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))}
        </div>

        {/* Navigation entre leçons */}
        <div className="mt-12 pt-8 border-t-2 border-gray-200">
          <div className="flex items-center justify-between gap-4">
            {translatedPreviousLesson ? (
              <Link
                to={`/chapitre/${chapterId}/lecon/${previousLesson!.id}`}
                className="group flex items-center gap-3 bg-white hover:bg-blue-50 border-2 border-gray-200 hover:border-blue-300 rounded-xl p-4 transition-all flex-1"
              >
                <ChevronLeft className="h-5 w-5 text-blue-600 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-xs text-gray-500 mb-1">{t('Leçon précédente', 'Previous Lesson')}</div>
                  <div className="font-semibold text-gray-900 text-sm">{translatedPreviousLesson.title}</div>
                </div>
              </Link>
            ) : (
              <div className="flex-1" />
            )}

            {translatedNextLesson ? (
              <Link
                to={`/chapitre/${chapterId}/lecon/${nextLesson!.id}`}
                className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl p-4 transition-all flex-1 justify-end"
              >
                <div className="text-right">
                  <div className="text-xs text-blue-100 mb-1">{t('Leçon suivante', 'Next Lesson')}</div>
                  <div className="font-semibold text-sm">{translatedNextLesson.title}</div>
                </div>
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <Link
                to={`/chapitre/${chapterId}`}
                className="group flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white rounded-xl p-4 transition-all"
              >
                <BookmarkCheck className="h-5 w-5" />
                <span className="font-semibold">{t('Chapitre terminé !', 'Chapter completed!')}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ContentBlock({ block }: { block: any }) {
  switch (block.type) {
    case 'text':
      return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <p className="text-gray-700 leading-relaxed text-lg">{block.content}</p>
        </div>
      )

    case 'keypoints':
      return (
        <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 border-2 border-blue-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-5 flex items-center">
            <div className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center mr-3">
              <Lightbulb className="h-5 w-5" />
            </div>
            {block.title}
          </h3>
          <ul className="space-y-3">
            {block.points.map((point: string, i: number) => (
              <li key={i} className="flex items-start bg-white rounded-lg p-3 shadow-sm">
                {replaceEmojisWithIcons(point, 'h-5 w-5 text-blue-600 mr-3 mt-0.5')}
              </li>
            ))}
          </ul>
        </div>
      )

    case 'example':
      return (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-6 shadow-sm">
          <div className="flex items-start gap-3 mb-4">
            <div className="bg-green-600 text-white w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lightbulb className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold text-green-900 mt-1">
              {block.title}
            </h3>
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">{block.content}</p>
          {block.highlight && (
            <div className="bg-white border-l-4 border-green-600 p-4 rounded-lg shadow-sm">
              <p className="text-green-900 font-semibold">{block.highlight}</p>
            </div>
          )}
        </div>
      )

    case 'quiz':
      return <QuizBlock quiz={block} />

    case 'diagram':
      return (
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-6">{block.title}</h3>
          <div className="space-y-3">
            {block.items.map((item: string, i: number) => (
              <div key={i} className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold w-10 h-10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-sm">
                  {i + 1}
                </div>
                <div className="text-gray-700 leading-relaxed flex-1">
                  {replaceEmojisWithIcons(item, 'h-5 w-5 inline-block mr-2 text-purple-600')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )

    default:
      return null
  }
}

function QuizBlock({ quiz }: { quiz: QuizContent }) {
  const { t } = useLanguage()
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index)
    setShowExplanation(true)
  }

  const isCorrect = selectedAnswer === quiz.correctAnswer

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-10 h-10 rounded-xl flex items-center justify-center">
          <AlertTriangle className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">
          {t('Quiz de compréhension', 'Comprehension Quiz')}
        </h3>
      </div>
      
      <p className="text-lg text-gray-800 mb-6 font-medium leading-relaxed">{quiz.question}</p>
      
      <div className="space-y-3 mb-5">
        {quiz.options.map((option, index) => {
          const isSelected = index === selectedAnswer
          const isCorrectAnswer = index === quiz.correctAnswer
          
          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={showExplanation}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
                showExplanation
                  ? isCorrectAnswer
                    ? 'bg-green-100 border-green-500 shadow-sm'
                    : isSelected
                    ? 'bg-red-100 border-red-500 shadow-sm'
                    : 'bg-white border-gray-200 opacity-60'
                  : 'bg-white border-gray-300 hover:border-purple-400 hover:bg-purple-50 hover:shadow-md hover:-translate-y-0.5'
              }`}
            >
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 font-bold ${
                  showExplanation && isCorrectAnswer
                    ? 'bg-green-600 text-white'
                    : showExplanation && isSelected
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {String.fromCharCode(65 + index)}
                </div>
                {showExplanation && isCorrectAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                )}
                {showExplanation && isSelected && !isCorrectAnswer && (
                  <XCircle className="h-5 w-5 text-red-600 mr-2" />
                )}
                <span className="text-gray-800">{option}</span>
              </div>
            </button>
          )
        })}
      </div>

      {showExplanation && (
        <div className={`p-5 rounded-xl border-2 ${
          isCorrect 
            ? 'bg-green-50 border-green-300' 
            : 'bg-orange-50 border-orange-300'
        }`}>
          <p className="font-bold text-lg mb-2 flex items-center gap-2">
            {isCorrect ? (
              <>
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-900">{t('Excellent !', 'Excellent!')}</span>
              </>
            ) : (
              <>
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span className="text-orange-900">{t('Pas tout à fait...', 'Not quite...')}</span>
              </>
            )}
          </p>
          <p className="text-gray-700 leading-relaxed">{quiz.explanation}</p>
        </div>
      )}
    </div>
  )
}
