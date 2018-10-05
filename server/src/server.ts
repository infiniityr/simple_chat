import {Express, Request, Response} from 'express'
import {Server as HttpServer} from 'http'
import config from './config'
import cors = require('cors')

const express = require('express')

export default class Server {
    readonly port: number
    readonly app: Express
    server!: HttpServer


    constructor(port: number) {
        this.port = port
        this.app = express()
        this.middlewares()
        this.server = new HttpServer(this.app)
    }

    start() {
        this.server.listen(this.port, () => {
            console.log('Listening on port ' + this.port)
        })
    }

    static addRoute(method: string, path: string, callable: (req: Request, res: Response) => void) {

        switch (method.toUpperCase()) {
            case 'GET':
                server.app.get(path, callable)
                break
            case 'POST':
                server.app.post(path, callable)
                break
            case 'PUT':
                server.app.put(path, callable)
                break
            case 'DELETE':
                server.app.delete(path, callable)
                break
            case 'ALL':
                server.app.all(path, callable)
                break
        }

    }

    private middlewares() {

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(cors({
            credentials: true,
            origin: 'http://localhost:8080'
        }))

    }

}

export let server = new Server(config.SERVER_PORT)

