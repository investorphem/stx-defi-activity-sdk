import WebSocket from "ws"

export function connectRealtime(callback: Function) {

  const ws = new WebSocket("wss://your-defi-api.vercel.app/realtime")

  ws.on("message", (data) => {

    const event = JSON.parse(data.toString())

    callback(event)

  })

  return ws

}