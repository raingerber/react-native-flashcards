import React from 'react'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'

import {getDecks} from '../actions/index'

import DeckListView from './DeckListView'
import DeckView from './DeckView'
import NewDeckView from './NewDeckView'
import NewQuestionView from './NewQuestionView'
import QuizView from './QuizView'

const Navigator = StackNavigator({
  DeckListView: {screen: DeckListView},
  DeckView: {screen: DeckView},
  QuizView: {screen: QuizView},
  NewDeckView: {screen: NewDeckView},
  NewQuestionView: {screen: NewQuestionView}
}, {
  initialRouteName: 'DeckListView'
})

function Main (props) {
  props.dispatch(getDecks())
  return <Navigator />
}

export default connect()(Main)
