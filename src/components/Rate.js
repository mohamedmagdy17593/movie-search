/** @jsx jsx */
import {jsx} from '@emotion/core'

function Rate({rate, count}) {
  return (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <span css={{fontSize: 24}}>{'⭐'}</span>
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <span css={{fontSize: 18, fontWeight: 'bold'}}>{rate}</span>
        <i>{count}</i>
      </div>
    </div>
  )
}

export default Rate
