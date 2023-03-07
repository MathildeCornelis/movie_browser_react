import React from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movie_spotlight from './pages/Movie_spotlight'
import Movie_trending from './pages/Movie_trending'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/movie_trending/:id' element={<Movie_trending />} />
        <Route path='/movie_spotlight/:id' element={<Movie_spotlight />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
