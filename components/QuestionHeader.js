import React from 'react'
import { Text, StyleSheet } from 'react-native'

function QuestionHeader ({num}) {
  return (
    <Text>
      {`${num} question` + (num === 1 ? '' : 's')}
    </Text>
  )
}

export default QuestionHeader
