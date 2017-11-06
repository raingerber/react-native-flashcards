import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

import styles from '../styles'

function Button ({text, ...props}) {
  return (
    <TouchableOpacity {...props} style={[props.style, styles.btn]}>
      {text
        ? <Text style={styles.fontMedium}>{text}</Text>
        : props.children}
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  style: {}
}

export default Button
