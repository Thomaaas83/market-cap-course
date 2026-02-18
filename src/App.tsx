import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChapterPage from './pages/ChapterPage'
import LessonPage from './pages/LessonPage'
import Glossary from './pages/Glossary'
import Quiz from './pages/Quiz'
import Flashcards from './pages/Flashcards'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/flashcards" element={<Flashcards />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/chapitre/:chapterId" element={<ChapterPage />} />
          <Route path="/chapitre/:chapterId/lecon/:lessonId" element={<LessonPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
