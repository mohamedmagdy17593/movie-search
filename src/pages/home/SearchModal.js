/** @jsx jsx */
import {jsx} from '@emotion/core'

import React from 'react'
import {DialogOverlay, DialogContent} from '@reach/dialog'
import {MdClose} from 'react-icons/md'

import SearchContainer from './SearchContainer'
import styles from '../../ui/styles'

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
          overflow: 'auto',
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
