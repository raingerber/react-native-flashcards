import React from 'react'
import {View, Text} from 'react-native'

import {clearLocalNotification, setLocalNotification} from '../notifications'

import styles from '../styles'
import Button from './Button'

class QuizDoneView extends React.Component {
  componentDidMount () {
    // if the user completes a quiz, do not show them a notification
    // that day; instead, set a notification for the following day
    clearLocalNotification().then(() => setLocalNotification())
  }

  render () {
    const {total, totalPossible, goBack, restartQuiz} = this.props
    return (
      <View style={styles.center}>
        <View style={styles.center}>
          <Text style={styles.fontLarge}>Quiz Results:</Text>
          <Text style={[styles.fontMedium, {marginTop: 10}]}>
            {`${total} of ${totalPossible} correct`}
          </Text>
        </View>
        <View style={[styles.center, styles.bottom]}>
          <Button
            text='Restart Quiz'
            onPress={restartQuiz} />
          <Button
            text='Back to Deck'
            onPress={goBack} />
        </View>
      </View>
    )
  }
}

export default QuizDoneView
