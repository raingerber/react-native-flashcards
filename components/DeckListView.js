import React from 'react'
import {connect} from 'react-redux'
import {FlatList, View, Text, StyleSheet} from 'react-native'

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
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      {list.length ? (
        <FlatList
          data={list}
          renderItem={({item: {key, deck}}) => {
            const onPress = () => navigation.navigate('DeckView', {deckKey: key})
            return <DeckListItem {...deck} onPress={onPress} />
          }}
        />
      ) : (
        <View style={styles.center}>
          <Text style={{margin: 10}}>
            Please make some decks!
          </Text>
        </View>
      )}

      <View style={localStyles.newDeckButtonContainer}>
        <Button onPress={() => navigation.navigate('NewDeckView')}>
          <Text>New Deck</Text>
        </Button>
      </View>
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

const localStyles = StyleSheet.create({
  newDeckButtonContainer: {
    paddingTop: 20,
    paddingBottom: 12,
    backgroundColor: '#9a9fa8'
  }
})

export default connect(mapStateToProps)(DeckListView)
