import {
  GET_DECK,
  GET_DECKS,
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK,
  SET_CURRENT_DECK
} from '../actions/types'

export default function (state = {decks: {}, current: {}}, action) {
  // TODO need to make sure that state.decks exists
  if (action.type === GET_DECK) {
    return {
      ...state,
      current: state.decks[action.key] || {}
    }
  }

  if (action.type === SET_CURRENT_DECK) {
    return {
      ...state,
      current: action.deck || {}
    }
  }

  if (action.decks) {

    return {
      ...state,
      decks: action.decks || {}
    }
  }

  return state

  // if (action.type === GET_DECKS) {
  //   return {
  //     ...state,
  //     decks: action.decks || {}
  //   }
  // }
  //
  // if (action.type === SAVE_DECK_TITLE) {
  //   return {
  //     ...state,
  //     decks: action.decks
  //   }
  // }
  //
  // if (action.type === ADD_CARD_TO_DECK) {
  //   return {
  //     ...state,
  //     decks: action.decks || {}
  //   }
  // }

  // return state
}
