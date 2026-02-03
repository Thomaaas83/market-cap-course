import { LucideIcon } from 'lucide-react'

export interface Lesson {
  id: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  duration: string
  content: LessonContent[]
}

export interface Chapter {
  id: string
  title: string
  titleEn?: string
  description: string
  descriptionEn?: string
  icon: LucideIcon
  lessons: Lesson[]
  color: string
}

export type LessonContent = 
  | TextContent
  | ExampleContent
  | DiagramContent
  | QuizContent
  | KeyPointsContent

export interface TextContent {
  type: 'text'
  content: string
  contentEn?: string
}

export interface ExampleContent {
  type: 'example'
  title: string
  titleEn?: string
  content: string
  contentEn?: string
  highlight?: string
  highlightEn?: string
}

export interface DiagramContent {
  type: 'diagram'
  title: string
  titleEn?: string
  items: string[]
  itemsEn?: string[]
}

export interface QuizContent {
  type: 'quiz'
  question: string
  questionEn?: string
  options: string[]
  optionsEn?: string[]
  correctAnswer: number
  explanation: string
  explanationEn?: string
}

export interface KeyPointsContent {
  type: 'keypoints'
  title: string
  titleEn?: string
  points: string[]
  pointsEn?: string[]
}
