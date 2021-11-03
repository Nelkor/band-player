export interface Sound {
  id: number
  name: string
  date: number
  image: string
  audio: string
  isLoading: boolean
  blob?: Blob
}

export interface SoundView {
  id: number
  name: string
  date: string
  image: string
  isLoading: boolean
  isLoaded: boolean
}
