import { Chapter } from '../types'
import { obligationsLessons } from './chapters/obligations'
import { optionsLessons } from './chapters/options'
import { indicesEtfLessons } from './chapters/indices-etf'
import { BookOpen, FileText, TrendingUp, Percent, Shield, Repeat } from 'lucide-react'

// Import temporaire : on garde les leçons du chapitre 1 de l'ancien fichier
import { chapters as oldChapters } from './chapters.old'

const introductionChapter = oldChapters[0] // Chapitre 1 de l'ancien fichier

export const chapters: Chapter[] = [
  // Chapitre 1 : Organisation du Marché des Capitaux (6 leçons)
  {
    ...introductionChapter,
    icon: BookOpen,
    color: 'bg-blue-100'
  },
  
  // Chapitre 2 : Obligations, Options et ETF (8 leçons)
  {
    id: 'obligations',
    title: 'Instruments Financiers : Obligations, Options et ETF',
    description: 'Comprendre les obligations, les options et les ETF',
    icon: FileText,
    color: 'bg-purple-100',
    lessons: [
      ...obligationsLessons,
      ...optionsLessons,
      ...indicesEtfLessons
    ]
  },
  
  // Chapitres suivants (vides pour l'instant)
  {
    id: 'actions',
    title: 'Les Actions',
    description: 'Titres de propriété, dividendes et valorisation',
    icon: TrendingUp,
    color: 'bg-red-100',
    lessons: []
  },
  {
    id: 'taux',
    title: 'Les Taux d\'Intérêt',
    description: 'Comprendre les taux, leur impact et leur évolution',
    icon: Percent,
    color: 'bg-yellow-100',
    lessons: []
  },
  {
    id: 'risques',
    title: 'Gestion des Risques',
    description: 'Identifier, mesurer et gérer les différents types de risques',
    icon: Shield,
    color: 'bg-orange-100',
    lessons: []
  },
  {
    id: 'derives',
    title: 'Produits Dérivés Avancés',
    description: 'Futures, swaps et autres instruments complexes',
    icon: Repeat,
    color: 'bg-indigo-100',
    lessons: []
  }
]
