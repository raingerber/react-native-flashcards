import React from 'react'
import {connect} from 'react-redux'
import {View, Text, StyleSheet} from 'react-native'

import Button from './Button'
import QuizDoneView from './QuizDoneView'

class QuizView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionNum: 0,
      showQuestion: true,
      results: props.questions.map(() => false)
    }
  }

  getCurrentQuestion () {
    return this.props.questions[this.state.questionNum]
  }

  saveResult (result) {
    this.setState((state) => {
      const results = state.results.concat()
      results[this.state.questionNum] = result
      return {
        ...state,
        results,
        questionNum: state.questionNum + 1,
        showQuestion: true
      }
    })
  }

  markCorrect () {
    this.saveResult(true)
  }

  markIncorrect () {
    this.saveResult(false)
  }

  render () {
    // console.log(this.state)
    const {questions} = this.props
    if (this.state.questionNum >= questions.length) {
      const {results} = this.state
      return (
        <QuizDoneView
          results={this.state.results}
          totalPossible={questions.length}
          navigation={this.props.navigation}
        />
      )
    }

    const {title} = this.props
    const current = this.getCurrentQuestion()
    return (
      <View>
        <Text>{title}</Text>
        <Text>{`Question ${this.state.questionNum + 1} of ${questions.length}`}</Text>
        {this.state.showQuestion ? (
          <View>
            <Text>{current.question}</Text>
            <Button
              text='Show Answer'
              onPress={() => this.setState({showQuestion: false})} />
          </View>
        ) : (
          <View>
            <Text>{current.answer}</Text>
            <Button
              text='Correct'
              onPress={() => this.markCorrect()} />
            <Button
              text='Incorrect'
              onPress={() => this.markIncorrect()} />
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = (state, {navigation}) => {
  const {title, questions} = navigation.state.params.deck
  return {title, questions}
}

export default connect(mapStateToProps)(QuizView)
