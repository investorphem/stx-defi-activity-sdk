import { request } from "../client/apiClient"

export async function getDeposits() {

  return request("deposits")

}