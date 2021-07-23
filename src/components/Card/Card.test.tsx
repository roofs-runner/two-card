import React from 'react'
import { render } from '@testing-library/react'

import { cardsMock, cardsPairs3 } from 'mocks/mocks'

import { GameCard } from './Card'

test('renders Player component on mount', () => {
  const { queryAllByTestId, getByAltText } = render(<GameCard card={cardsMock[0]} pairs={cardsPairs3} />)

  //renders cards elements in the container
  expect(queryAllByTestId('playing-card')).toHaveLength(1)
  // make sure specific card exists by its alt message
  expect(getByAltText('card hearts 2')).toBeInTheDocument()
})
