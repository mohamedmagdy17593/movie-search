/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'
import {useAsync} from 'react-async'
import {useDebounce} from 'use-debounce'
import Downshift from 'downshift'

import Input from '../../ui/Input'
import Container from '../../ui/Container'
import styles from '../../ui/styles'
import * as api from '../../api'

const SearchContainer = React.forwardRef((_props, ref) => {
  // const [movieName, setMovieName] = React.useState('')
  // const [movieNameDebounced] = useDebounce(movieName, 300)
  // const searchResult = useAsync(api.search, {
  //   movieName: movieNameDebounced,
  //   watch: movieNameDebounced,
  // })
  // console.log({movieName, movieNameDebounced, searchResult})

  return (
    <Container>
      <Downshift
        onChange={movie => console.log(movie)}
        itemToString={movie => (movie ? movie.title : '')}
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
            <Input
              ref={ref}
              css={{marginBottom: styles.spaces[4]}}
              oneLine
              {...getInputProps({
                placeholder: 'Search for a movie',
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
        )}
      </Downshift>
    </Container>
  )
})

function SearchList({movieName, getMenuProps, getItemProps, highlightedIndex}) {
  const [movieNameDebounced] = useDebounce(movieName, 300)
  const searchResult = useAsync(api.search, {
    movieName: movieNameDebounced,
    watch: movieNameDebounced,
  })
  console.log({movieName, movieNameDebounced, searchResult})

  return (
    <ul {...getMenuProps()}>
      {searchResult.value &&
        searchResult.value.results.map((movie, index) => (
          <li
            {...getItemProps({
              key: movie.id,
              item: movie,
              index,
              style: {
                backgroundColor:
                  highlightedIndex === index ? 'lightgray' : 'white',
              },
            })}
          >
            {movie.title}
          </li>
        ))}
    </ul>
  )
}

export default SearchContainer