import styled from '@emotion/styled'
import styles from './styles'

const Button = styled.button({
  border: `2px solid ${styles.color.blue}`,
  padding: styles.spaces[2],
  background: styles.color.blue,
  color: 'white',
  fontSize: 'inherit',
  borderRadius: styles.spaces[1],
  ':hover': {
    cursor: 'pointer',
    background: styles.color.lightBlue,
  },
})

export default Button
