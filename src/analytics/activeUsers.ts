import { request } from "../client/apiClient"

export async function getActiveUsers() {

  return request("users/active")

}