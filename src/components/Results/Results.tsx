import React, { VFC }  from 'react'

import { Player } from 'types'

interface ResultsProps {
  winners: Player[]
}

export const Results: VFC<ResultsProps> = ({ winners }) => {
  let message = 'No winner in this round!'

  if (winners.length > 1) {
    message = 'This is a draw!'
  }

  if (winners.length === 1) {
    message = `The winner of the round is ${winners[0].name} ${winners[0].surname} with the score of ${winners[0].pairsNum}`
  }

  return (
    <div>{message}</div>
  )
}
