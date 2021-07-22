export enum DeckSize {
  Classic = 52,
  Short = 36
}

export enum Suits {
  Diamonds = 'diamonds',
  Hearts = 'hearts',
  Clubs = "clubs",
  Spades = "spades"
}

export enum Ranks {
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
  Six = '6',
  Seven = '7',
  Eight = '8',
  Nine = '9',
  Ten = '10',
  Jack = 'J',
  Queen = 'Q',
  King = 'K',
  Ace = 'A'
}

export interface Card {
  rank: Ranks,
  suits: Suits
  color?: string
}

export interface CardPair {
  cards: Card[]
  color: string
}

export type CardPairs = { [key in Ranks]?: CardPair }
export type PairCardType = CardPairs | Record<string, never>

export interface Player {
  name: string
  surname: string
  cards: Card[]
  pairs: PairCardType
  pairsNum: number
}

export interface GamePlayersState {
  players: Player[]
}
