
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Movie from './components/Movie'
import SearchList from './components/SearchList'
import HomePage from './pages/HomePage'

function App () {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/search/:movie' element={<SearchList />} />
      </Routes>
    </div>
  )
}

export default App
