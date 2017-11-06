import {
  GET_DECKS,
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK
} from './types'

import * as Storage from '../storage'

const getDecks = () => (dispatch) => {
  return Storage.getDecks()
    .then((decks) => dispatch({type: GET_DECKS, decks}))
}

const saveDeckTitle = (title) => (dispatch) => {
  return Storage.saveDeckTitle(title)
    .then((decks) => dispatch({type: SAVE_DECK_TITLE, decks}))
}

const addCardToDeck = (title, card) => (dispatch) => {
  return Storage.addCardToDeck(title, card)
    .then((decks) => dispatch({type: ADD_CARD_TO_DECK, decks}))
}

export {
  getDecks,
  saveDeckTitle,
  addCardToDeck
}
