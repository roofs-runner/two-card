import { Card, PairCardType, Player, Ranks, Suits } from '../types'

export const cardsMock: Card[] = [
  { suits: Suits.Hearts, rank: Ranks.Two },
  { suits: Suits.Diamonds, rank: Ranks.Queen },
  { suits: Suits.Spades, rank: Ranks.Ten },
  { suits: Suits.Spades, rank: Ranks.Queen },
  { suits: Suits.Diamonds, rank: Ranks.Jack },
  { suits: Suits.Diamonds, rank: Ranks.Seven },
  { suits: Suits.Spades, rank: Ranks.Three }
]

export const mockCards: Card[] = [
  { suits: Suits.Hearts, rank: Ranks.Two },
  { suits: Suits.Diamonds, rank: Ranks.Queen },
  { suits: Suits.Spades, rank: Ranks.Ten },
  { suits: Suits.Spades, rank: Ranks.Queen },
  { suits: Suits.Diamonds, rank: Ranks.Jack },
  { suits: Suits.Diamonds, rank: Ranks.Seven },
  { suits: Suits.Spades, rank: Ranks.Three }
]

export const cardsMock2: Card[] = [
  { suits: Suits.Hearts, rank: Ranks.Three },
  { suits: Suits.Diamonds, rank: Ranks.Ace },
  { suits: Suits.Spades, rank: Ranks.Ace },
  { suits: Suits.Spades, rank: Ranks.Jack },
  { suits: Suits.Diamonds, rank: Ranks.Two },
  { suits: Suits.Diamonds, rank: Ranks.Eight },
  { suits: Suits.Spades, rank: Ranks.Five }
]

export const cardsMockNoPairs: Card[] = [
  { suits: Suits.Hearts, rank: Ranks.Two },
  { suits: Suits.Diamonds, rank: Ranks.Queen },
  { suits: Suits.Spades, rank: Ranks.Ten },
  { suits: Suits.Spades, rank: Ranks.King },
  { suits: Suits.Diamonds, rank: Ranks.Jack },
  { suits: Suits.Diamonds, rank: Ranks.Seven },
  { suits: Suits.Spades, rank: Ranks.Three }
]

export const cardsPairs: PairCardType = {
  Q: {
    cards: [
      { suits: Suits.Diamonds, rank: Ranks.Queen },
      { suits: Suits.Spades, rank: Ranks.Queen }
    ],
    color: expect.any(String) }
}

export const cardsPairs2: PairCardType = {
  A: {
    cards: [
      { suits: Suits.Diamonds, rank: Ranks.Ace },
      { suits: Suits.Spades, rank: Ranks.Ace }
    ],
    color: expect.any(String) }
}

export const cardsPairs3: PairCardType = {
  A: {
    cards: [
      { suits: Suits.Diamonds, rank: Ranks.Ace },
      { suits: Suits.Spades, rank: Ranks.Ace }
    ],
    color: '#fff'
  }
}

export const playersMock: Player[] = [
  {
    name: 'Harry',
    surname: 'Potter',
    cards: cardsMock,
    pairs: cardsPairs,
    pairsNum: 1
  },
  {
    name: 'Hermione',
    surname: 'Granger',
    cards: cardsMockNoPairs,
    pairs: {},
    pairsNum: 0
  }
]

export const playersMock2: Player[] = [
  {
    name: 'Ron',
    surname: 'Weasley',
    cards: cardsMock,
    pairs: cardsPairs,
    pairsNum: 1
  },
  {
    name: 'Hermione',
    surname: 'Granger',
    cards: cardsMock2,
    pairs: cardsPairs2,
    pairsNum: 1
  }
]

export const playersMock3: Player[] = [
  {
    name: 'Ron',
    surname: 'Weasley',
    cards: mockCards,
    pairs: cardsPairs,
    pairsNum: 1
  },
  {
    name: 'Hermione',
    surname: 'Granger',
    cards: mockCards,
    pairs: cardsPairs,
    pairsNum: 1
  }
]

export const playersMock4: Player[] = [
  {
    name: 'Ron',
    surname: 'Weasley',
    cards: cardsMockNoPairs,
    pairs: {},
    pairsNum: 0
  },
  {
    name: 'Hermione',
    surname: 'Granger',
    cards: cardsMockNoPairs,
    pairs: {},
    pairsNum: 0
  }
]

export const player: Player = {
  name: 'Hermione',
  surname: 'Granger',
  cards: cardsMock2,
  pairs: cardsPairs3,
  pairsNum: 1
}
