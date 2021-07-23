import React, { VFC } from 'react'
import styled from 'styled-components'

import { Dropdown } from 'components/Dropdown'
import { deckConfig, playersConfig } from 'constants/constants'

export interface ConfigurationProps {
  players: number
  onPlayersChange: (val: string) => void
  deckSize: number
  onDeckSizeChange: (val: string) => void
}

const ConfigTitle = styled.h4`
  margin-bottom: 1rem;
`

const ConfigurationLabel = styled.span`
  display: inline-block;
  min-width: 20rem;
`

const DropdownWrapper = styled.div`
  margin-bottom: 1rem;
`

export const Configuration: VFC<ConfigurationProps> = ({ players, onPlayersChange, deckSize, onDeckSizeChange }) => {
  return (
    <>
      <ConfigTitle>Current game configuration:</ConfigTitle>
      <DropdownWrapper>
        <ConfigurationLabel>Change number of players:</ConfigurationLabel>
        <Dropdown
          value={String(players)}
          options={playersConfig}
          onChange={onPlayersChange}
        />
      </DropdownWrapper>
      <div>
        <ConfigurationLabel>Change size of the deck:</ConfigurationLabel>
        <Dropdown
          value={String(deckSize)}
          options={deckConfig}
          onChange={onDeckSizeChange}
        />
      </div>
    </>
  )
}