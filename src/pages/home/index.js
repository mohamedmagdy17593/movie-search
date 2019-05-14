/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'

import Input from '../../ui/Input'
import useToggle from '../../utils/useToggle'
import SearchModal from './SearchContainer'
import styles from '../../ui/styles'

function Home() {
  const [showDialog, toggleShowDialog] = useToggle(false)
  const focusRef = React.useRef()
  return (
    <div css={{paddingTop: styles.spaces[9]}}>
      <h1
        css={{
          textAlign: 'center',
          marginBottom: styles.spaces[4],
          fontSize: 48,
        }}
      >
        MovieSearch {'🎬'}
      </h1>
      <Input
        css={{width: '100%'}}
        placeholder="Search for a movie"
        onClick={toggleShowDialog}
      />
      <SearchModal
        ref={focusRef}
        showDialog={showDialog}
        toggleShowDialog={toggleShowDialog}
      />
    </div>
  )
}

export default Home
