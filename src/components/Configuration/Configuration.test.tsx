import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { Configuration } from './Configuration'

test('render Configuration component on mount', () => {
  const { getByText } = render(
    <Configuration players={2} deckSize={52} onPlayersChange={jest.fn} onDeckSizeChange={jest.fn}/>
  )

  expect(getByText('Change size of the deck:')).toBeInTheDocument()
  expect(getByText('Change number of players:')).toBeInTheDocument()
})

test('calls players number callback with a new param', () => {
  const changePlayersNumCb = jest.fn()
  render(
    <Configuration players={2} deckSize={52} onPlayersChange={changePlayersNumCb} onDeckSizeChange={jest.fn}/>
  )

  const dropdownEl = getDropdowns()
  fireEvent.change(dropdownEl[0], {
    target: { value: '3' }
  })

  expect(changePlayersNumCb).toHaveBeenCalledWith('3')
})

test('calls deck size callback with a new param', () => {
  const changeDeckSizeCb = jest.fn()
  render(
    <Configuration players={2} deckSize={52} onPlayersChange={jest.fn} onDeckSizeChange={changeDeckSizeCb}/>
  )

  const dropdownEl = getDropdowns()
  fireEvent.change(dropdownEl[1], {
    target: { value: '36' }
  })

  expect(changeDeckSizeCb).toHaveBeenCalledWith('36')
})

function getDropdowns() {
  return screen.getAllByTestId('dropdown')
}