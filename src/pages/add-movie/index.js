import React from 'react'
import Container from '../../ui/Container'
import AddForm from './AddForm'

function AddMovie() {
  return (
    <Container width={600}>
      <h1>Add Movie</h1>
      <hr />
      <div>
        <AddForm />
      </div>
    </Container>
  )
}

export default AddMovie
