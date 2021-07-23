import React, { VFC } from 'react'
import styled from 'styled-components'

import { Player } from 'types'
import { GameCard } from 'components/Card'

export interface PlayerProps {
  player: Player
}

const PlayerWrapper = styled.div``

const CardsWrapper = styled.div`
  display: flex;
`

const Name = styled.div`
  margin-bottom: 1rem;
  font-weight: 600;
`

export const GamePlayer: VFC<PlayerProps> = ({ player }) => {
  return (
    <PlayerWrapper>
      <Name>{player.name} {player.surname}</Name>
      {player.cards.length > 0 && (
        <CardsWrapper data-testid="cards-wrapper">
          {player.cards.map((card) => {
            return <GameCard key={`${card.rank}_${card.suits}`} card={card} pairs={player.pairs} />
          })}
      </CardsWrapper>)}
    </PlayerWrapper>
  )
}