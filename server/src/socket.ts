import * as SocketIo from 'socket.io'
import {server} from './server'
import jwtAuth from './middlewares/authentication.socket'

export default class Socket {

    readonly io: SocketIo.Server

    constructor () {

        this.io = SocketIo(server.server)

        this.middlewares()

    }

    middlewares () {

        this.io.use(jwtAuth)

    }

}

export let socket = new Socket()

export let io = socket.io