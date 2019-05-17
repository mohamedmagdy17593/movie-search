import React from 'react'
import ReactDOM from 'react-dom'

// reset styles
import '@atlaskit/css-reset'

// @reach styles
import '@reach/dialog/styles.css'

import App from './App'
import GlobalStyles from './ui/GlobalStyles'

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
)
