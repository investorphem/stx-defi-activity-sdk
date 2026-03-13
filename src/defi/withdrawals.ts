import { request } from "../client/apiClient"

export async function getWithdrawals() {

  return request("withdrawals")

}