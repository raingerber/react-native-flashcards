import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { NavigationActions } from 'react-navigation'

import Button from './Button'

const getTotal = (results) => results.reduce((acc, x) => acc + (x ? 1 : 0), 0)

function QuizDoneView ({results, totalPossible, navigation}) {
  // console.log(navigation)
  return (
    <View>
      <Text>Quiz Results:</Text>
      <Text>{`${getTotal(results)} of ${totalPossible}`}</Text>
      <Button
        text='Restart Quiz'
        onPress={() => navigation.goBack(null)}/>
      <Button
        text='Back to Deck'
        onPress={() => false}/>
    </View>
  )
}

export default connect()(QuizDoneView)
