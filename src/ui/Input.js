import {
  Input as unform_Input,
  Textarea as unform_Textarea,
} from '@rocketseat/unform'
import styled from '@emotion/styled'
import styles from './styles'

const Input = styled.input(props => [
  {
    padding: styles.spaces[1],
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: styles.spaces[0],
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

const UnFormInput = Input.withComponent(unform_Input)

const UnFormTextarea = Input.withComponent(unform_Textarea)

export {Input, UnFormInput, UnFormTextarea}
