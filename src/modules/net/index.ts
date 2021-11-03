import { ResponseJson } from '@/net/types'

export const domain = 'http://localhost:8841'

export const get = async (handler: string): Promise<unknown> => {
  const res = await fetch(`${domain}/${handler}`)
  const json: ResponseJson = await res.json()

  if (!json.ok) {
    throw new Error(`get-request has failed: ${json.reason}`)
  }

  return json.result
}
