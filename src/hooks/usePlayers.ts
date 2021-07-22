import { useMemo } from 'react'

import { DEFAULT_HAND_SIZE, players } from 'constants/constants'
import { generateCardsDeck, generatePlayerCards, getCardsPairs, getPairsNum, getWinners } from 'modules/core'
import { Player, GamePlayersState } from 'types'

export const usePlayers = (
  playersNum: number,
  withCards: boolean,
  deckSize: number,
  currPlayers: Player[],
  setPlayers: (players: GamePlayersState) => void
) => {
  const playersLength = [...Array(playersNum).keys()]
  const playersCopy = [...players]
  const cardsDeck = useMemo( () => generateCardsDeck(deckSize), [deckSize])
  const copyOfDeck = [...cardsDeck]
  let generatedPlayers: Player[]
  let winners: Player[] = []

  if (currPlayers.length > 0 && currPlayers.length === playersNum) {
    generatedPlayers = currPlayers.map((currPlayer) => {
      const playerCards = withCards ? generatePlayerCards(copyOfDeck, DEFAULT_HAND_SIZE) : []
      const cardPairs = getCardsPairs(playerCards)
      return {
        name: currPlayer.name,
        surname: currPlayer.surname,
        cards: playerCards,
        pairs: cardPairs,
        pairsNum: getPairsNum(cardPairs)
      }
    })
    winners = withCards ? getWinners(generatedPlayers) : []
  } else {
    generatedPlayers = playersLength.map(() => {
      const playerIndex = Math.floor(Math.random() * playersCopy.length)
      const [player] = playersCopy.splice(playerIndex, 1)

      return {
        name: player.name,
        surname: player.surname,
        cards: [],
        pairs: {},
        pairsNum: 0
      }
    })

    setPlayers({ players: generatedPlayers })
  }

  console.log('players--->>>>usePlayers', generatedPlayers)

  return {
    generatedPlayers,
    winners
  }
}
