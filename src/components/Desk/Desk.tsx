import React, { useCallback, useState } from 'react'
import styled from 'styled-components'

import { usePlayers } from 'hooks/usePlayers'
import { DeckSize, GamePlayersState } from 'types'
import { Results } from 'components/Results/Results'
import { Configuration } from 'components/Configuration'
import { GamePlayer } from 'components/Player'

const initialPlayers: GamePlayersState = {
  players: []
}

const ConfigurationWrapper = styled.div`
  margin: 4rem 0;
`

const ResultsWrapper = styled.div`
  margin: 4rem 0;
`

export const Desk = () => {
  const [gamePlayers, setGamePlayers] = useState<GamePlayersState>(initialPlayers)
  const [playersNum, setPlayersNum] = useState(2)
  const [deckSize, setDeckSize] = useState(DeckSize.Classic)
  const [round, setRound] = useState(0)
  const { generatedPlayers, winners } = usePlayers({
    playersNum,
    withCards: round > 0,
    deckSize,
    currPlayers: gamePlayers.players,
    setPlayers: setGamePlayers
})

  const onCardsDeal = useCallback(() => {
    setRound(round + 1)
  }, [round])

  const handlePlayersNumChange = useCallback((val: string) => {
    setPlayersNum(Number(val))
    setRound(0)
  }, [setPlayersNum, setRound])

  const handleDeckSizeChange = useCallback((val: string) => {
    setDeckSize(Number(val))
    setRound(0)
  }, [setDeckSize, setRound])

  return (
    <article>
      <ConfigurationWrapper>
        <Configuration
          players={playersNum}
          deckSize={deckSize}
          onDeckSizeChange={handleDeckSizeChange}
          onPlayersChange={ handlePlayersNumChange}
        />
      </ConfigurationWrapper>
      <h4>Deal Button:</h4>
      <button className="play-button" onClick={onCardsDeal}>
        Deal Cards
      </button>
      <div>
        <ResultsWrapper>
          {winners.length > 0 && <Results winners={winners} />}
        </ResultsWrapper>
        <h4>Players at the table:</h4>
        {generatedPlayers.map(player => <GamePlayer key={player.surname} player={player} />)}
      </div>
    </article>
  )
}
