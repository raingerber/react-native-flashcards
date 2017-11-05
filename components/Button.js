import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

function Button ({text, ...props}) {
  return (
    <TouchableOpacity {...props} style={styles.btn}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#E53224',
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  }
})

export default Button
