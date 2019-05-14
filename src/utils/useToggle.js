import React from 'react'

function useToggle(initialValue) {
  const [state, setState] = React.useState(initialValue)
  const toggle = () => setState(s => !s)
  return [state, toggle]
}

export default useToggle
