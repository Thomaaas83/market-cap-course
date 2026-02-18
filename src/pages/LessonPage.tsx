import { useMemo, lazy, Suspense, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowLeft, CheckCircle, Lightbulb, BookmarkCheck, Clock, ChevronLeft, ChevronRight } from 'lucide-react'
import { chapters } from '../data/chapters'
import { QuizContent } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { getTranslatedChapter, getTranslatedLesson } from '../utils/translation'
import { replaceEmojisWithIcons } from '../utils/emojiToIcon'
import QuizCarousel from '../components/QuizCarousel'

// Lazy loading des animations pour réduire le bundle initial
const EcosystemAnimation = lazy(() => import('../components/animations/EcosystemAnimation'))
const DecisionFlowAnimation = lazy(() => import('../components/animations/DecisionFlowAnimation'))
const ValueChainAnimation = lazy(() => import('../components/animations/ValueChainAnimation'))
const CapitalCycleAnimation = lazy(() => import('../components/animations/CapitalCycleAnimation'))
const OptionPayoffChart = lazy(() => import('../components/animations/OptionPayoffChart'))
const BondCashFlowAnimation = lazy(() => import('../components/animations/BondCashFlowAnimation'))
const BondPriceYieldAnimation = lazy(() => import('../components/animations/BondPriceYieldAnimation'))
const MarketFlowAnimation = lazy(() => import('../components/animations/MarketFlowAnimation'))
const InstrumentComparisonAnimation = lazy(() => import('../components/animations/InstrumentComparisonAnimation'))
const InterestRateImpactAnimation = lazy(() => import('../components/animations/InterestRateImpactAnimation'))
const IndexCompositionAnimation = lazy(() => import('../components/animations/IndexCompositionAnimation'))

// Composant de chargement pour les animations
function AnimationLoader() {
  return (
    <div className="flex items-center justify-center p-12">
      <div className="relative">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Lightbulb className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </div>
  )
}

