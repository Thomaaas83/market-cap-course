import { useState, useMemo, useEffect } from 'react'
import { Brain, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy, Target, Clock, Zap } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { chapters } from '../data/chapters'

interface QuizQuestion {
  id: string
  question: string
  questionEn: string
  options: string[]
  optionsEn: string[]
  correctAnswer: number
  explanation: string
  explanationEn: string
  chapter: string
  difficulty: 'easy' | 'medium' | 'hard'
}

export default function Quiz() {
  const { language } = useLanguage()
  const [mode, setMode] = useState<'select' | 'quiz' | 'results'>('select')
  const [selectedChapter, setSelectedChapter] = useState<string>('all')
  const [difficulty, setDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all')
  const [questionCount, setQuestionCount] = useState(10)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [startTime, setStartTime] = useState<number>(0)
  const [timeElapsed, setTimeElapsed] = useState(0)

  // Extraire toutes les questions des chapitres
  const allQuestions = useMemo(() => {
    const questions: QuizQuestion[] = []
    
    chapters.forEach(chapter => {
      chapter.lessons.forEach(lesson => {
        lesson.content.forEach((content, index) => {
          if (content.type === 'quiz' && content.question && content.options) {
            questions.push({
              id: `${chapter.id}-${lesson.id}-${index}`,
              question: content.question,
              questionEn: content.questionEn || content.question,
              options: content.options,
              optionsEn: content.optionsEn || content.options,
              correctAnswer: content.correctAnswer,
              explanation: content.explanation || '',
              explanationEn: content.explanationEn || content.explanation || '',
              chapter: language === 'fr' ? chapter.title : (chapter.titleEn || chapter.title),
              difficulty: index % 3 === 0 ? 'easy' : index % 3 === 1 ? 'medium' : 'hard'
            })
          }
        })
      })
    })
    
    return questions
  }, [language])

  // Filtrer et mélanger les questions
  const quizQuestions = useMemo(() => {
    let filtered = allQuestions

    if (selectedChapter !== 'all') {
      filtered = filtered.filter(q => q.id.startsWith(selectedChapter))
    }

    if (difficulty !== 'all') {
      filtered = filtered.filter(q => q.difficulty === difficulty)
    }

    // Mélanger aléatoirement
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)
    
    return shuffled.slice(0, questionCount)
  }, [allQuestions, selectedChapter, difficulty, questionCount])

  const currentQuestion = quizQuestions[currentQuestionIndex]

  // Timer
  useEffect(() => {
    if (mode === 'quiz' && !showExplanation) {
      const interval = setInterval(() => {
        setTimeElapsed(Math.floor((Date.now() - startTime) / 1000))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [mode, showExplanation, startTime])

  const startQuiz = () => {
    if (quizQuestions.length === 0) return
    setMode('quiz')
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setAnswers([])
    setStartTime(Date.now())
    setTimeElapsed(0)
  }

  const handleAnswerSelect = (index: number) => {
    if (showExplanation) return
    setSelectedAnswer(index)
  }

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return
    
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer
    setAnswers([...answers, isCorrect])
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setMode('results')
    }
  }

  const resetQuiz = () => {
    setMode('select')
    setSelectedChapter('all')
    setDifficulty('all')
    setQuestionCount(10)
  }

  // Calcul des résultats
  const score = answers.filter(a => a).length
  const percentage = Math.round((score / answers.length) * 100)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  // Mode sélection
  if (mode === 'select') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Brain className="w-12 h-12 text-purple-600 animate-pulse" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                {language === 'fr' ? 'Mode Quiz' : 'Quiz Mode'}
              </h1>
            </div>
            <p className="text-xl text-gray-600">
              {language === 'fr' 
                ? 'Teste tes connaissances et identifie tes points à améliorer' 
                : 'Test your knowledge and identify areas for improvement'}
            </p>
          </div>

          <div className="bg-white/95 rounded-[2rem] p-8 shadow-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Configure ton quiz' : 'Configure Your Quiz'}
            </h2>

            {/* Sélection du chapitre */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {language === 'fr' ? 'Chapitre' : 'Chapter'}
              </label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none transition-colors"
              >
                <option value="all">
                  {language === 'fr' ? 'Tous les chapitres' : 'All chapters'}
                </option>
                {chapters.map(chapter => (
                  <option key={chapter.id} value={chapter.id}>
                    {language === 'fr' ? chapter.title : chapter.titleEn}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulté */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {language === 'fr' ? 'Difficulté' : 'Difficulty'}
              </label>
              <div className="grid grid-cols-4 gap-3">
                {['all', 'easy', 'medium', 'hard'].map(level => (
                  <button
                    key={level}
                    onClick={() => setDifficulty(level as any)}
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      difficulty === level
                        ? 'bg-purple-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level === 'all' && (language === 'fr' ? 'Toutes' : 'All')}
                    {level === 'easy' && (language === 'fr' ? 'Facile' : 'Easy')}
                    {level === 'medium' && (language === 'fr' ? 'Moyen' : 'Medium')}
                    {level === 'hard' && (language === 'fr' ? 'Difficile' : 'Hard')}
                  </button>
                ))}
              </div>
            </div>

            {/* Nombre de questions */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                {language === 'fr' ? 'Nombre de questions' : 'Number of questions'}
              </label>
              <div className="grid grid-cols-4 gap-3">
                {[5, 10, 20, 30].map(count => (
                  <button
                    key={count}
                    onClick={() => setQuestionCount(count)}
                    className={`py-3 px-4 rounded-xl font-medium transition-all ${
                      questionCount === count
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {count}
                  </button>
                ))}
              </div>
            </div>

            {/* Info et bouton */}
            <div className="bg-purple-50 rounded-xl p-4 mb-6">
              <p className="text-sm text-purple-900">
                <strong>{quizQuestions.length}</strong> {language === 'fr' ? 'questions disponibles avec ces critères' : 'questions available with these criteria'}
              </p>
            </div>

            <button
              onClick={startQuiz}
              disabled={quizQuestions.length === 0}
              className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <Zap className="w-5 h-5" />
              {language === 'fr' ? 'Commencer le quiz' : 'Start Quiz'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Mode quiz
  if (mode === 'quiz' && currentQuestion) {
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-purple-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-blue-400/15 to-blue-600/15 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 py-12">
          {/* Header avec progression */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-purple-600" />
                <span className="text-lg font-semibold text-gray-700">
                  {language === 'fr' ? 'Question' : 'Question'} {currentQuestionIndex + 1}/{quizQuestions.length}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5" />
                <span className="font-mono font-semibold">{formatTime(timeElapsed)}</span>
              </div>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-500"
                style={{ width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question */}
          <div className="bg-white/40 backdrop-blur-2xl rounded-[2rem] p-8 shadow-xl border border-white/60 mb-6">
            <div className="flex items-start gap-3 mb-6">
              <div className="bg-purple-100 rounded-xl p-3 flex-shrink-0">
                <Brain className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">{currentQuestion.chapter}</p>
                <h2 className="text-2xl font-bold text-gray-900">
                  {language === 'fr' ? currentQuestion.question : currentQuestion.questionEn}
                </h2>
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {(language === 'fr' ? currentQuestion.options : currentQuestion.optionsEn).map((option, index) => {
                const isSelected = selectedAnswer === index
                const isCorrectAnswer = index === currentQuestion.correctAnswer
                const showResult = showExplanation

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`w-full p-4 rounded-xl text-left font-medium transition-all border-2 ${
                      showResult
                        ? isCorrectAnswer
                          ? 'bg-green-50 border-green-500 text-green-900'
                          : isSelected
                          ? 'bg-red-50 border-red-500 text-red-900'
                          : 'bg-gray-50 border-gray-200 text-gray-500'
                        : isSelected
                        ? 'bg-purple-100 border-purple-500 text-purple-900'
                        : 'bg-white border-gray-200 text-gray-900 hover:border-purple-300 hover:bg-purple-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {showResult && isCorrectAnswer && (
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                      )}
                      {showResult && isSelected && !isCorrectAnswer && (
                        <XCircle className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Explication */}
            {showExplanation && (
              <div className={`mt-6 p-4 rounded-xl ${
                isCorrect ? 'bg-green-50 border-2 border-green-200' : 'bg-red-50 border-2 border-red-200'
              }`}>
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  )}
                  <div>
                    <h3 className={`font-bold mb-2 ${isCorrect ? 'text-green-900' : 'text-red-900'}`}>
                      {isCorrect 
                        ? (language === 'fr' ? 'Correct !' : 'Correct!')
                        : (language === 'fr' ? 'Incorrect' : 'Incorrect')}
                    </h3>
                    <p className={isCorrect ? 'text-green-800' : 'text-red-800'}>
                      {language === 'fr' ? currentQuestion.explanation : currentQuestion.explanationEn}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Boutons d'action */}
            <div className="mt-6 flex gap-3">
              {!showExplanation ? (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={selectedAnswer === null}
                  className="flex-1 py-3 bg-purple-600 text-white rounded-xl font-bold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {language === 'fr' ? 'Valider' : 'Submit'}
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  {currentQuestionIndex < quizQuestions.length - 1 
                    ? (language === 'fr' ? 'Question suivante' : 'Next Question')
                    : (language === 'fr' ? 'Voir les résultats' : 'View Results')}
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Mode résultats
  if (mode === 'results') {
    const performanceLevel = percentage >= 80 ? 'excellent' : percentage >= 60 ? 'good' : 'needsWork'

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <Trophy className={`w-20 h-20 mx-auto mb-4 ${
              performanceLevel === 'excellent' ? 'text-yellow-500' :
              performanceLevel === 'good' ? 'text-blue-500' : 'text-gray-400'
            }`} />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {language === 'fr' ? 'Quiz terminé !' : 'Quiz Complete!'}
            </h1>
            <p className="text-xl text-gray-600">
              {performanceLevel === 'excellent' && (language === 'fr' ? 'Excellent travail !' : 'Excellent work!')}
              {performanceLevel === 'good' && (language === 'fr' ? 'Bon travail !' : 'Good job!')}
              {performanceLevel === 'needsWork' && (language === 'fr' ? 'Continue à t\'entraîner !' : 'Keep practicing!')}
            </p>
          </div>

          {/* Statistiques - Optimisé : pas de backdrop-blur */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/95 rounded-[2rem] p-6 shadow-lg text-center border border-gray-200">
              <div className="text-5xl font-bold text-blue-600 mb-2">{percentage}%</div>
              <p className="text-gray-600">{language === 'fr' ? 'Score' : 'Score'}</p>
            </div>
            <div className="bg-white/95 rounded-[2rem] p-6 shadow-lg text-center border border-gray-200">
              <div className="text-5xl font-bold text-green-600 mb-2">{score}/{answers.length}</div>
              <p className="text-gray-600">{language === 'fr' ? 'Bonnes réponses' : 'Correct Answers'}</p>
            </div>
            <div className="bg-white/95 rounded-[2rem] p-6 shadow-lg text-center border border-gray-200">
              <div className="text-5xl font-bold text-purple-600 mb-2">{formatTime(timeElapsed)}</div>
              <p className="text-gray-600">{language === 'fr' ? 'Temps total' : 'Total Time'}</p>
            </div>
          </div>

          {/* Analyse de performance - Optimisé : pas de backdrop-blur */}
          <div className="bg-white/95 rounded-[2rem] p-8 shadow-xl border border-gray-200 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {language === 'fr' ? 'Analyse de performance' : 'Performance Analysis'}
            </h2>
            <div className="space-y-4">
              {performanceLevel === 'excellent' && (
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4">
                  <p className="text-green-900">
                    {language === 'fr' 
                      ? 'Tu maîtrises très bien ce sujet ! Continue comme ça et explore des concepts plus avancés.'
                      : 'You have excellent mastery of this topic! Keep it up and explore more advanced concepts.'}
                  </p>
                </div>
              )}
              {performanceLevel === 'good' && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4">
                  <p className="text-blue-900">
                    {language === 'fr' 
                      ? 'Bonne compréhension générale. Révise les points où tu as hésité pour consolider tes acquis.'
                      : 'Good general understanding. Review the points where you hesitated to consolidate your knowledge.'}
                  </p>
                </div>
              )}
              {performanceLevel === 'needsWork' && (
                <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                  <p className="text-orange-900">
                    {language === 'fr' 
                      ? 'Certains concepts nécessitent plus de révision. Reprends les leçons et utilise les flashcards pour renforcer ta mémoire.'
                      : 'Some concepts need more review. Go back to the lessons and use flashcards to strengthen your memory.'}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4">
            <button
              onClick={resetQuiz}
              className="flex-1 py-4 bg-gray-600 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              {language === 'fr' ? 'Nouveau quiz' : 'New Quiz'}
            </button>
            <button
              onClick={startQuiz}
              className="flex-1 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <RotateCcw className="w-5 h-5" />
              {language === 'fr' ? 'Recommencer' : 'Retry'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return null
}
