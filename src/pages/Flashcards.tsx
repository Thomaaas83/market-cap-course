import { useState, useMemo } from 'react'
import { Layers, RotateCcw, CheckCircle2, XCircle, ArrowRight, ArrowLeft, Shuffle, Filter } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import { glossary } from '../data/glossary'

type CardStatus = 'learning' | 'known' | 'review'

interface FlashcardData {
  term: string
  termEn: string
  definition: string
  definitionEn: string
  category: string
  categoryEn: string
  status: CardStatus
}

export default function Flashcards() {
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [cards, setCards] = useState<FlashcardData[]>(
    glossary.map(term => ({ ...term, status: 'learning' as CardStatus }))
  )
  const [showStats, setShowStats] = useState(false)

  // Filtrer les cartes
  const filteredCards = useMemo(() => {
    if (selectedCategory === 'all') return cards
    return cards.filter(card => 
      (language === 'fr' ? card.category : card.categoryEn) === selectedCategory
    )
  }, [cards, selectedCategory, language])

  const currentCard = filteredCards[currentIndex]

  // Catégories uniques
  const categories = useMemo(() => {
    const cats = new Set(glossary.map(t => language === 'fr' ? t.category : t.categoryEn))
    return ['all', ...Array.from(cats)].sort()
  }, [language])

  // Statistiques
  const stats = useMemo(() => {
    const learning = filteredCards.filter(c => c.status === 'learning').length
    const known = filteredCards.filter(c => c.status === 'known').length
    const review = filteredCards.filter(c => c.status === 'review').length
    const progress = Math.round((known / filteredCards.length) * 100)

    return { learning, known, review, total: filteredCards.length, progress }
  }, [filteredCards])

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleKnown = () => {
    updateCardStatus('known')
    nextCard()
  }

  const handleReview = () => {
    updateCardStatus('review')
    nextCard()
  }

  const updateCardStatus = (status: CardStatus) => {
    setCards(prevCards => 
      prevCards.map(card => 
        card.term === currentCard.term ? { ...card, status } : card
      )
    )
  }

  const nextCard = () => {
    setIsFlipped(false)
    if (currentIndex < filteredCards.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      setCurrentIndex(0)
    }
  }

  const previousCard = () => {
    setIsFlipped(false)
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else {
      setCurrentIndex(filteredCards.length - 1)
    }
  }

  const shuffleCards = () => {
    const shuffled = [...filteredCards].sort(() => Math.random() - 0.5)
    setCards(prevCards => {
      const newCards = [...prevCards]
      shuffled.forEach((shuffledCard, index) => {
        const originalIndex = newCards.findIndex(c => c.term === shuffledCard.term)
        if (originalIndex !== -1) {
          const temp = newCards[index]
          newCards[index] = newCards[originalIndex]
          newCards[originalIndex] = temp
        }
      })
      return newCards
    })
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  const resetProgress = () => {
    setCards(prevCards => prevCards.map(card => ({ ...card, status: 'learning' as CardStatus })))
    setCurrentIndex(0)
    setIsFlipped(false)
  }

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600">
            {language === 'fr' ? 'Aucune carte disponible' : 'No cards available'}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-purple-400/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/15 to-pink-600/15 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Layers className="w-12 h-12 text-blue-600 animate-pulse" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'fr' ? 'Flashcards' : 'Flashcards'}
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            {language === 'fr' 
              ? 'Mémorise les concepts clés avec la répétition espacée' 
              : 'Memorize key concepts with spaced repetition'}
          </p>
        </div>

        {/* Contrôles et filtres - Optimisé : pas de backdrop-blur */}
        <div className="bg-white/95 rounded-[2rem] p-6 shadow-lg mb-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filtre catégorie */}
            <div className="flex items-center gap-3 flex-1">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setCurrentIndex(0)
                  setIsFlipped(false)
                }}
                className="flex-1 px-4 py-2 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
              >
                <option value="all">
                  {language === 'fr' ? 'Toutes les catégories' : 'All categories'}
                </option>
                {categories.filter(cat => cat !== 'all').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button
                onClick={shuffleCards}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-xl font-medium hover:bg-purple-200 transition-colors flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {language === 'fr' ? 'Mélanger' : 'Shuffle'}
                </span>
              </button>
              <button
                onClick={resetProgress}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {language === 'fr' ? 'Réinitialiser' : 'Reset'}
                </span>
              </button>
              <button
                onClick={() => setShowStats(!showStats)}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-xl font-medium hover:bg-blue-200 transition-colors"
              >
                {language === 'fr' ? 'Stats' : 'Stats'}
              </button>
            </div>
          </div>

          {/* Statistiques */}
          {showStats && (
            <div className="mt-6 pt-6 border-t-2 border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">{stats.total}</div>
                  <p className="text-sm text-gray-600">{language === 'fr' ? 'Total' : 'Total'}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{stats.learning}</div>
                  <p className="text-sm text-gray-600">{language === 'fr' ? 'En cours' : 'Learning'}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">{stats.known}</div>
                  <p className="text-sm text-gray-600">{language === 'fr' ? 'Maîtrisés' : 'Known'}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">{stats.progress}%</div>
                  <p className="text-sm text-gray-600">{language === 'fr' ? 'Progrès' : 'Progress'}</p>
                </div>
              </div>
              <div className="mt-4 h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                  style={{ width: `${stats.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Carte principale */}
        <div className="mb-8">
          <div className="text-center mb-4">
            <span className="text-lg font-semibold text-gray-700">
              {currentIndex + 1} / {filteredCards.length}
            </span>
          </div>

          {/* Carte 3D flippable */}
          <div 
            className="relative mx-auto max-w-2xl cursor-pointer perspective-1000"
            style={{ height: '400px' }}
            onClick={handleFlip}
          >
            <div 
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Face avant (terme) */}
              <div 
                className="absolute w-full h-full backface-hidden"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-[2rem] shadow-2xl p-12 flex flex-col items-center justify-center text-white">
                  <div className="text-sm font-medium mb-4 px-4 py-2 bg-white/20 rounded-full">
                    {language === 'fr' ? currentCard.category : currentCard.categoryEn}
                  </div>
                  <h2 className="text-4xl font-bold text-center mb-6">
                    {language === 'fr' ? currentCard.term : currentCard.termEn}
                  </h2>
                  {language === 'fr' && currentCard.termEn !== currentCard.term && (
                    <p className="text-xl text-blue-100 italic">
                      {currentCard.termEn}
                    </p>
                  )}
                  <p className="text-sm mt-8 text-blue-100">
                    {language === 'fr' ? 'Cliquer pour voir la définition' : 'Click to see definition'}
                  </p>
                </div>
              </div>

              {/* Face arrière (définition) */}
              <div 
                className="absolute w-full h-full backface-hidden rotate-y-180"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full bg-white/95 rounded-[2rem] shadow-2xl p-12 flex flex-col items-center justify-center border-2 border-gray-200">
                  <div className="text-sm font-medium mb-6 px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                    {language === 'fr' ? 'Définition' : 'Definition'}
                  </div>
                  <p className="text-2xl text-gray-900 text-center leading-relaxed">
                    {language === 'fr' ? currentCard.definition : currentCard.definitionEn}
                  </p>
                  <p className="text-sm mt-8 text-gray-500">
                    {language === 'fr' ? 'Cliquer pour retourner' : 'Click to flip back'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Indicateur de statut */}
          <div className="text-center mt-4">
            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-medium ${
              currentCard.status === 'known' ? 'bg-green-100 text-green-700' :
              currentCard.status === 'review' ? 'bg-orange-100 text-orange-700' :
              'bg-gray-100 text-gray-700'
            }`}>
              {currentCard.status === 'known' && (language === 'fr' ? 'Maîtrisé' : 'Known')}
              {currentCard.status === 'review' && (language === 'fr' ? 'À réviser' : 'Review')}
              {currentCard.status === 'learning' && (language === 'fr' ? 'En apprentissage' : 'Learning')}
            </span>
          </div>
        </div>

        {/* Contrôles de navigation et évaluation */}
        <div className="max-w-2xl mx-auto">
          {/* Navigation */}
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={previousCard}
              className="px-6 py-3 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              {language === 'fr' ? 'Précédent' : 'Previous'}
            </button>
            <button
              onClick={nextCard}
              className="px-6 py-3 bg-gray-600 text-white rounded-xl font-medium hover:bg-gray-700 transition-colors flex items-center gap-2"
            >
              {language === 'fr' ? 'Suivant' : 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Évaluation (visible seulement si carte retournée) */}
          {isFlipped && (
            <div className="grid grid-cols-2 gap-4 animate-fade-in">
              <button
                onClick={handleReview}
                className="py-4 bg-orange-100 text-orange-700 rounded-xl font-bold hover:bg-orange-200 transition-colors flex items-center justify-center gap-2 border-2 border-orange-300"
              >
                <XCircle className="w-5 h-5" />
                {language === 'fr' ? 'À réviser' : 'Need Review'}
              </button>
              <button
                onClick={handleKnown}
                className="py-4 bg-green-100 text-green-700 rounded-xl font-bold hover:bg-green-200 transition-colors flex items-center justify-center gap-2 border-2 border-green-300"
              >
                <CheckCircle2 className="w-5 h-5" />
                {language === 'fr' ? 'Je sais !' : 'I Know!'}
              </button>
            </div>
          )}
        </div>

        {/* Conseils pédagogiques - Optimisé : pas de backdrop-blur */}
        <div className="max-w-2xl mx-auto mt-12 bg-blue-50 rounded-[2rem] p-6 border border-blue-200 shadow-lg">
          <h3 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
            {language === 'fr' ? 'Conseil d\'apprentissage' : 'Learning Tip'}
          </h3>
          <p className="text-blue-800 text-sm leading-relaxed">
            {language === 'fr' 
              ? 'La répétition espacée est la méthode la plus efficace pour mémoriser. Marque "À réviser" si tu hésites, et "Je sais" seulement si tu es certain. Révise régulièrement les cartes marquées "À réviser" pour les ancrer dans ta mémoire long terme.'
              : 'Spaced repetition is the most effective method for memorization. Mark "Need Review" if you hesitate, and "I Know" only if you\'re certain. Regularly review cards marked "Need Review" to anchor them in your long-term memory.'}
          </p>
        </div>

        {/* Message de félicitations si tout est maîtrisé */}
        {stats.known === stats.total && stats.total > 0 && (
          <div className="max-w-2xl mx-auto mt-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-white text-center shadow-2xl animate-fade-in">
            <h3 className="text-3xl font-bold mb-2">
              {language === 'fr' ? 'Bravo !' : 'Congratulations!'}
            </h3>
            <p className="text-xl">
              {language === 'fr' 
                ? 'Tu as maîtrisé toutes les cartes de cette catégorie !' 
                : 'You\'ve mastered all cards in this category!'}
            </p>
          </div>
        )}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
