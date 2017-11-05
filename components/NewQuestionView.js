import React from 'react'
import {connect} from 'react-redux'
import {View, Text, TextInput, StyleSheet} from 'react-native'

import {addCardToDeck} from '../actions/index'

import Button from './Button'

class NewQuestionView extends React.Component {
  state = {
    question: '',
    answer: ''
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
          autoFocus={true} />
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

const styles = StyleSheet.create({
  input: {
    margin: 40,
    marginLeft: 20,
    marginRight: 20
  }
})

export default connect()(NewQuestionView)
