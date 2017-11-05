import React from 'react'
import {connect} from 'react-redux'
import {FlatList, View, Text, StyleSheet} from 'react-native'

import {setCurrentDeck} from '../actions/index'

import Button from './Button'
import DeckView from './DeckView'
import QuestionHeader from './QuestionHeader'

function DeckList ({decks, dispatch, navigation}) {
  const list = []
  for (let key in decks) {
    list.push(decks[key])
  }

  return (
    <FlatList
      data={list}
      keyExtractor={({title}) => title}
      renderItem={({item: deck}) => {
        const onPress = () => {
          dispatch(setCurrentDeck(deck))
            .then(() => navigation.navigate('DeckView'))
        }

        return <DeckListItem {...deck} onPress={onPress} />
      }}
    />
  )
}

function DeckListItem ({title, questions, onPress}) {
  return (
    <View style={{margin: 10}}>
      <Text>{title}</Text>
      <QuestionHeader num={questions.length} />
      <Button text='Go' onPress={onPress} />
    </View>
  )
}

// StyleSheet.create({
// })

const mapStateToProps = ({ decks }) => ({ decks })

export default connect(mapStateToProps)(DeckList)
