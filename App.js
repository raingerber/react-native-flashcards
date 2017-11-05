import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {StyleSheet, Text, View} from 'react-native'

import reducer from './reducers/index'

import Main from './components/Main'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
