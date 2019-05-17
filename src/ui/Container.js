import styled from '@emotion/styled'
import styles from './styles'

const Container = styled.div(({width = 900}) => ({
  margin: '0 auto',
  maxWidth: width,
  padding: `0 ${styles.spaces[2]}px`,
}))

export default Container
