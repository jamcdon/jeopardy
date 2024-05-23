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

interface ExtWebSocket extends WebSocket {
	isAlive: boolean;
};

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
        const extWs = ws as ExtWebSocket;
        extWs.isAlive = true;
        ws.on('message', (msg: string) => {
            const message = JSON.parse(msg) as Message

            wss.clients.forEach(client => {
                if (client != ws){
                    client.send(
                        JSON.stringify(message)
                    )
                }
            })
        });
        ws.on('pong', () => {
            extWs.isAlive = true;
        });
    });

    setInterval(() => {
        wss.clients.forEach((ws) => {
            const extWs = ws as ExtWebSocket;

            if (!extWs.isAlive) return ws.terminate()
            extWs.isAlive = false;
            ws.ping(null, undefined)
        });
    }, 10000)

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