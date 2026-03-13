import { request } from "../client/apiClient"

export async function getProtocolRanking() {

  return request("protocols/ranking")

}