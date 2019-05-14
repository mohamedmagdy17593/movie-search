/** @jsx jsx */
import {jsx} from '@emotion/core'

import Container from './ui/Container'
import {Route} from 'wouter'

import Home from './pages/home'

function App() {
  return (
    <Container>
      <Route path="/" component={Home} />
    </Container>
  )
}

export default App
