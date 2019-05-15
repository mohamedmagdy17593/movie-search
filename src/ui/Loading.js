/** @jsx jsx */
import {jsx} from '@emotion/core'

import './Loading.css'

function Loading({height = 300}) {
  return (
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height,
      }}
    >
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loading
