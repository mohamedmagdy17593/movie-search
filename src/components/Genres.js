/** @jsx jsx */
import {jsx} from '@emotion/core'

import styles from '../ui/styles'

function Genres({genres}) {
  return (
    <div css={{textAlign: 'center'}}>
      {genres.map(genre => (
        <span
          css={{
            fontSize: 12,
            display: 'inline-block',
            padding: styles.spaces[0],
            margin: styles.spaces[0],
            borderRadius: styles.spaces[0],
            border: `1px solid ${styles.color.darkGray}`,
          }}
          key={genre.id}
        >
          {genre.name}
        </span>
      ))}
    </div>
  )
}

export default Genres
