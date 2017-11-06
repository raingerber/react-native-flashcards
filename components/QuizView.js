import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

import styles from '../styles'
import Button from './Button'
import QuizDoneView from './QuizDoneView'

const getTotal = (results) => results.reduce((acc, x) => acc + (x ? 1 : 0), 0)

// const getCounter = (index, total) => ` ${this.state.questionNum + 1} of ${questions.length}`

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
      return (
        <QuizDoneView
          total={getTotal(this.state.results)}
          totalPossible={questions.length}
          navigation={this.props.navigation}
        />
      )
    }

    const {title} = this.props
    const {showQuestion} = this.state
    const current = this.getCurrentQuestion()
    const subHeader = (showQuestion ? 'Question' : 'Answer') + (
      ` ${this.state.questionNum + 1} of ${questions.length}`
    )

    return (
      <View style={styles.center}>
        <View style={styles.center}>
          <Text style={[{flex: 1, padding: 5}, styles.fontMedium]}>{title}</Text>
          <Text style={{flex: 1}}>{subHeader}</Text>
          <View style={[styles.center, {flex: 3, backgroundColor: 'blue'}]}>
            <Text style={[styles.fontMedium, {backgroundColor: 'red'}]}>
              {showQuestion ? current.question : current.answer}
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

// <Text>{current.question}</Text>

// function QuizQuestion (props) {
//   return (
//     <View style={[styles.center, styles.bottom]}>
//       <Button
//         text='Show Answer'
//         onPress={() => this.setState({showQuestion: false})} />
//     </View>
//   )
// }

// function AnswerQuestion (props) {
//   return (
//     <View style={styles.center}>

//     </View>
//   )
// }

const mapStateToProps = (state, {navigation}) => {
  const {title, questions} = navigation.state.params.deck
  return {title, questions}
}

export default connect(mapStateToProps)(QuizView)
