import {
  GET_DECKS,
  SAVE_DECK_TITLE,
  ADD_CARD_TO_DECK
} from '../actions/types'

export default function (state = {decks: {}, current: {}}, action) {
  if (action.type === GET_DECKS) {
    return {
      ...state,
      decks: action.decks
    }
  }

  if (action.type === SAVE_DECK_TITLE) {
    return {
      ...state,
      decks: action.decks
    }
  }

  if (action.type === ADD_CARD_TO_DECK) {
    return {
      ...state,
      decks: action.decks
    }
  }

  return state
}
