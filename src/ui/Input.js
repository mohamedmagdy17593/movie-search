import styled from '@emotion/styled'
import styles from './styles'

const Input = styled.input(props => [
  {
    padding: 12,
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 5,
    border: `2px solid ${styles.color.lightGray}`,
    ':focus': {
      outline: 'none',
      borderColor: styles.color.blue,
    },
  },
  props.oneLine && {
    border: 0,
    borderRadius: 0,
    borderBottom: `2px solid ${styles.color.lightGray}`,
  },
])

export default Input
