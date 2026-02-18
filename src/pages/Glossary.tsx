import { useState, useMemo } from 'react'
import { Search, BookOpen, Sparkles, TrendingUp, Award, Zap } from 'lucide-react'
import { glossary } from '../data/glossary'
import { useLanguage } from '../contexts/LanguageContext'

export default function Glossary() {
  const { language } = useLanguage()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set())

  // Extraire les catégories uniques
  const categories = useMemo(() => {
    const cats = new Set(glossary.map(term => language === 'fr' ? term.category : term.categoryEn))
    return ['all', ...Array.from(cats)].sort()
  }, [language])

  // Filtrer les termes
  const filteredTerms = useMemo(() => {
    return glossary.filter(term => {
      const matchesSearch = searchTerm === '' || 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.termEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term.definitionEn.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = selectedCategory === 'all' || 
        (language === 'fr' ? term.category : term.categoryEn) === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory, language])

  // Grouper par catégorie
  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: typeof glossary } = {}
    filteredTerms.forEach(term => {
      const cat = language === 'fr' ? term.category : term.categoryEn
      if (!groups[cat]) groups[cat] = []
      groups[cat].push(term)
    })
    return groups
  }, [filteredTerms, language])

  // Fonction pour retourner une carte
  const toggleCard = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  // Statistiques ludiques
  const stats = useMemo(() => {
    return {
      total: glossary.length,
      categories: new Set(glossary.map(t => language === 'fr' ? t.category : t.categoryEn)).size,
      mastered: flippedCards.size,
      progress: Math.round((flippedCards.size / glossary.length) * 100)
    }
  }, [flippedCards, language])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-[700px] h-[700px] bg-gradient-to-br from-purple-400/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-pink-400/15 to-pink-600/15 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Header avec animations */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4 animate-fade-in">
            <BookOpen className="w-12 h-12 text-blue-600 animate-bounce" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {language === 'fr' ? 'Glossaire Interactif' : 'Interactive Glossary'}
            </h1>
            <Sparkles className="w-12 h-12 text-purple-600 animate-pulse" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
            {language === 'fr' 
              ? 'Maîtrise tous les termes clés de la finance de marché de manière ludique !'
              : 'Master all key market finance terms in a fun way!'}
          </p>
          
          {/* Statistiques ludiques - Optimisé : pas de backdrop-blur */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/95 rounded-2xl p-4 shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-2 mb-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <span className="text-2xl font-bold text-blue-600">{stats.total}</span>
              </div>
              <p className="text-sm text-gray-600">{language === 'fr' ? 'Termes' : 'Terms'}</p>
            </div>
            
            <div className="bg-white/95 rounded-2xl p-4 shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-600" />
                <span className="text-2xl font-bold text-purple-600">{stats.categories}</span>
              </div>
              <p className="text-sm text-gray-600">{language === 'fr' ? 'Catégories' : 'Categories'}</p>
            </div>
            
            <div className="bg-white/95 rounded-2xl p-4 shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Award className="w-5 h-5 text-green-600" />
                <span className="text-2xl font-bold text-green-600">{stats.mastered}</span>
              </div>
              <p className="text-sm text-gray-600">{language === 'fr' ? 'Consultés' : 'Viewed'}</p>
            </div>
            
            <div className="bg-white/95 rounded-2xl p-4 shadow-lg border border-gray-200 transform hover:scale-105 transition-transform">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-orange-600" />
                <span className="text-2xl font-bold text-orange-600">{stats.progress}%</span>
              </div>
              <p className="text-sm text-gray-600">{language === 'fr' ? 'Progrès' : 'Progress'}</p>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${stats.progress}%` }}
              />
            </div>
          </div>
        </div>

        {/* Barre de recherche et filtres - Optimisé : pas de backdrop-blur */}
        <div className="bg-white/95 rounded-[2rem] shadow-xl p-6 mb-8 border border-gray-200">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Recherche */}
              <div className="flex-1 relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 group-hover:text-blue-500 transition-colors" />
                <input
                  type="text"
                  placeholder={language === 'fr' ? 'Rechercher un terme...' : 'Search a term...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all focus:shadow-lg"
                />
              </div>

              {/* Filtre par catégorie */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all bg-white hover:border-purple-300 focus:shadow-lg"
              >
                <option value="all">
                  {language === 'fr' ? 'Toutes les catégories' : 'All categories'}
                </option>
                {categories.filter(cat => cat !== 'all').map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Info résultats */}
            <div className="flex items-center justify-between text-sm">
              <p className="text-gray-600">
                {filteredTerms.length} {language === 'fr' ? 'termes trouvés' : 'terms found'}
              </p>
              <button
                onClick={() => setFlippedCards(new Set())}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                {language === 'fr' ? 'Réinitialiser les cartes' : 'Reset cards'}
              </button>
            </div>
          </div>
        </div>

        {/* Liste des termes groupés par catégorie */}
        {Object.keys(groupedTerms).length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {language === 'fr' 
                ? 'Aucun terme trouvé. Essaie une autre recherche !' 
                : 'No terms found. Try another search!'}
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {Object.entries(groupedTerms).sort(([a], [b]) => a.localeCompare(b)).map(([category, terms]) => (
              <div key={category} className="animate-fade-in">
                {/* Titre de catégorie avec icône */}
                <div className="flex items-center gap-3 mb-6 group">
                  <span className="w-3 h-12 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full group-hover:scale-110 transition-transform"></span>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {category}
                  </h2>
                  <span className="text-sm px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full">
                    {terms.length} {language === 'fr' ? 'termes' : 'terms'}
                  </span>
                </div>

                {/* Grille de cartes interactives */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {terms.sort((a, b) => a.term.localeCompare(b.term)).map((term, index) => {
                    const globalIndex = glossary.findIndex(t => t.term === term.term)
                    const isFlipped = flippedCards.has(globalIndex)
                    
                    return (
                      <div
                        key={index}
                        onClick={() => toggleCard(globalIndex)}
                        className="group cursor-pointer perspective-1000"
                      >
                        <div className={`relative bg-white/95 rounded-[2rem] p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border transform hover:-translate-y-2 ${
                          isFlipped 
                            ? 'border-green-300/50 bg-green-50/60' 
                            : 'border-white/60 hover:border-purple-300/50'
                        }`}>
                          {/* Badge consulté */}
                          {isFlipped && (
                            <div className="absolute -top-3 -right-3 bg-green-500 text-white rounded-full p-2 shadow-lg animate-bounce">
                              <Award className="w-4 h-4" />
                            </div>
                          )}

                          {/* Terme principal */}
                          <div className="flex items-start justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {language === 'fr' ? term.term : term.termEn}
                            </h3>
                            <span className="text-xs px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full whitespace-nowrap ml-2 font-medium">
                              {language === 'fr' ? term.category : term.categoryEn}
                            </span>
                          </div>

                          {/* Terme anglais si différent */}
                          {language === 'fr' && term.termEn !== term.term && (
                            <p className="text-sm text-purple-600 italic mb-3 font-medium">
                              {term.termEn}
                            </p>
                          )}

                          {/* Définition */}
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {language === 'fr' ? term.definition : term.definitionEn}
                          </p>

                          {/* Indicateur interactif */}
                          <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                            <span className="text-xs text-gray-500">
                              {language === 'fr' ? 'Cliquer pour marquer' : 'Click to mark'}
                            </span>
                            {isFlipped && (
                              <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                                <Sparkles className="w-3 h-3" />
                                {language === 'fr' ? 'Consulté !' : 'Viewed!'}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Message de félicitations si tous consultés */}
        {stats.progress === 100 && filteredTerms.length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl p-8 text-white text-center shadow-2xl animate-fade-in">
            <h3 className="text-3xl font-bold mb-2">
              {language === 'fr' ? 'Félicitations !' : 'Congratulations!'}
            </h3>
            <p className="text-xl">
              {language === 'fr' 
                ? 'Tu as consulté tous les termes du glossaire ! Tu es un(e) champion(ne) !' 
                : 'You\'ve viewed all glossary terms! You\'re a champion!'}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
