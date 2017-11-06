import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

import styles from '../styles'
import Button from './Button'
import Loader from './Loader'
import QuestionText from './QuestionText'

function DeckView ({deck, navigation}) {
  if (!deck) {
    return <Loader />
  }

  const {title, questions} = deck
  return (
    <View style={styles.center}>
      <View style={styles.center}>
        <View style={styles.center}>
          <Text style={styles.fontLarge}>{title}</Text>
          <Text style={{marginTop: 10, alignItems: 'center'}}>deck</Text>
        </View>
        <QuestionText num={questions.length} />
      </View>
      <View style={[styles.center, styles.bottom]}>
        {questions.length &&
          <Button
            text='Start a Quiz'
            onPress={() => navigation.navigate('QuizView', {deck})} />}
        <Button
          text='Create New Question'
          onPress={() => navigation.navigate('NewQuestionView', {deck})} />
      </View>
    </View>
  )
}

const mapStateToProps = ({decks}, {navigation}) => {
  const {key} = navigation.state.params
  return {deck: decks[key]}
}

export default connect(mapStateToProps)(DeckView)
