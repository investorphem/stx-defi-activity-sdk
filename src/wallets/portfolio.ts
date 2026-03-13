import { request } from "../client/apiClient"

export async function getWalletPortfolio(address: string) {

  return request(`wallet/${address}`)

}