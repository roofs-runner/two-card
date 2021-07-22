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
    cards: [],
    pairs: {},
    pairsNum: 0
  },
  {
    name: 'Triss',
    surname: 'Merigold',
    cards: [],
    pairs: {},
    pairsNum: 0
  },
  {
    name: 'Yenneffer',
    surname: 'Vengerberg',
    cards: [],
    pairs: {},
    pairsNum: 0
  },
  {
    name: 'Ciri',
    surname: 'Of Cintra',
    cards: [],
    pairs: {},
    pairsNum: 0
  },
  {
    name: 'Shani',
    surname: 'Of Oxenfurt',
    cards: [],
    pairs: {},
    pairsNum: 0
  }
]

export const DEFAULT_HAND_SIZE = 7
