import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components'

import { usePlayers } from 'hooks/usePlayers'
import { Card, DeckSize, GamePlayersState, PairCardType } from 'types'
import { Results } from 'components/Results/Results'

const initialPlayers: GamePlayersState = {
  players: []
}

const DeskWrapper = styled.div``

const PlayerWrapper = styled.div``

const CardsWrapper = styled.div`
  display: flex;
`

const CardWrapper = styled.div<{ borderColor: string }>`
  border: 2px solid transparent;
  ${({ borderColor }) => borderColor && `
    border-color: ${borderColor};
  `};
`

const getCardColor = (card: Card, pairs: PairCardType) => {
  const currentPair = pairs[card.rank]

  return currentPair?.color || ''
}

export const Desk = () => {
  const [gamePlayers, setGamePlayers] = useState<GamePlayersState>(initialPlayers)
  const [playersNum, setPlayersNum] = useState(2)
  const [deckSize, setDeckSize] = useState(DeckSize.Classic)

  console.log('deckSize!!!!!', deckSize)


  const [round, setRound] = useState(0)
  const { generatedPlayers, winners } = usePlayers(
    playersNum,
    round > 0,
    deckSize,
    gamePlayers.players,
    setGamePlayers
  )

  console.log('winners---->>>>>>>', winners)

  const onCardsDeal = () => {
    setRound(round + 1)
  }

  const handlePlayersNumChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value

    setPlayersNum(Number(val))
    setRound(0)
  }

  const handleDeckSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value

    console.log('handleDeckSizeChange', val)

    setDeckSize(Number(val))
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
        <select value={deckSize} onChange={handleDeckSizeChange}>
          <option value={DeckSize.Classic}>{DeckSize.Classic}</option>
          <option value={DeckSize.Short}>{DeckSize.Short}</option>
        </select>
      </div>
      <h4>Deal Button:</h4>
      <button className="play-button" onClick={onCardsDeal}>
        Deal Cards
      </button>
      <div>
        <div>
          {winners.length > 0 && <Results winners={winners} />}
        </div>
        {generatedPlayers.map(player => {
          return (
            <PlayerWrapper key={player.surname}>
              <div>{player.name} {player.surname}</div>
              <CardsWrapper>
                {player.cards.length > 0 && player.cards.map((card) => {
                  return (
                    <CardWrapper
                      key={`${card.rank}_${card.suits}`}
                      borderColor={getCardColor(card, player.pairs)}
                    >
                      <img
                        src={`/assets/playing-cards/${card.rank}${card.suits}.svg`}
                        alt={`card ${card.suits} ${card.rank}`}
                      />
                    </CardWrapper>
                  )
                })}
              </CardsWrapper>
            </PlayerWrapper>
          )})}
      </div>
    </DeskWrapper>
  )
}
