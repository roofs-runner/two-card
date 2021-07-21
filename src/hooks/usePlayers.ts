import { DEFAULT_HAND_SIZE, players } from 'constants/constants'
import { generateCardsDeck, generatePlayerCards } from 'modules/core'
import { Player, GamePlayersState } from 'types'

export const usePlayers = (playersNum: number, withCards: boolean, deckSize: number, currPlayers: Player[], setPlayers: (players: GamePlayersState) => void) => {
  console.log('playersNum', playersNum)
  const playersLength = [...Array(playersNum).keys()]
  const playersCopy = [...players]
  const copyOfDeck = [...generateCardsDeck(deckSize)]
  let generatedPlayers: Player[]

  if (currPlayers.length > 0 && currPlayers.length === playersNum) {
    generatedPlayers = currPlayers.map((player) => {
      return {
        name: player.name,
        surname: player.surname,
        cards: withCards ? generatePlayerCards(copyOfDeck, DEFAULT_HAND_SIZE) : []
      }
    })
  } else {
    generatedPlayers = playersLength.map(() => {
      const playerIndex = Math.floor(Math.random() * playersCopy.length)
      const [player] = playersCopy.splice(playerIndex, 1)

      return {
        name: player.name,
        surname: player.surname,
        cards: []
      }
    })

    setPlayers({ players: generatedPlayers })
  }

  console.log('players--->>>>', generatedPlayers)

  return {
    generatedPlayers
  }
}
