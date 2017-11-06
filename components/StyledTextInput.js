import React from 'react'
import { TextInput } from 'react-native'

import styles from '../styles'

export default (props) => (
  <TextInput
    autoCorrect={false}
    {...props}
    style={styles.input}
  />
)
