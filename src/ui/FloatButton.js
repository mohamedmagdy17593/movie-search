import styled from '@emotion/styled'
import styles from './styles'
import {Button} from './Button'

const FloatButton = styled(Button)({
  padding: 0,
  width: styles.spaces[6],
  height: styles.spaces[6],
  borderRadius: '50%',
  boxShadow: '0 6px 20px rgba(0,0,0,0.6)',
  position: 'fixed',
  bottom: styles.spaces[6],
  right: styles.spaces[6],
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const FloatLink = FloatButton.withComponent('a')

export {FloatButton, FloatLink}
