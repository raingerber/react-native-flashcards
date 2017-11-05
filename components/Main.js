import React from 'react'
import {connect} from 'react-redux'
import {StatusBar, View, Text} from 'react-native'
import {AsyncStorage} from 'react-native'
import {StackNavigator} from 'react-navigation'

import {getDecks, getDeck, saveDeckTitle, addCardToDeck} from '../actions/index'

import DeckList from './DeckList'
import DeckView from './DeckView'
import NewDeckView from './NewDeckView'
import NewQuestionView from './NewQuestionView'
import QuizView from './QuizView'

const testDeck = {
  title: 'React',
  questions: [{
    question: 'What is React?',
    answer: 'A library for managing user interfaces'
  }, {
    question: 'Where do you make Ajax requests in React?',
    answer: 'The componentDidMount lifecycle event'
  }]
}

const Navigator = StackNavigator({
  DeckList: { screen: DeckList },
  NewDeckView: { screen: NewDeckView },
  NewQuestionView: { screen: NewQuestionView },
  DeckView: { screen: DeckView },
  QuizView: { screen: QuizView }
}, {
  initialRouteName: 'DeckList'
})

function Main (props) {
  const { dispatch } = props
  dispatch(saveDeckTitle('React'))
    .then(() => dispatch(saveDeckTitle('JavaScript')))
    .then(() => dispatch(addCardToDeck('React', {
      question: 'What is React?',
      answer: 'A library for managing user interfaces'
    })))
    .then(() => dispatch(addCardToDeck('React', {
      question: 'Where do you make Ajax requests in React?',
      answer: 'The componentDidMount lifecycle event'
    })))
    .then(() => dispatch(addCardToDeck('JavaScript', {
      question: 'What is a closure?',
      answer: 'The combination of a function and the lexical environment within which that function was declared.'
    })))
    .then(() => dispatch(getDecks()))

  return <Navigator />
}

export default connect()(Main)
