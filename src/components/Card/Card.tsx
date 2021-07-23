import React, { VFC } from 'react'
import styled from 'styled-components'
import { transparentize } from 'polished'

import { Card, PairCardType } from 'types'

export interface CardProps {
  card: Card
  pairs: PairCardType
}

const CardWrapper = styled.div<{ borderColor: string }>`
  position: relative;
  margin-right: 5px;
  width: 24.4rem;
  height: 34rem;
  border-radius: 1.5rem;
  margin-bottom: 2rem;
  border: 2px solid transparent;
  ${({ borderColor }) => borderColor && `
    border-color: ${borderColor};
  `};
`

const ShadowWrapper = styled.div<{ color: string }>`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  ${({ color }) => color && `
    border-color: ${color};
    box-shadow: -15px 5px 203px 0 ${transparentize(0.1, color)} inset;
  `};
`

const Image = styled.img`
  position: absolute;
`

const getCardColor = (card: Card, pairs: PairCardType) => {
  const currentPair = pairs[card.rank]

  return currentPair?.color || ''
}

export const GameCard: VFC<CardProps> = ({ card, pairs }) => {
  const pairColor = getCardColor(card, pairs)

  return (
    <CardWrapper
      borderColor={pairColor}
      data-testid="playing-card"
    >
      <ShadowWrapper color={pairColor} />
      <Image
        src={`/assets/playing-cards/${card.rank}${card.suits}.svg`}
        alt={`card ${card.suits} ${card.rank}`}
      />
    </CardWrapper>
  )
}