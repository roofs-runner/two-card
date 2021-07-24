import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

import { Desk } from './Desk'

test('renders component on mount with no cards', () => {
  prepareDesk()

  const cardsWrapper = getCardsWrapper()
  expect(screen.getByText('Players at the table:')).toBeInTheDocument()
  expect(cardsWrapper.length).toBe(0)
})

test('generates cards for players on button click', () => {
  prepareDesk()

  const dealCardsButton = getDealsCardsButton()
  expect(dealCardsButton).toBeInTheDocument()
  fireEvent.click(dealCardsButton)

  const cardsWrapper = getCardsWrapper()
  const cards = getCards()
  // meaning two players are at the table
  expect(cardsWrapper.length).toBe(2)
  // meaning two players have 7 cards each
  expect(cards.length).toBe(14)
})

test('generates additional players and cards for them on configuration change', () => {
  prepareDesk()

  const dropdownEl = getDropdowns()
  expect(dropdownEl.length).toBe(2)

  // change number of players in the dropdown
  fireEvent.change(dropdownEl[0], {
    target: { value: '3' }
  })
  const dealCardsButton = getDealsCardsButton()
  fireEvent.click(dealCardsButton)
  const cardsWrapper = getCardsWrapper()
  const cards = getCards()

  // meaning three players are at the table
  expect(cardsWrapper.length).toBe(3)
  // meaning three players have 7 cards each
  expect(cards.length).toBe(21)
})

test('resets players on deck size change', () => {
  prepareDesk()

  // first deal cards to get players
  const dealCardsButton = getDealsCardsButton()
  fireEvent.click(dealCardsButton)
  let cardsWrapper = getCardsWrapper()
  // meaning two players are at the table
  expect(cardsWrapper.length).toBe(2)

  const dropdownEl = getDropdowns()
  // change deck size in the dropdown
  fireEvent.change(dropdownEl[1], {
    target: { value: '36' }
  })
  cardsWrapper = getCardsWrapper()
  // game is reset, so no players have no cards
  expect(cardsWrapper.length).toBe(0)
})

function prepareDesk() {
  render(<Desk />)
}

function getDealsCardsButton() {
  return screen.getByText('Deal Cards')
}

function getCardsWrapper() {
  return screen.queryAllByTestId('cards-wrapper')
}

function getCards() {
  return screen.queryAllByTestId('playing-card')
}

function getDropdowns() {
  return screen.getAllByTestId('dropdown')
}


