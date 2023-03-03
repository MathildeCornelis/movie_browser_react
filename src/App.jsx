import React from 'react'
import Home from './pages/Home'
import Search from './pages/Search'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Movie_spotlight from './pages/Movie_spotlight'


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/search' element={<Search />}/>
        <Route path='/movie_spotlight' element={<Movie_spotlight />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
