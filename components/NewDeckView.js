import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import Button from './Button'

class NewDeckView extends React.Component {
  state = {
    title: ''
  }

  render () {
    return (
      <View>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder='Deck Title'
          autoCorrect={false}
          autoFocus={true}
        />
        <Button>
          <Text>Submit</Text>
        </Button>
      </View>
    )
  }
}

export default NewDeckView
