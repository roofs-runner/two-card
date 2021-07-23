import { DeckSize, Player, Ranks, Suits } from 'types'

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

export const playersConfig = [
  { value: '2',
    label: '2'
  },
  { value: '3',
    label: '3'
  },
  { value: '4',
    label: '4'
  }
]

export const deckConfig = [
  { value: DeckSize.Classic.toString(),
    label: DeckSize.Classic.toString()
  },
  { value: DeckSize.Short.toString(),
    label: DeckSize.Short.toString()
  }
]
