import { Card, DeckSize } from 'types'
import { SUITES, RANKS } from 'constants/constants'

export const generateCardsDeck = (size: DeckSize) => {
  const deckShift = size === DeckSize.Short ? 4 : 0
  const ranks = RANKS.slice(deckShift)
  const deck: Card[] = []

  for (let s = 0; s < SUITES.length; s++) {
    for(let r = 0; r < ranks.length; r++) {
      deck.push({
        suits: SUITES[s],
        rank: RANKS[r]
      })
    }
  }

  return deck
}

export const generatePlayerCards = (cards: Card[], handSize: number) => {
  const handLength = [...Array(handSize).keys()]

  return handLength.map(() => {
    const cardIndex = Math.floor(Math.random() * cards.length)
    const [card] = cards.splice(cardIndex, 1)

    return card
  })
}
