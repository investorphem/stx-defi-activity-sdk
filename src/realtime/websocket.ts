import WebSocket from "ws"

export function connectRealtime(callback: (event: any) => void) {

  const ws = new WebSocket("wss://your-defi-api.vercel.app/realtime")

  ws.on("message", (data: WebSocket.RawData) => {

    const event = JSON.parse(data.toString())

    callback(event)

  })

  return ws

}