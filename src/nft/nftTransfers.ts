import { request } from "../client/apiClient"

export async function getNFTTransfers(collection?: string) {

  if (collection) {
    return request(`nft/${collection}`)
  }

  return request("nft/transfers")

}