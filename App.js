import React from 'react'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'

import {setLocalNotification} from './notifications'

import reducer from './reducers/index'

import MainView from './components/MainView'

const store = createStore(reducer, applyMiddleware(thunk))

export default class App extends React.Component {
  componentDidMount () {
    setLocalNotification()
  }

  render () {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    )
  }
}
