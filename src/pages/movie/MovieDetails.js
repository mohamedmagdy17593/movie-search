/** @jsx jsx */
import {jsx} from '@emotion/core'

import styles from '../../ui/styles'
import ImageFallback from '../../ui/ImageFallback'
import Rate from '../../components/Rate'
import Genres from '../../components/Genres'

import imdb from './imdb.png'

function MovieDetails({movie}) {
  console.log(movie)
  return (
    <div
      css={{
        display: 'grid',
        gridTemplateColumns: '300px auto',
        gridGap: styles.spaces[3],
      }}
    >
      <div>
        <ImageFallback
          css={{width: 300}}
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
            movie.poster_path
          }`}
          alt={movie.title}
        />
        <Genres genres={movie.genres} />
      </div>
      <div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>{movie.title}</h1>
          <Rate rate={movie.vote_average} count={movie.vote_count} />
        </div>
        <hr />
        <h4>
          {'📅'} {movie.release_date}
        </h4>
        <p>{movie.overview}</p>
        <br />
        <a
          href={`https://www.imdb.com/title/${movie.imdb_id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={imdb} alt="imdb" />
        </a>
      </div>
    </div>
  )
}

export default MovieDetails
