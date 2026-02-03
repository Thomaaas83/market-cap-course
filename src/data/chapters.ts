import { Chapter } from '../types'
import { introductionLessons } from './chapters/introduction'
import { obligationsLessons } from './chapters/obligations'
import { optionsLessons } from './chapters/options'
import { indicesEtfLessons } from './chapters/indices-etf'
import { BookOpen, FileText, TrendingUp, Percent, Shield, Repeat } from 'lucide-react'

export const chapters: Chapter[] = [
  // Chapitre 1 : Organisation du Marché des Capitaux (6 leçons)
  {
    id: 'introduction',
    title: 'Organisation du Marché des Capitaux',
    titleEn: 'Capital Market Organization',
    description: 'Comprendre les bases : qu\'est-ce qu\'un marché financier, ses acteurs et son rôle dans l\'économie',
    descriptionEn: 'Understanding the basics: what is a financial market, its actors and its role in the economy',
    icon: BookOpen,
    color: 'bg-blue-100',
    lessons: introductionLessons
  },
  
  // Chapitre 2 : Obligations, Options et ETF (8 leçons)
  {
    id: 'obligations',
    title: 'Instruments Financiers : Obligations, Options et ETF',
    titleEn: 'Financial Instruments: Bonds, Options and ETFs',
    description: 'Comprendre les obligations, les options et les ETF',
    descriptionEn: 'Understanding bonds, options and ETFs',
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
    titleEn: 'Stocks',
    description: 'Titres de propriété, dividendes et valorisation',
    descriptionEn: 'Ownership securities, dividends and valuation',
    icon: TrendingUp,
    color: 'bg-red-100',
    lessons: []
  },
  {
    id: 'taux',
    title: 'Les Taux d\'Intérêt',
    titleEn: 'Interest Rates',
    description: 'Comprendre les taux, leur impact et leur évolution',
    descriptionEn: 'Understanding rates, their impact and evolution',
    icon: Percent,
    color: 'bg-yellow-100',
    lessons: []
  },
  {
    id: 'risques',
    title: 'Gestion des Risques',
    titleEn: 'Risk Management',
    description: 'Identifier, mesurer et gérer les différents types de risques',
    descriptionEn: 'Identifying, measuring and managing different types of risks',
    icon: Shield,
    color: 'bg-orange-100',
    lessons: []
  },
  {
    id: 'derives',
    title: 'Produits Dérivés Avancés',
    titleEn: 'Advanced Derivatives',
    description: 'Futures, swaps et autres instruments complexes',
    descriptionEn: 'Futures, swaps and other complex instruments',
    icon: Repeat,
    color: 'bg-indigo-100',
    lessons: []
  }
]
