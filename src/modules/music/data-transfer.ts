import { isNumber } from '@/tools'
import { domain } from '@/net'

import { Sound } from './types'

const createImageUrl = (fileName: string) => `${domain}/image/${fileName}`
const createAudioUrl = (fileName: string) => `${domain}/audio/${fileName}`

export const parseSound = (obj: unknown): Sound | null => {
  if (typeof obj != 'object' || obj === null) {
    return null
  }

  const { id, name, date, image, audio } = obj as Partial<Sound>

  const areTypesCorrect =
    isNumber(id) &&
    isNumber(date) &&
    typeof name == 'string' &&
    typeof image == 'string' &&
    typeof audio == 'string'

  return areTypesCorrect
    ? {
        id,
        name,
        date,
        image: createImageUrl(image),
        audio: createAudioUrl(audio),
        isLoading: false,
      }
    : null
}
