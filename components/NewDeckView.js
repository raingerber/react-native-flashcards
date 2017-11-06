import React from 'react'
import {View, Text, TextInput} from 'react-native'

import Button from './Button'

class NewDeckView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  render () {
    return (
      <View>
        <TextInput
          onChangeText={(title) => this.setState({title})}
          value={this.state.title}
          placeholder='Deck Title'
          autoCorrect={false}
          autoFocus
        />
        <Button>
          <Text>Submit</Text>
        </Button>
      </View>
    )
  }
}

export default NewDeckView
