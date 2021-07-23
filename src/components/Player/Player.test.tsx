import React from 'react'
import { render, screen } from '@testing-library/react'

import { player } from 'mocks/mocks'

import { GamePlayer } from './Player'

test('renders Player component on mount', () => {
  render(<GamePlayer player={player} />)

  expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
  //renders card container for the current user
  expect(screen.queryAllByTestId('cards-wrapper')).toHaveLength(1)
  //renders cards elements in the container
  expect(screen.queryAllByTestId('playing-card')).toHaveLength(7)
})