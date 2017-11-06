import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'react-native-flashcards:storage-key'

const newDeck = (title, questions = []) => ({ title, questions })

const getDecks = () => {
  return AsyncStorage.getItem(STORAGE_KEY).then((decks) => JSON.parse(decks) || {})
}

const getDeck = (title) => {
  return getDecks().then((decks) => decks[title])
}

const saveDeckTitle = (title) => {
  return saveDeck(title, newDeck(title))
}

const addCardToDeck = (title, card) => {
  return getDeck(title).then((deck) => {
    deck = deck || newDeck(title)
    deck.questions.push(card)
    return saveDeck(title, deck)
  })
}

const saveDeck = (title, deck) => {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({ [title]: deck }))
    .then(() => getDecks())
}

export {
  getDecks,
  getDeck,
  saveDeckTitle,
  addCardToDeck,
  saveDeck
}
