import { Suits, Ranks, Player } from 'types'

export const SUITES: Suits[] = [
  Suits.Diamonds,
  Suits.Hearts,
  Suits.Clubs,
  Suits.Spades
]

export const RANKS: Ranks[] = [
  Ranks.Two,
  Ranks.Three,
  Ranks.Four,
  Ranks.Five,
  Ranks.Six,
  Ranks.Seven,
  Ranks.Eight,
  Ranks.Nine,
  Ranks.Ten,
  Ranks.Jack,
  Ranks.Queen,
  Ranks.King,
  Ranks.Ace
]

export const players: Player[] = [
  {
    name: 'Geralt',
    surname: 'Of Rivia',
    cards: []
  },
  {
    name: 'Triss',
    surname: 'Merigold',
    cards: []
  },
  {
    name: 'Yenneffer',
    surname: 'Vengerberg',
    cards: []
  },
  {
    name: 'Ciri',
    surname: 'Of Cintra',
    cards: []
  }
]

export const DEFAULT_HAND_SIZE = 7
