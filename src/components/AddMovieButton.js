import React from 'react'
import {Link, useRoute} from 'wouter'
import {FaPlus} from 'react-icons/fa'

import {FloatLink} from '../ui/FloatButton'

function AddMovieButton() {
  const [match] = useRoute('/add')
  if (match) {
    return null
  }
  return (
    <Link href="/add">
      <FloatLink>
        <FaPlus />
      </FloatLink>
    </Link>
  )
}

export default AddMovieButton
