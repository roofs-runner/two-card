import React, { ChangeEvent, useCallback } from 'react'
import styled from 'styled-components'

type OptionValue = string

interface Option<V extends OptionValue> {
  value: V
  label: string
}

interface DropdownProps<V extends OptionValue> {
  value: string
  options: Option<V>[]
  onChange: (val: string) => void
}

const Select = styled.select`
  padding: .5rem;
  width: 5rem;
  height: 2.4rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`

export const Dropdown = <V extends OptionValue, >({ options, onChange, value }: DropdownProps<V>) => {
  const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
    const val = event.target.value

    onChange(val)
  }, [onChange])

  return (
    <Select value={value} onChange={handleChange} data-testid="dropdown">
      {options.map(option => {
        return (
          <option key={option.value} value={option.value} data-testid="dropdown-item">{option.label}</option>
        )
      })}
    </Select>
  )
}