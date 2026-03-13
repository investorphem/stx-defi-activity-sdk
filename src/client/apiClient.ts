import axios from "axios"

const BASE_URL = "https://your-defi-api.vercel.app/api"

export async function request(endpoint: string) {

  const response = await axios.get(`${BASE_URL}/${endpoint}`)

  return response.data

}