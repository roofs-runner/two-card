import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

import { usePlayers } from 'hooks/usePlayers'
import { GamePlayersState } from 'types'

const initialPlayers: GamePlayersState = {
  players: []
}

const DeskWrapper = styled.div``

const PlayerWrapper = styled.div``

const CardsWrapper = styled.div`
  display: flex;
`

export const Desk = () => {
  const [gamePlayers, setGamePlayers] = useState<GamePlayersState>(initialPlayers)
  const [playersNum, setPlayersNum] = useState(2)
  const [deckSize, setDeckSize] = useState(52)
  const [round, setRound] = useState(0)
  const { generatedPlayers } = usePlayers(playersNum, round > 0, deckSize, gamePlayers.players, setGamePlayers)

  const onCardsDeal = () => {
    setRound(round + 1)
  }

  const handlePlayersNumChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value

    setPlayersNum(Number(val))
    setRound(0)
  }

  return (
    <DeskWrapper>
      <div>
        <select value={playersNum} onChange={handlePlayersNumChange}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
        </select>
      </div>
      <h4>Deal Button:</h4>
      <button className="play-button" onClick={onCardsDeal}>
        Deal Cards
      </button>
      <div>
        {generatedPlayers.map(player => {
          return (
            <PlayerWrapper key={player.surname}>
              <div>{player.name} {player.surname}</div>
              <CardsWrapper>
                {player.cards.length > 0 && player.cards.map((card) => {
                  return (
                    <div key={`${card.rank}_${card.suits}`}>
                      <img src={`/assets/playing-cards/${card.rank}${card.suits}.svg`} alt={`card ${card.suits} ${card.rank}`} />
                      {card.rank} {card.suits}
                    </div>
                  )
                })}
              </CardsWrapper>
            </PlayerWrapper>
          )})}
      </div>
    </DeskWrapper>
  )
}
