import React from 'react'
import {connect} from 'react-redux'
import {View, Text} from 'react-native'

import Button from './Button'
import StyledTextInput from './StyledTextInput'

import {saveDeckTitle} from '../actions/index'

class NewDeckView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  submit () {
    const {dispatch, navigation} = this.props
    dispatch(saveDeckTitle(this.state.title))
    navigation.goBack(null)
  }

  render () {
    return (
      <View>
        <View>
          <StyledTextInput
            onChangeText={(title) => this.setState({title})}
            value={this.state.title}
            placeholder='Deck Title'
            autoCapitalize='words'
            autoFocus
          />
        </View>
        <View style={{paddingTop: 20}}>
          <Button onPress={this.submit.bind(this)}>
            <Text>Submit</Text>
          </Button>
        </View>
      </View>
    )
  }
}

export default connect()(NewDeckView)
