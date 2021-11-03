import { get } from '@/net'
import { filterBoolean } from '@/tools'

import { Sound } from './types'
import { parseSound } from './data-transfer'

export const getSounds = async (): Promise<Sound[]> => {
  const maybeSounds = await get('sounds')

  if (!Array.isArray(maybeSounds)) {
    throw new Error('sounds is not an array')
  }

  return filterBoolean(maybeSounds.map(parseSound))
}
