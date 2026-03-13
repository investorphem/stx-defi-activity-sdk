import { request } from "../client/apiClient"

export async function getWhaleAlerts(threshold = 100000) {

  return request(`whales?threshold=${threshold}`)

}