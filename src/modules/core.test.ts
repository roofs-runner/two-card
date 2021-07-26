import { Card, DeckSize } from 'types'
import { cardsMock, cardsPairs, cardsMockNoPairs, playersMock, playersMock2, playersMock4 } from 'mocks/mocks'

import { generateCardsDeck, generatePlayerCards, getCardsPairs, getPairsNum, getWinners } from './core'

describe('generateCardsDeck', () => {
  const result = generateCardsDeck(DeckSize.Classic)

  it('returns 52 cards for for a classic deck', () => {
    expect(result.length).toEqual(DeckSize.Classic)
  })

  describe('when deck size is short', () => {
    const result = generateCardsDeck(DeckSize.Short)

    it('returns 36 cards for for a short deck', () => {
      expect(result.length).toEqual(DeckSize.Short)
    })
  })
})

describe('generatePlayerCards', () => {
  const deckOfCards = generateCardsDeck(DeckSize.Classic)
  const deckCopy = [...deckOfCards]
  const result = generatePlayerCards(deckCopy, 7)

  it('returns players cards and removes corresponding cards from the main deck', () => {
    expect(result.length).toEqual(7)
    expect(deckCopy.length).toEqual(45)
    expect(compareCards(deckOfCards, result)).toBeGreaterThan(-1)
    expect(compareCards(deckCopy, result)).toBe(-1)
  })
})

describe('getCardsPairs', () => {
  const result = getCardsPairs(cardsMock)

  it('returns cards grouped by their rank', () => {
    expect(result).toStrictEqual(cardsPairs)
  })

  describe('when player cards have no pairs', () => {
    const result = getCardsPairs(cardsMockNoPairs)

    it('returns empty object', () => {
      expect(result).toStrictEqual({})
    })

  })
})

describe('getPairsNum', () => {
  const result = getPairsNum(cardsPairs)

  it('returns number of cards pairs', () => {
    expect(result).toBe(1)
  })
})

describe('getWinners', () => {
  const result = getWinners(playersMock)

  it('returns a winning player', () => {
    expect(result.length).toBe(1)
    expect(result).toStrictEqual([playersMock[0]])
  })

  describe('when players have same number of pairs', () => {
    const result = getWinners(playersMock2)

    it('returns multiple players when it is a draw', () => {
      expect(result.length).toBe(2)
      expect(result).toStrictEqual(playersMock2)
    })
  })

  describe('when players have no pairs', () => {
    const result = getWinners(playersMock4)

    it('returns empty array for winners', () => {
      expect(result.length).toBe(0)
    })
  })
})

function compareCards(fullDeck: Card[], playerCards: Card[]) {
  const firstPlayerCard = playerCards[0]
  return fullDeck.findIndex(item => item.rank === firstPlayerCard.rank && item.suits === firstPlayerCard.suits)
}
