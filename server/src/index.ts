import Server, {server} from './server'
import {Request, Response} from 'express'


import RoutesAuthentication from "./routes/authentication"
import sockets from "./routes/sockets";

RoutesAuthentication()

Server.addRoute("get", "/", function (req: Request, res: Response) {
    res.send("Hello World")
})

sockets()

server.start()

