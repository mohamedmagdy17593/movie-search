/** @jsx jsx */
import {jsx} from '@emotion/core'

import {useRoute} from 'wouter'
import {useAsync} from 'react-async'

import * as api from '../../api'
import MovieDetails from './MovieDetails'
import Loading from '../../ui/Loading'
import styles from '../../ui/styles'

function Movie() {
  const [, params] = useRoute('/movie/:id')
  const {id: movieId} = params
  const {isLoading, value: movie} = useAsync(api.find, {movieId})
  if (isLoading) {
    return <Loading />
  }
  return (
    <div css={{display: 'inline-block', margin: `${styles.spaces[4]}px 0`}}>
      <MovieDetails movie={movie} />
    </div>
  )
}

export default Movie
