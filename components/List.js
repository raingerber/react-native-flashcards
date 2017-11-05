import React from 'react'
import { connect } from 'react-redux'
import { StatusBar, Text, View } from 'react-native'

// import { getDecks } from '../actions/index'

function Main (props) {
  return (
    <View>
      <StatusBar backgroundColor='blue' />
      <View style={{ margin: 50 }} />
      <Text>{JSON.stringify(props.decks)}</Text>
    </View>
  )
}

const mapStateToProps = ({ decks }) => {
  return { decks }
}

export default connect(mapStateToProps)(Main)
