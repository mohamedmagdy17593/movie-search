/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'
import {useAsync} from 'react-async'
import {useDebounce} from 'use-debounce'
import {DialogOverlay, DialogContent} from '@reach/dialog'
import {MdClose} from 'react-icons/md'

import Input from '../../ui/Input'
import Container from '../../ui/Container'
import styles from '../../ui/styles'

import * as api from '../../api'

const SearchContainer = React.forwardRef((_props, ref) => {
  const [movieName, setMovieName] = React.useState('')
  const [movieNameDebounced] = useDebounce(movieName, 300)
  const searchResult = useAsync(api.search, {
    movieName: movieNameDebounced,
    watch: movieNameDebounced,
  })
  console.log({movieName, movieNameDebounced, searchResult})

  return (
    <Container>
      <Input
        ref={ref}
        css={{marginBottom: styles.spaces[4]}}
        oneLine
        placeholder="Search for a movie"
        value={movieName}
        onChange={e => setMovieName(e.target.value)}
      />
    </Container>
  )
})

const SearchModal = React.forwardRef(({showDialog, toggleShowDialog}, ref) => {
  return (
    <DialogOverlay
      initialFocusRef={ref}
      isOpen={showDialog}
      onDismiss={toggleShowDialog}
    >
      <DialogContent
        css={{
          width: '100%',
          height: '100%',
          margin: 0,
          boxSizing: 'border-box',
          background: styles.color.lighterGray,
          padding: 0,
        }}
      >
        <div
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            css={{
              cursor: 'pointer',
              border: 0,
              backgroundColor: 'transparent',
              lineHeight: 0,
              fontSize: 24,
              padding: styles.spaces[4],
            }}
            onClick={toggleShowDialog}
          >
            <MdClose />
          </button>
        </div>
        <SearchContainer ref={ref} />
      </DialogContent>
    </DialogOverlay>
  )
})

export default SearchModal
