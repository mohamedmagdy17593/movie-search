import React from 'react'
import {Global} from '@emotion/core'
import styles from './styles'

function GlobalStyles() {
  return (
    <Global
      styles={{
        hr: {
          border: `1px solid ${styles.color.lightGray}`,
        },
      }}
    />
  )
}

export default GlobalStyles
