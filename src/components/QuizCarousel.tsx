import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CheckCircle, XCircle, AlertTriangle, ChevronLeft, ChevronRight, Award } from 'lucide-react'
import { QuizContent } from '../types'
import { useLanguage } from '../contexts/LanguageContext'

interface QuizCarouselProps {
  quizzes: QuizContent[]
}

export default function QuizCarousel({ quizzes }: QuizCarouselProps) {
  const { t } = useLanguage()
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(quizzes.length).fill(null))
  const [showExplanations, setShowExplanations] = useState<boolean[]>(new Array(quizzes.length).fill(false))
  const [showConfetti, setShowConfetti] = useState(false)

  const currentQuiz = quizzes[currentQuizIndex]
  const selectedAnswer = answers[currentQuizIndex]
  const showExplanation = showExplanations[currentQuizIndex]
  const isCorrect = selectedAnswer === currentQuiz.correctAnswer

  const correctCount = answers.filter((answer, i) => answer === quizzes[i].correctAnswer).length
  const answeredCount = answers.filter(a => a !== null).length
  const allAnswered = answeredCount === quizzes.length
  const score = allAnswered ? Math.round((correctCount / quizzes.length) * 100) : 0

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers]
    newAnswers[currentQuizIndex] = answerIndex
    setAnswers(newAnswers)

    const newShowExplanations = [...showExplanations]
    newShowExplanations[currentQuizIndex] = true
    setShowExplanations(newShowExplanations)

    if (answerIndex === currentQuiz.correctAnswer) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 2000)
    }
  }

  const handleNext = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuizIndex > 0) {
      setCurrentQuizIndex(currentQuizIndex - 1)
    }
  }

  const handleReset = () => {
    setAnswers(new Array(quizzes.length).fill(null))
    setShowExplanations(new Array(quizzes.length).fill(false))
    setCurrentQuizIndex(0)
  }

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      {/* Confetti Effect - Optimisé : 10 confettis au lieu de 30 */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none z-50 flex items-center justify-center">
          {[...Array(10)].map((_, i) => {
            const angle = (i / 10) * Math.PI * 2
            const distance = 150 + Math.random() * 100
            const x = Math.cos(angle) * distance
            const y = Math.sin(angle) * distance
            
            return (
              <motion.div
                key={i}
                initial={{ 
                  x: 0,
                  y: 0,
                  scale: 0,
                  rotate: 0,
                  opacity: 1
                }}
                animate={{ 
                  x: x,
                  y: y,
                  scale: [0, 1.5, 1, 0],
                  rotate: Math.random() * 720,
                  opacity: [1, 1, 1, 0]
                }}
                transition={{ 
                  duration: 1.5,
                  delay: i * 0.05,
                  ease: "easeOut"
                }}
                className="absolute w-4 h-4 rounded-full"
                style={{ 
                  backgroundColor: ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899', '#f43f5e'][i % 6]
                }}
              />
            )
          })}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <motion.div 
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-600 to-pink-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
          >
            <AlertTriangle className="h-6 w-6" />
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('Quiz de compréhension', 'Comprehension Quiz')}
            </h3>
            <p className="text-sm text-gray-600">
              {t('Question', 'Question')} {currentQuizIndex + 1} {t('sur', 'of')} {quizzes.length}
            </p>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2">
          {quizzes.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setCurrentQuizIndex(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentQuizIndex
                  ? 'bg-purple-600 w-8'
                  : answers[i] !== null
                    ? answers[i] === quizzes[i].correctAnswer
                      ? 'bg-green-500'
                      : 'bg-red-500'
                    : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quiz Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuizIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl p-6 shadow-md mb-6"
        >
          {/* Question */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-900 mb-6 font-semibold leading-relaxed"
          >
            {currentQuiz.question}
          </motion.p>

          {/* Options */}
          <div className="space-y-3 mb-6">
            {currentQuiz.options.map((option, index) => {
              const isSelected = index === selectedAnswer
              const isCorrectAnswer = index === currentQuiz.correctAnswer
              
              return (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  onClick={() => !showExplanation && handleAnswer(index)}
                  disabled={showExplanation}
                  whileHover={!showExplanation ? { 
                    scale: 1.02,
                    x: 5
                  } : {}}
                  whileTap={!showExplanation ? { scale: 0.98 } : {}}
                  className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${
                    showExplanation
                      ? isCorrectAnswer
                        ? 'bg-green-100 border-green-500 shadow-md'
                        : isSelected
                        ? 'bg-red-100 border-red-500 shadow-md'
                        : 'bg-gray-50 border-gray-200 opacity-60'
                      : 'bg-white border-gray-300 hover:border-purple-400 hover:bg-purple-50 hover:shadow-md cursor-pointer'
                  }`}
                >
                  <div className="flex items-center">
                    <motion.div 
                      whileHover={!showExplanation ? { scale: 1.2 } : {}}
                      className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 font-bold text-lg ${
                        showExplanation && isCorrectAnswer
                          ? 'bg-green-600 text-white'
                          : showExplanation && isSelected
                          ? 'bg-red-600 text-white'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </motion.div>
                    {showExplanation && isCorrectAnswer && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                      >
                        <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                      </motion.div>
                    )}
                    {showExplanation && isSelected && !isCorrectAnswer && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: 3, duration: 0.3 }}
                      >
                        <XCircle className="h-6 w-6 text-red-600 mr-2" />
                      </motion.div>
                    )}
                    <span className="text-gray-800 text-base">{option}</span>
                  </div>
                </motion.button>
              )
            })}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: 'spring', stiffness: 200 }}
              className={`p-5 rounded-xl border-2 ${
                isCorrect 
                  ? 'bg-green-50 border-green-300' 
                  : 'bg-orange-50 border-orange-300'
              }`}
            >
              <p className="font-bold text-lg mb-2 flex items-center gap-2">
                {isCorrect ? (
                  <>
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ repeat: 2, duration: 0.5 }}
                    >
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </motion.div>
                    <span className="text-green-900">{t('Excellent !', 'Excellent!')}</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                    <span className="text-orange-900">{t('Pas tout à fait...', 'Not quite...')}</span>
                  </>
                )}
              </p>
              <p className="text-gray-700 leading-relaxed text-base">{currentQuiz.explanation}</p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handlePrevious}
          disabled={currentQuizIndex === 0}
          className="flex items-center gap-2 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="h-5 w-5" />
          {t('Précédent', 'Previous')}
        </motion.button>

        <div className="text-center">
          <div className="text-sm text-gray-600 mb-1">
            {t('Progression', 'Progress')}
          </div>
          <div className="font-bold text-lg text-purple-700">
            {answeredCount} / {quizzes.length}
          </div>
        </div>

        {currentQuizIndex < quizzes.length - 1 ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            disabled={!showExplanation}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {t('Suivant', 'Next')}
            <ChevronRight className="h-5 w-5" />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            disabled={!allAnswered}
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Award className="h-5 w-5" />
            {t('Recommencer', 'Restart')}
          </motion.button>
        )}
      </div>

      {/* Final Score - Enhanced */}
      {allAnswered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className={`mt-6 p-8 rounded-2xl border-4 text-center relative overflow-hidden ${
            score >= 80
              ? 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-400'
              : score >= 60
              ? 'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-400'
              : 'bg-gradient-to-br from-orange-50 to-yellow-100 border-orange-400'
          }`}
        >
          {/* Celebration Background Effect - Optimisé : animation non infinie */}
          {score >= 80 && (
            <div className="absolute inset-0 opacity-10">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 0],
                    scale: [0, 2, 0],
                    x: Math.random() * 400 - 200,
                    y: Math.random() * 300 - 150
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.1
                  }}
                  className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-green-500"
                />
              ))}
            </div>
          )}

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <Award className={`h-20 w-20 mx-auto mb-4 ${
              score >= 80 ? 'text-green-600' : score >= 60 ? 'text-blue-600' : 'text-orange-600'
            }`} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <div className="text-sm font-semibold text-gray-600 mb-2 uppercase tracking-wide">
              {t('Quiz terminé !', 'Quiz completed!')}
            </div>
            <div className={`text-7xl font-black mb-2 ${
              score >= 80 ? 'text-green-600' : score >= 60 ? 'text-blue-600' : 'text-orange-600'
            }`}>
              {score}%
            </div>
            <div className="text-2xl font-bold mb-4">
              {score >= 80 && (
                <span className="text-green-700">
                  {t('🎉 Excellent travail !', '🎉 Excellent work!')}
                </span>
              )}
              {score >= 60 && score < 80 && (
                <span className="text-blue-700">
                  {t('👍 Bon travail !', '👍 Good work!')}
                </span>
              )}
              {score < 60 && (
                <span className="text-orange-700">
                  {t('💪 Continue à apprendre !', '💪 Keep learning!')}
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="font-bold text-green-700">{correctCount}</span>
                <span className="text-gray-600">{t('correctes', 'correct')}</span>
              </div>
              <div className="flex items-center gap-2">
                <XCircle className="h-6 w-6 text-red-600" />
                <span className="font-bold text-red-700">{quizzes.length - correctCount}</span>
                <span className="text-gray-600">{t('incorrectes', 'incorrect')}</span>
              </div>
            </div>

            {score >= 80 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-gray-700 bg-white/50 rounded-lg p-3 max-w-md mx-auto"
              >
                {t(
                  'Félicitations ! Vous maîtrisez parfaitement cette leçon. Vous êtes prêt à passer à la suite !',
                  'Congratulations! You have mastered this lesson perfectly. You are ready to move on!'
                )}
              </motion.p>
            )}
            {score >= 60 && score < 80 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-gray-700 bg-white/50 rounded-lg p-3 max-w-md mx-auto"
              >
                {t(
                  'Bon travail ! Vous avez bien compris les concepts principaux. Relisez les points où vous avez hésité.',
                  'Good work! You understood the main concepts well. Review the points where you hesitated.'
                )}
              </motion.p>
            )}
            {score < 60 && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-sm text-gray-700 bg-white/50 rounded-lg p-3 max-w-md mx-auto"
              >
                {t(
                  'Pas de souci ! Relisez la leçon et refaites le quiz. L\'apprentissage prend du temps.',
                  'No worries! Reread the lesson and retake the quiz. Learning takes time.'
                )}
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
