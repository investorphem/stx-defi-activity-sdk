import { request } from "../client/apiClient"

export async function getVolume() {

  return request("volume")

}