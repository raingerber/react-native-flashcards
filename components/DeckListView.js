import React from 'react'
import {connect} from 'react-redux'
import {FlatList, View, Text} from 'react-native'

// TODO remove setCurrentDeck stuff?
// import {setCurrentDeck} from '../actions/index'

import styles from '../styles'
import Button from './Button'
import QuestionText from './QuestionText'

function DeckListView ({decks, navigation}) {
  const list = []
  for (let key in decks) {
    const deck = decks[key]
    list.push({key, deck})
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={list}
        keyExtractor={({key}) => key}
        renderItem={({item: {key, deck}}) => {
          const onPress = () => navigation.navigate('DeckView', {key})
          return <DeckListItem {...deck} onPress={onPress} />
        }}
        style={{flex: 1, marginBottom: 10}}
      />
      <Button
        onPress={() => navigation.navigate('NewDeckView')}
        style={{marginTop: 10, marginBottom: 10}}>
        <Text>New Deck</Text>
      </Button>
    </View>
  )
}

function DeckListItem ({title, questions, onPress}) {
  return (
    <View style={{margin: 10}}>
      <Button onPress={onPress}>
        <Text style={styles.fontLarge}>{title}</Text>
        <QuestionText num={questions.length} />
      </Button>
    </View>
  )
}

const mapStateToProps = ({decks}) => ({decks})

export default connect(mapStateToProps)(DeckListView)