export default function LessonPage() {
  const { chapterId, lessonId } = useParams()
  const { language, t } = useLanguage()
  
  // Mémoriser la recherche du chapitre et de la leçon
  const { chapter, lesson } = useMemo(() => {
    const ch = chapters.find(c => c.id === chapterId)
    const ls = ch?.lessons.find(l => l.id === lessonId)
    return { chapter: ch, lesson: ls }
  }, [chapterId, lessonId])

  // Mémoriser les traductions
  const translatedChapter = useMemo(() => 
    chapter ? getTranslatedChapter(chapter, language) : null,
    [chapter, language]
  )
  
  const translatedLesson = useMemo(() => 
    lesson ? getTranslatedLesson(lesson, language) : null,
    [lesson, language]
  )

  // Séparer les quiz du reste du contenu
  const { regularContent, quizzes } = useMemo(() => {
    if (!translatedLesson) return { regularContent: [], quizzes: [] }
    
    const regular: any[] = []
    const quizList: QuizContent[] = []
    
    translatedLesson.content.forEach(block => {
      if (block.type === 'quiz') {
        quizList.push(block as QuizContent)
      } else {
        regular.push(block)
      }
    })
    
    return { regularContent: regular, quizzes: quizList }
  }, [translatedLesson])

  // Navigation entre leçons - mémorisée
  const { currentLessonIndex, previousLesson, nextLesson, translatedPreviousLesson, translatedNextLesson } = useMemo(() => {
    if (!chapter || !lesson) {
      return {
        currentLessonIndex: -1,
        previousLesson: null,
        nextLesson: null,
        translatedPreviousLesson: null,
        translatedNextLesson: null
      }
    }

    const currentIndex = chapter.lessons.findIndex(l => l.id === lessonId)
    const prevLesson = currentIndex > 0 ? chapter.lessons[currentIndex - 1] : null
    const nxtLesson = currentIndex < chapter.lessons.length - 1 ? chapter.lessons[currentIndex + 1] : null
    
    return {
      currentLessonIndex: currentIndex,
      previousLesson: prevLesson,
      nextLesson: nxtLesson,
      translatedPreviousLesson: prevLesson ? getTranslatedLesson(prevLesson, language) : null,
      translatedNextLesson: nxtLesson ? getTranslatedLesson(nxtLesson, language) : null
    }
  }, [chapter, lesson, lessonId, language])

  if (!chapter || !lesson || !translatedChapter || !translatedLesson) {
    return <div className="max-w-7xl mx-auto px-4 py-12">{t('Leçon non trouvée', 'Lesson not found')}</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
      {/* Decorative background elements - Optimisé : désactivé sur mobile */}
      <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-purple-400/15 to-purple-600/15 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Header de la leçon - Style moderne - Optimisé : backdrop-blur uniquement ici */}
        <div className="relative bg-white/40 backdrop-blur-2xl rounded-[2rem] shadow-xl border border-white/60 p-10 mb-12 overflow-hidden glass-optimized">
          {/* Effet de brillance subtil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-4">
                <div className={`${chapter.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-md`}>
                  {(() => {
                    const IconComponent = chapter.icon
                    return <IconComponent className="h-8 w-8 text-gray-700" />
                  })()}
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-sm font-semibold mb-3">
                    {t('Leçon', 'Lesson')} {currentLessonIndex + 1} / {chapter.lessons.length}
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2 leading-tight">
                    {translatedLesson.title}
                  </h1>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/90 px-4 py-2 rounded-xl border border-gray-200 shadow-sm">
                <Clock className="h-4 w-4" />
                <span className="font-medium">{lesson.duration}</span>
              </div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              {translatedLesson.description}
            </p>
          </div>
        </div>

        {/* Contenu de la leçon */}
        <div className="space-y-8">
          {regularContent.map((block, index) => (
            <ContentBlock key={index} block={block} />
          ))}
        </div>

        {/* Quiz Section */}
        {quizzes.length > 0 && (
          <div className="mt-8">
            <QuizCarousel quizzes={quizzes} />
          </div>
        )}

        {/* Navigation entre leçons */}
        <div className="mt-16 pt-8">
          <div className="flex items-center justify-between gap-4">
            {translatedPreviousLesson ? (
              <Link
                to={`/chapitre/${chapterId}/lecon/${previousLesson!.id}`}
                className="group flex items-center gap-3 bg-white/95 hover:bg-white border border-gray-200 hover:border-blue-300 rounded-2xl p-5 transition-all flex-1 shadow-lg hover:shadow-xl hover:-translate-y-1"
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
                className="group flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-2xl p-5 transition-all flex-1 justify-end shadow-lg hover:shadow-xl hover:-translate-y-1"
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
                className="group flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-2xl p-5 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
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
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  switch (block.type) {
    case 'text':
      return (
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white/95 rounded-[2rem] shadow-lg border border-gray-200 p-8 overflow-hidden group"
        >
          {/* Effet de brillance au hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <p className="relative text-gray-800 leading-relaxed text-lg">
            {block.content}
          </p>
        </motion.div>
      )

    case 'keypoints':
      return (
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-[2rem] p-8 shadow-xl overflow-hidden"
        >
          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
                <Lightbulb className="h-6 w-6" />
              </div>
              {block.title}
            </motion.h3>
            <ul className="space-y-3">
              {block.points.map((point: string, i: number) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start bg-white/90 rounded-xl p-4 shadow-sm hover:shadow-md hover:bg-white transition-all cursor-default border border-blue-100"
                >
                  {replaceEmojisWithIcons(point, 'h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0')}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      )

    case 'example':
      return (
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-[2rem] p-8 shadow-xl overflow-hidden"
        >
          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative">
            <div className="flex items-start gap-4 mb-6">
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-green-600 to-green-700 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 cursor-pointer shadow-md"
              >
                <Lightbulb className="h-6 w-6" />
              </motion.div>
              <h3 className="text-2xl font-bold text-green-900 mt-1">
                {block.title}
              </h3>
            </div>
            <motion.p 
              className="text-gray-800 mb-6 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {block.content}
            </motion.p>
            {block.highlight && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white/90 border-l-4 border-green-600 p-5 rounded-xl shadow-md hover:shadow-lg transition-all cursor-default"
              >
                <p className="text-green-900 font-semibold text-lg">{block.highlight}</p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )

    case 'diagram':
      return (
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
          className="relative bg-white/95 border border-gray-200 rounded-[2rem] p-8 shadow-xl overflow-hidden"
        >
          {/* Effet de brillance */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50"></div>
          
          <div className="relative">
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-8"
              whileHover={{ x: 5 }}
            >
              {block.title}
            </motion.h3>
            <div className="space-y-4">
              {block.items.map((item: string, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex items-start bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5 border border-purple-200 hover:shadow-lg hover:border-purple-300 transition-all cursor-default"
                >
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-md"
                  >
                    {i + 1}
                  </motion.div>
                  <div className="text-gray-800 leading-relaxed flex-1 text-lg">
                    {replaceEmojisWithIcons(item, 'h-5 w-5 inline-block mr-2 text-purple-600')}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )

    case 'animation':
      return <AnimationBlock animation={block} />

    case 'comparison':
      return <ComparisonBlock comparison={block} />

    default:
      return null
  }
}



function AnimationBlock({ animation }: { animation: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const renderAnimation = () => {
    switch (animation.animationType) {
      case 'ecosystem':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <EcosystemAnimation config={animation.config} />
          </Suspense>
        )
      case 'decision-flow':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <DecisionFlowAnimation config={animation.config} />
          </Suspense>
        )
      case 'value-chain':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <ValueChainAnimation config={animation.config} />
          </Suspense>
        )
      case 'capital-cycle':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <CapitalCycleAnimation config={animation.config} />
          </Suspense>
        )
      case 'option-payoff':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <OptionPayoffChart {...animation.config} title={animation.title} titleEn={animation.titleEn} />
          </Suspense>
        )
      case 'bond-cashflow':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <BondCashFlowAnimation config={animation.config} />
          </Suspense>
        )
      case 'bond-price-yield':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <BondPriceYieldAnimation config={animation.config} />
          </Suspense>
        )
      case 'market-flow':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <MarketFlowAnimation />
          </Suspense>
        )
      case 'instrument-comparison':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <InstrumentComparisonAnimation />
          </Suspense>
        )
      case 'interest-rate-impact':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <InterestRateImpactAnimation />
          </Suspense>
        )
      case 'index-composition':
        return (
          <Suspense fallback={<AnimationLoader />}>
            <IndexCompositionAnimation />
          </Suspense>
        )
      default:
        return (
          <div className="bg-white rounded-xl p-8 border-2 border-dashed border-indigo-300">
            <div className="text-center text-gray-500">
              <div className="text-4xl mb-3">🎬</div>
              <p className="font-medium">Animation interactive : {animation.animationType}</p>
              <p className="text-sm mt-2">Type d'animation non reconnu</p>
            </div>
          </div>
        )
    }
  }

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="relative bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-200 rounded-[2rem] p-8 shadow-xl overflow-hidden"
    >
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50"></div>
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-600 text-white w-12 h-12 rounded-xl flex items-center justify-center shadow-md">
            <Lightbulb className="h-6 w-6" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900">{animation.title}</h3>
        </div>
        <p className="text-gray-700 mb-8 text-lg leading-relaxed">{animation.description}</p>
        
        {renderAnimation()}
      </div>
    </motion.div>
  )
}

function ComparisonBlock({ comparison }: { comparison: any }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.3 }}
      className="relative bg-white/95 border border-gray-200 rounded-[2rem] p-8 shadow-xl overflow-hidden"
    >
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-50"></div>
      
      <div className="relative">
        <h3 className="text-2xl font-bold text-gray-900 mb-8">{comparison.title}</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {comparison.items.map((item: any, index: number) => (
            <div key={index} className={`rounded-[1.5rem] p-6 border ${
              index === 0 
                ? 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300' 
                : 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300'
            }`}>
              <h4 className={`text-xl font-bold mb-5 ${
                index === 0 ? 'text-blue-900' : 'text-purple-900'
              }`}>
                {item.category}
              </h4>
              <ul className="space-y-3">
                {item.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start bg-white/90 rounded-xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-200">
                    <CheckCircle className={`h-5 w-5 mr-3 mt-0.5 flex-shrink-0 ${
                      index === 0 ? 'text-blue-600' : 'text-purple-600'
                    }`} />
                    <span className="text-gray-800 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
