import { AsyncStorage } from 'react-native'

const KEY = 'flashcards-storage-key'

const newDeck = (title, questions = []) => ({ title, questions })

export const getDecks = () => {
  return AsyncStorage.getItem(KEY).then((decks) => JSON.parse(decks) || {})
}

export const getDeck = (title) => {
  return getDecks().then((decks) => decks[title])
}

export const saveDeckTitle = (title) => {
  return saveDeck(title, newDeck(title))
}

export const addCardToDeck = (title, card) => {
  return getDeck(title).then((deck) => {
    deck = deck || newDeck(title)
    deck.questions.push(card)
    return saveDeck(title, deck)
  })
}

export const saveDeck = (title, deck) => {
  return AsyncStorage.mergeItem(KEY, JSON.stringify({ [title]: deck }))
}
