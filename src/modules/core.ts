import { groupBy } from 'lodash'

import { Card, DeckSize, PairCardType, Player } from 'types'
import { SUITES, RANKS } from 'constants/constants'

export const generateCardsDeck = (size: DeckSize) => {
  const deckShift = size === DeckSize.Short ? 4 : 0
  const ranks = RANKS.slice(deckShift)
  const deck: Card[] = []

  for (let s = 0, sl = SUITES.length; s < sl; s++) {
    for(let r = 0, rl = ranks.length; r < rl; r++) {
      deck.push({
        suits: SUITES[s],
        rank: ranks[r]
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

export const getCardsPairs = (cards: Card[]): PairCardType => {
  const groupedCards = groupBy(cards, 'rank')
  const cardsKeys = Object.keys(groupedCards)
  return cardsKeys.reduce((cardPairs, currentRank: string) => {
    const currentCard = groupedCards[currentRank]

    if(currentCard.length >= 2) {
      return {
        ...cardPairs,
        [currentRank]: {
          cards: currentCard,
          color: getRandomColor()
        }
      }
    }

    return cardPairs
  }, {})
}

/**
 * This method generates darker array of colors to juxtapose the green desk
 */
export const getRandomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }

  return color
}

export const getPairsNum = (pairs: PairCardType) => {
  return Object.values(pairs).reduce((count, pair) => {
    return count + Math.floor(pair.cards.length / 2)
  }, 0)
}

export const getWinners = (players: Player[]) => {
  let winners: Player[] = []

  if (players.every(player => player.pairsNum === 0)) {
    return []
  }

  for (const player of players) {
    if (winners.length === 0 || winners.some(winner => winner.pairsNum < player.pairsNum)) {
      winners = [player]
    } else if (winners.some(winner => winner.pairsNum === player.pairsNum)) {
      winners.push(player)
    }
  }

  return winners
}
