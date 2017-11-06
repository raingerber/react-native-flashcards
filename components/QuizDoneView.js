import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

import styles from '../styles'
import Button from './Button'

function QuizDoneView ({total, totalPossible, navigation}) {
  return (
    <View style={styles.center}>
      <View style={styles.center}>
        <Text style={styles.fontLarge}>Quiz Results:</Text>
        <Text style={[styles.fontMedium, {marginTop: 10}]}>{`${total} of ${totalPossible} correct`}</Text>
      </View>
      <View style={[styles.center, styles.bottom]}>
        <Button
          text='Restart Quiz'
          onPress={() => navigation.goBack(null)} />
        <Button
          text='Back to Deck'
          onPress={() => false} />
      </View>
    </View>
  )
}

export default connect()(QuizDoneView)
