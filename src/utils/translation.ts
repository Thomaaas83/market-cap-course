import { Chapter, Lesson, LessonContent } from '../types'

export function getTranslatedChapter(chapter: Chapter, language: 'fr' | 'en'): Chapter {
  if (language === 'fr') return chapter
  
  return {
    ...chapter,
    title: chapter.titleEn || chapter.title,
    description: chapter.descriptionEn || chapter.description,
    lessons: chapter.lessons.map(lesson => getTranslatedLesson(lesson, language))
  }
}

export function getTranslatedLesson(lesson: Lesson, language: 'fr' | 'en'): Lesson {
  if (language === 'fr') return lesson
  
  return {
    ...lesson,
    title: lesson.titleEn || lesson.title,
    description: lesson.descriptionEn || lesson.description,
    content: lesson.content.map(content => getTranslatedContent(content, language))
  }
}

export function getTranslatedContent(content: LessonContent, language: 'fr' | 'en'): LessonContent {
  if (language === 'fr') return content
  
  switch (content.type) {
    case 'text':
      return {
        ...content,
        content: content.contentEn || content.content
      }
    
    case 'example':
      return {
        ...content,
        title: content.titleEn || content.title,
        content: content.contentEn || content.content,
        highlight: content.highlightEn || content.highlight
      }
    
    case 'diagram':
      return {
        ...content,
        title: content.titleEn || content.title,
        items: content.itemsEn || content.items
      }
    
    case 'quiz':
      return {
        ...content,
        question: content.questionEn || content.question,
        options: content.optionsEn || content.options,
        explanation: content.explanationEn || content.explanation
      }
    
    case 'keypoints':
      return {
        ...content,
        title: content.titleEn || content.title,
        points: content.pointsEn || content.points
      }
    
    default:
      return content
  }
}
