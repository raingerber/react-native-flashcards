import React from 'react'
import {connect} from 'react-redux'
import {View} from 'react-native'

import {addCardToDeck} from '../actions/index'

import Button from './Button'
import StyledTextInput from './StyledTextInput'

class NewQuestionView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      question: '',
      answer: ''
    }
  }

  onPress () {
    const {question, answer} = this.state
    this.props.dispatch(addCardToDeck(this.props.deckKey, {question, answer}))
    this.props.navigation.goBack(null)
  }

  render () {
    return (
      <View>
        <StyledTextInput
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          placeholder='Question'
          autoFocus />
        <StyledTextInput
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          placeholder='Answer'
          autoFocus={false} />
        <Button
          text='Submit'
          onPress={this.onPress.bind(this)} />
      </View>
    )
  }
}

const mapStateToProps = (state, {navigation}) => {
  return {deckKey: navigation.state.params.deckKey}
}

export default connect(mapStateToProps)(NewQuestionView)
