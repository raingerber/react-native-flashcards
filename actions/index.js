import { AsyncStorage } from 'react-native'

import {
  GET_DECK,
  GET_DECKS,
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK,
  SET_CURRENT_DECK
} from './types'

import * as Storage from '../storage'

const getDecks = () => (dispatch) => {
  return Storage.getDecks()
    .then((decks) => dispatch({type: GET_DECKS, decks}))
}

// TODO always call getDecks before calling getDeck?
const getDeck = (title) => (dispatch) => {
  return Storage.getDeck(title)
    .then((deck) => dispatch({type: GET_DECK, deck}))
}

const saveDeckTitle = (title) => (dispatch) => {
  return Storage.saveDeckTitle(title)
    .then((decks) => dispatch({type: SAVE_DECK_TITLE, decks}))
}

const addCardToDeck = (title, card) => (dispatch) => {
  return Storage.addCardToDeck(title, card)
    .then((decks) => dispatch({type: ADD_CARD_TO_DECK, decks}))
}

const setCurrentDeck = (deck) => (dispatch) => {
  return dispatch({type: SET_CURRENT_DECK, deck})
}

export {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
  setCurrentDeck
}
