/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'

import useToggle from '../../utils/useToggle'
import SearchModal from './SearchModal'
import styles from '../../ui/styles'
import {Button} from '../../ui/Button'

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
        Movie <Button onClick={toggleShowDialog}>Search</Button> {'🎬'}
      </h1>
      <SearchModal
        ref={focusRef}
        showDialog={showDialog}
        toggleShowDialog={toggleShowDialog}
      />
    </div>
  )
}

export default Home
