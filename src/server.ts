import express, {Application} from 'express';
import router from './router'

const app: Application = express();

const HOST = '0.0.0.0';
const PORT = 3000;

const getApp = (expressApplication: Application): Application => {
    expressApplication.use('/', router)

    return expressApplication
}

const startServer = (expressApplication: Application): void => {
    const app = getApp(expressApplication)
    try {
        app.listen(PORT, HOST, () => {
            console.log(`server running at http://${HOST}:${PORT}`)
        })
    }
    catch (error) {
        console.log(`Error occured starting server: ${error}`)
    }
}

startServer(app)