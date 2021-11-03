export const filterBoolean = <T>(
  arr: (T | null | false | undefined | '' | 0)[]
): T[] => arr.filter(Boolean) as T[]

export const isNumber = (value: unknown): value is number =>
  Number.isFinite(value)

export const preloadImage = (src: string): Promise<void> =>
  new Promise((resolve, reject) => {
    const image = new Image()

    image.onload = resolve as () => void
    image.onerror = reject
    image.src = src
  })

export const formatDate = (date: number): string => {
  const ymd = date.toString()

  if (ymd.length != 8 && ymd.length != 6 && ymd.length != 4) {
    return ''
  }

  const year = ymd.slice(0, 4)
  const month = ymd.slice(4, 6)
  const day = ymd.slice(6, 8)
  const parts = [year, month, day].filter(Boolean)

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
  }

  if (parts.length > 1) {
    options.month = 'long'
  }

  if (parts.length > 2) {
    options.day = 'numeric'
  }

  return new Intl.DateTimeFormat(navigator.language, options).format(
    new Date(parts.join('-'))
  )
}
