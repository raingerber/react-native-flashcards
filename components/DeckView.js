import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

import styles from '../styles'
import Button from './Button'
import QuestionText from './QuestionText'

class DeckView extends React.Component {
  render () {
    const {deck} = this.props
    if (!deck) {
      return (
        <View style={styles.center}>
          <Text>
            Deck is not available!
          </Text>
        </View>
      )
    }

    const {title, questions} = deck
    const {deckKey, navigation} = this.props
    return (
      <View style={styles.center}>
        <View style={styles.center}>
          <View style={styles.center}>
            <Text style={styles.fontLarge}>{title}</Text>
            <Text style={{marginTop: 10, alignItems: 'center'}}>deck</Text>
          </View>
          <QuestionText num={questions.length} />
        </View>
        <View style={[styles.center, styles.bottom]}>
          {!!questions.length &&
            <Button
              text='Start a Quiz'
              onPress={() => navigation.navigate('QuizView', {deckKey})} />}
          <Button
            text='Create New Question'
            onPress={() => navigation.navigate('NewQuestionView', {deckKey})} />
        </View>
      </View>
    )
  }
}

const mapStateToProps = ({decks}, {navigation}) => {
  const {deckKey} = navigation.state.params
  return {deckKey, deck: decks[deckKey]}
}

export default connect(mapStateToProps)(DeckView)
