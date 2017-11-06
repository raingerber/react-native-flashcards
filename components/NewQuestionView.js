import React from 'react'
import {connect} from 'react-redux'
import {View, TextInput} from 'react-native'

import {addCardToDeck} from '../actions/index'

import styles from '../styles'
import Button from './Button'

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
    const {title} = this.props.navigation.state.params.deck
    this.props.dispatch(addCardToDeck(title, {question, answer}))
    this.props.navigation.goBack(null)
  }

  render () {
    return (
      <View>
        <StyledInput
          onChangeText={(question) => this.setState({question})}
          value={this.state.question}
          placeholder='Question'
          autoCorrect={false}
          autoFocus />
        <StyledInput
          onChangeText={(answer) => this.setState({answer})}
          value={this.state.answer}
          placeholder='Answer'
          autoCorrect={false}
          autoFocus={false} />
        <Button
          text='Submit'
          onPress={this.onPress.bind(this)} />
      </View>
    )
  }
}

const StyledInput = (props) => <TextInput {...props} style={styles.input} />

export default connect()(NewQuestionView)
