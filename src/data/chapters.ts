import { Chapter } from '../types'
import { introductionLessons } from './chapters/introduction'
import { obligationsLessons } from './chapters/obligations'
import { optionsLessons } from './chapters/options'
import { indicesEtfLessons } from './chapters/indices-etf'
import { economicAgentsLessons } from './chapters/economic-agents'
import { BookOpen, FileText, TrendingUp, Shield } from 'lucide-react'

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
  
  // Chapitre 3 : Les Agents Économiques (8 leçons)
  {
    id: 'agents',
    title: 'Les Agents Économiques du Marché des Capitaux',
    titleEn: 'Economic Agents of Capital Market',
    description: 'Comprendre les différents acteurs : investisseurs, émetteurs, intermédiaires',
    descriptionEn: 'Understanding the different actors: investors, issuers, intermediaries',
    icon: TrendingUp,
    color: 'bg-green-100',
    lessons: economicAgentsLessons
  },
  {
    id: 'environnement',
    title: 'Environnement et Enjeux : Empreinte Carbone',
    titleEn: 'Environment and Issues: Carbon Footprint',
    description: 'Finance durable, mesure de l\'empreinte carbone et enjeux environnementaux',
    descriptionEn: 'Sustainable finance, carbon footprint measurement and environmental issues',
    icon: Shield,
    color: 'bg-emerald-100',
    lessons: []
  }
]
