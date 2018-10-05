import {verify, VerifyErrors} from 'jsonwebtoken'
import config from '../config'
import {Socket} from 'socket.io'
import * as jwtAuth from 'socketio-jwt-auth'
import {databases} from '../databases'
import {UserInterface} from '../models/User'

export function verifyToken(socket: Socket, next: any) {

    if (socket.handshake.query && socket.handshake.query.token) {
        verify(socket.handshake.query.token, config.JWT_SALT, (err: VerifyErrors, decoded: Object | string) => {
            if (err) return next(new Error('Authentication Error'))
            else {
                console.log(decoded)
                socket.token = decoded
                next()
            }
        })

    } else {
        next(new Error('Authentication Error'))
    }

}

export default jwtAuth.authenticate({
    secret: config.JWT_SALT
}, (payload, done) => {
    databases.users.findOne({ username: payload.username }, (err: Error, user: UserInterface) => {
        if (err) {
            return done(err)
        }
        if (!user) {
            return done(null, false, 'user does not exist')
        }
        return done(null, payload)
    })
})

