import styled from '@emotion/styled'
import styles from './styles'

const Input = styled.input(props => [
  {
    padding: 12,
    boxSizing: 'border-box',
    borderRadius: 5,
    border: `1px solid ${styles.color.lightGray}`,
  },
  props.oneLine && {
    border: 0,
    borderRadius: 0,
    borderBottom: `1px solid ${styles.color.lightGray}`,
  },
])

export default Input
