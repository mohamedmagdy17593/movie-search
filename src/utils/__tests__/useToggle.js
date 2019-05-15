import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import useToggle from '../useToggle'

// unit testing normally i will not test this component
// but for learning i will do

function Toggle({initialState}) {
  const [state, toggle] = useToggle(initialState)
  return <button onClick={toggle}>{state ? 'on' : 'off'}</button>
}

test('useToggle works properly', () => {
  const {getByText} = render(<Toggle initialState={false} />)
  const button = getByText(/off/i)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/on/i)
  fireEvent.click(button)
  expect(button).toHaveTextContent(/off/i)
})
