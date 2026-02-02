import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import ChapterPage from './pages/ChapterPage'
import LessonPage from './pages/LessonPage'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chapitre/:chapterId" element={<ChapterPage />} />
          <Route path="/chapitre/:chapterId/lecon/:lessonId" element={<LessonPage />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
