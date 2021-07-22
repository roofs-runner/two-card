import { Ranks } from 'types'

export function isOfPairCardType(rank: string): rank is Ranks {
  return Object.values(Ranks).includes(rank as Ranks)
}
