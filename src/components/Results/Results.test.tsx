import React from 'react'
import { render, screen } from '@testing-library/react'

import { Player } from 'types'
import { playersMock, player } from 'mocks/mocks'

import { Results } from './Results'

test('render Results component on mount and there are no winners', () => {
  setupComponent([])

  expect(screen.getByText('No winner in this round!')).toBeInTheDocument()
})

test('renders component with winner info', () => {
  setupComponent([player])

  expect(screen.getByTestId('winner-message')).toBeInTheDocument()
})

test('renders component with a draw info', () => {
  setupComponent(playersMock)

  expect(screen.getByText('This is a draw!')).toBeInTheDocument()
})

function setupComponent(winners: Player[]) {
  render(<Results winners={winners} />)
}