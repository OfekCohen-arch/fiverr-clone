import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from './pages/MainLayout.jsx'
import { HomePage } from './pages/HomePage.jsx'
import { SearchResultsPage } from './pages/SearchResultsPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
<<<<<<< HEAD
import { ExplorerPage } from './pages/ExplorerPage.jsx'
import { GigDetails } from './pages/GigDetails.jsx'
=======
import { GigIndex } from './pages/GigIndex.jsx'
>>>>>>> 36ef5935fe6693bb61929419cc4368905277b087

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/index" element={<GigIndex />} />
          <Route path="/search" element={<SearchResultsPage />} />
          <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD
          <Route path="/explorer" element={<ExplorerPage />} />
          <Route path='gig/:gigId' element={<GigDetails/>}/>
=======
>>>>>>> 36ef5935fe6693bb61929419cc4368905277b087
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
