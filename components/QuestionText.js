import React from 'react'
import {View, Text} from 'react-native'

import styles from '../styles'

const word = (num) => 'question' + (num === 1 ? '' : 's')

function QuestionText ({num}) {
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.fontLarge}>{num}</Text>
      <Text style={styles.fontMedium}>{word(num)}</Text>
    </View>
  )
}

export default QuestionText
