import React from 'react'
import { connect } from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'

import QuestionHeader from './QuestionHeader'
import Button from './Button'

function DeckView ({deck, navigation}) {
  // console.log('DECK:', deck)
  return (
    <View>
      <Text>{deck.title}</Text>
      <QuestionHeader num={deck.questions.length} />
      <Button
        text='Start Quiz'
        onPress={() => navigation.navigate('QuizView', {deck})} />
      <Button
        text='Add Question'
        onPress={() => navigation.navigate('NewQuestionView', {deck})} />
    </View>
  )
}

const mapStateToProps = ({current}) => {
  console.log(current)
  return {deck: current}
}

export default connect(mapStateToProps)(DeckView)
