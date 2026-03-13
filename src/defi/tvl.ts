import { request } from "../client/apiClient"

export async function getTVL(protocol?: string) {

  if (protocol) {
    return request(`tvl/${protocol}`)
  }

  return request("tvl")

}