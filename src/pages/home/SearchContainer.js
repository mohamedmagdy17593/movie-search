/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'
import {useAsync} from 'react-async'
import {useDebounce} from 'use-debounce'
import Downshift from 'downshift'

import Input from '../../ui/Input'
import Container from '../../ui/Container'
import ListContainer from '../../ui/ListContainer'
import styles from '../../ui/styles'
import * as api from '../../api'
import ImageFallback from '../../ui/ImageFallback'
import {scrollTo} from '../../utils/domHelpers'

const SearchContainer = React.forwardRef((_props, ref) => {
  const [inputValue, setInputValue] = React.useState('')
  return (
    <Downshift
      onChange={movie => console.log(movie)}
      itemToString={movie => (movie ? movie.title : '')}
      inputValue={inputValue}
      defaultIsOpen={true}
      scrollIntoView={node => {
        if (node) {
          scrollTo(node)
        }
      }}
    >
      {({
        getInputProps,
        getMenuProps,
        getItemProps,
        highlightedIndex,
        inputValue,
        isOpen,
      }) => (
        <div>
          <Container>
            <div>
              <Input
                ref={ref}
                css={{marginBottom: styles.spaces[3]}}
                oneLine
                {...getInputProps({
                  placeholder: 'Search for a movie',
                  value: inputValue,
                  onChange: e => setInputValue(e.target.value),
                })}
              />
              {isOpen && inputValue ? (
                <SearchList
                  movieName={inputValue}
                  getMenuProps={getMenuProps}
                  getItemProps={getItemProps}
                  highlightedIndex={highlightedIndex}
                />
              ) : null}
            </div>
          </Container>
        </div>
      )}
    </Downshift>
  )
})

function SearchList({movieName, getMenuProps, getItemProps, highlightedIndex}) {
  const [movieNameDebounced] = useDebounce(movieName, 300)
  const {value: movies} = useAsync(api.search, {
    movieName: movieNameDebounced,
    watch: movieNameDebounced,
  })

  return (
    <ListContainer {...getMenuProps()}>
      {movies &&
        movies.results.map((movie, index) => (
          <li
            {...getItemProps({
              key: movie.id,
              item: movie,
              index,
            })}
          >
            <MovieItem
              movie={movie}
              isHighlighted={highlightedIndex === index}
            />
          </li>
        ))}
    </ListContainer>
  )
}

function MovieItem({movie, isHighlighted = false}) {
  return (
    <div
      css={{
        background: 'white',
        padding: styles.spaces[3],
        boxSizing: 'border-box',
        border: isHighlighted
          ? `2px solid ${styles.color.blue}`
          : '2px solid white',
        borderRadius: styles.spaces[1],
        display: 'grid',
        gridTemplateColumns: '150px auto',
        gridGap: styles.spaces[2],
      }}
    >
      <div>
        <ImageFallback
          css={{width: 150}}
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${
            movie.poster_path
          }`}
          alt={movie.title}
        />
      </div>
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  )
}

export default SearchContainer
