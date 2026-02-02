import { LucideIcon } from 'lucide-react'

export interface Lesson {
  id: string
  title: string
  description: string
  duration: string
  content: LessonContent[]
}

export interface Chapter {
  id: string
  title: string
  description: string
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
}

export interface ExampleContent {
  type: 'example'
  title: string
  content: string
  highlight?: string
}

export interface DiagramContent {
  type: 'diagram'
  title: string
  items: string[]
}

export interface QuizContent {
  type: 'quiz'
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface KeyPointsContent {
  type: 'keypoints'
  title: string
  points: string[]
}
