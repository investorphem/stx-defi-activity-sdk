import { request } from "../client/apiClient"

export async function getTransfers() {

  return request("transfers")

}