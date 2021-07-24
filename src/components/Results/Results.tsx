import React, { VFC, ReactElement }  from 'react'
import styled from 'styled-components'

import { Player } from 'types'

interface ResultsProps {
  winners: Player[]
}

const Name = styled.span`
  font-weight: 600;
`

const Surname = styled(Name)`
  margin-left: .5rem;
`

export const Results: VFC<ResultsProps> = ({ winners }) => {
  let message: string | ReactElement = 'No winner in this round!'

  if (winners.length > 1) {
    message = 'This is a draw!'
  }

  if (winners.length === 1) {
    const winner = winners[0]
    message = <span data-testid="winner-message">
      The winner is <Name>{winner.name}</Name>
      <Surname>{winner.surname}</Surname> with the score of {winner.pairsNum}</span>
  }

  return (
    <>
      <h3>Here are the results of the round!</h3>
      <div>{message}</div>
    </>
  )
}
