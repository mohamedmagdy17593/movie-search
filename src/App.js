import React from 'react'

import Container from './ui/Container'
import {Route} from 'wouter'

import Home from './pages/home'
import Movie from './pages/movie'
import AddMovie from './pages/add-movie'
import AddMovieButton from './components/AddMovieButton'

function App() {
  return (
    <>
      <Container>
        <Route path="/" component={Home} />
        <Route path="/add" component={AddMovie} />
        <Route path="/movie/:id" component={Movie} />
      </Container>
      <AddMovieButton />
    </>
  )
}

export default App
