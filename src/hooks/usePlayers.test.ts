import { renderHook, cleanup, RenderHookResult } from '@testing-library/react-hooks'

import { mockCards, playersMock3 } from 'mocks/mocks'

import { usePlayers } from './usePlayers'

jest.mock('modules/core', () => ({
  ...jest.requireActual('modules/core'),
  generatePlayerCards: () => mockCards
}))

const initialHookParams = {
  playersNum: 2,
  withCards: false,
  deckSize: 52,
  currPlayers: [],
  setPlayers: jest.fn()
}

describe('usePlayers', () => {
  let hook: RenderHookResult<any, any>

  afterAll(() => {
    jest.clearAllMocks()
  })

  afterEach(() => {
    cleanup()
  })

  describe('hook', () => {
    beforeEach(() => {
      hook = renderHook(() => {
        return usePlayers({ ...initialHookParams })
      })
    })

    it('returns initial players without cards', () => {
      expect(hook.result.current.generatedPlayers).toHaveLength(2)
      expect(hook.result.current.generatedPlayers[0].cards).toHaveLength(0)
    })

    describe('when games starts', () => {
      beforeEach(() => {
        hook = renderHook(() => {
          return usePlayers({
            ...initialHookParams,
            withCards: true,
            currPlayers: playersMock3
          })
        })
      })

      it('returns players with cards and calculates winners', () => {
        expect(hook.result.current.generatedPlayers).toHaveLength(2)
        expect(hook.result.current.generatedPlayers[0].name).toEqual('Ron')
        expect(hook.result.current.generatedPlayers[0].surname).toEqual('Weasley')
        expect(hook.result.current.generatedPlayers[0].cards).toHaveLength(7)
        expect(hook.result.current.winners).toHaveLength(2)
        expect(hook.result.current.winners).toStrictEqual(playersMock3)
      })
    })
  })
})
