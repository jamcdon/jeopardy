import express, {Application} from 'express';
import * as WebSocket from 'ws';
import * as http from 'http'
import router from './router'

class Message {
    constructor(
        public client: string,
        public content: string,
        public data: string
    ) { }
}

const app: Application = express();

const HOST = '0.0.0.0';
const PORT = 3000;

const getApp = (expressApplication: Application): Application => {
    expressApplication.use('/', router)

    return expressApplication
}

const startServer = (expressApplication: Application): void => {
    const app = getApp(expressApplication)
    const server = http.createServer(app)
    const wss = new WebSocket.Server({server})
    wss.on('connection', (ws) =>{
        ws.on('message', (msg: string) => {
            const message = JSON.parse(msg) as Message

            wss.clients.forEach(client => {
                if (client != ws){
                    client.send(
                        JSON.stringify(message)
                    )
                }
            })
        })
    })

    try {
        server.listen(PORT, HOST, () => {
            console.log(`server running at http://${HOST}:${PORT}`)
        })
    }
    catch (error) {
        console.log(`Error occured starting server: ${error}`)
    }
}

startServer(app)