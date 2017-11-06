import React from 'react'
import {connect} from 'react-redux'
import {StackNavigator} from 'react-navigation'

import {getDecks} from '../actions/index'

import Loader from './Loader'
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

class MainView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      decksHaveLoaded: false
    }
  }

  componentDidMount () {
    this.props.dispatch(getDecks())
      .then(() => this.setState({decksHaveLoaded: true}))
  }

  render () {
    return this.state.decksHaveLoaded
      ? <Navigator />
      : <Loader />
  }
}

export default connect()(MainView)
