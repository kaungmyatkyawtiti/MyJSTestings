import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 4000 })

const clients = [];

wss.on("connection", ws => {
  clients.push(ws);

  ws.on("message", msg => {
    clients.map(client => {
      client.send("" + msg)
    })
  })
})
