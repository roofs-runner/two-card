import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { Dropdown } from './Dropdown'

const optionsMock = [
  {
    value: 'apple',
    label: 'Apple'
  },
  {
    value: 'pear',
    label: 'Pear'
  }
]

test('renders Dropdown component on mount', () => {
  const { getByTestId, getAllByTestId } = render(
    <Dropdown options={optionsMock} value={'Apple'} onChange={jest.fn} />
  )

  const dropdownOptions = getAllByTestId('dropdown-item')

  expect(getByTestId('dropdown')).toBeInTheDocument()
  expect(dropdownOptions).toHaveLength(2)
  expect(dropdownOptions[0]).toHaveTextContent('Apple')
})

test('calls Dropdown change callback', () => {
  const changeCb = jest.fn()
  const { getByTestId } = render(
    <Dropdown options={optionsMock} value={'Apple'} onChange={changeCb} />
  )

  const dropdownEl = getByTestId('dropdown')
  fireEvent.change(dropdownEl, {
    target: { value: 'pear' }
  })

  expect(changeCb).toHaveBeenCalledWith('pear')
})