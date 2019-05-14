/** @jsx jsx */
import {jsx} from '@emotion/core'
import Input from '../../ui/Input'

function Home() {
  return (
    <div css={{paddingTop: 100}}>
      <h1 css={{textAlign: 'center', marginBottom: 18}}>MovieSearch {'🎬'}</h1>
      <Input oneLine css={{width: '100%'}} placeholder="Search for a movie" />
    </div>
  )
}

export default Home
