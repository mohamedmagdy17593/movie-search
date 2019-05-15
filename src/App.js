import React from 'react'

import Container from './ui/Container'
import {Route} from 'wouter'

import Home from './pages/home'
import Movie from './pages/movie'

function App() {
  return (
    <Container>
      <Route path="/" component={Home} />
      <Route path="/movie/:id" component={Movie} />
    </Container>
  )
}

export default App
