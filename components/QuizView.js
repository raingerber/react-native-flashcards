import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

import styles from '../styles'
import Button from './Button'
import QuizDoneView from './QuizDoneView'

// count the total number of correct answers
const getTotal = (results) => results.reduce((acc, x) => acc + (x ? 1 : 0), 0)

class QuizView extends React.Component {
  constructor (props) {
    super(props)
    this.state = this.getDefaultState()
  }

  getDefaultState () {
    return {
      questionNum: 0,
      showQuestion: true,
      results: this.props.questions.map(() => false)
    }
  }

  restartQuiz () {
    this.setState(this.getDefaultState())
  }

  goBack () {
    this.props.navigation.goBack(null)
  }

  getCurrentQuestion () {
    return this.props.questions[this.state.questionNum]
  }

  saveResult (result) {
    this.setState((state) => {
      const results = state.results.concat()
      // we record correct/incorrect answers as true/false in this array
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
    const {questions} = this.props
    if (this.state.questionNum >= questions.length) {
      return (
        <QuizDoneView
          total={getTotal(this.state.results)}
          totalPossible={questions.length}
          restartQuiz={this.restartQuiz.bind(this)}
          goBack={this.goBack.bind(this)}
      />
      )
    }

    const {title} = this.props
    const {showQuestion} = this.state
    const currentQuestion = this.getCurrentQuestion()
    const subHeader = (showQuestion ? 'Question' : 'Answer') + (
      ` ${this.state.questionNum + 1} of ${questions.length}`
    )

    return (
      <View style={styles.center}>
        <View style={styles.center}>
          <Text style={[{flex: 1, padding: 5}, styles.fontMedium]}>{title}</Text>
          <Text style={{flex: 1}}>{subHeader}</Text>
          <View style={[styles.center, {flex: 3}]}>
            <Text style={styles.fontMedium}>
              {showQuestion ? currentQuestion.question : currentQuestion.answer}
            </Text>
          </View>
        </View>
        {showQuestion ? (
          <View style={[styles.center, styles.bottom]}>
            <Button
              text='Show Answer'
              onPress={() => this.setState({showQuestion: false})} />
          </View>
        ) : (
          <View style={[styles.center, styles.bottom]}>
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

const mapStateToProps = ({decks}, {navigation}) => {
  const {title, questions} = decks[navigation.state.params.deckKey]
  return {title, questions}
}

export default connect(mapStateToProps)(QuizView)
