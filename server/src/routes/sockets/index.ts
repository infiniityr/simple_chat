import { io } from '../../socket'
import { Socket } from 'socket.io'
import { MessageReceive } from '../../models/interfaces/Message'

export default function () {

    //Global events
    io.on('connection', function(socket: Socket) {
        socket.emit('success', {
            message: 'success logged in!',
            user: socket.request.user
        });

        userSocketId[socket.request.user.username] = socket.id

        socket.on('disconnect', () => {
            delete userSocketId[socket.request.user.username]
        })

        socket.on('send_private_message', (message: MessageReceive) => {
            console.log('SEND_PRIVATE_MESSAGE', message.to)
            if (userSocketId.hasOwnProperty(message.to)) {
                io.to(userSocketId[message.to]).emit('receive_private_message', { message: message.message, from: socket.request.user.username })
                io.to(socket.id).emit('receive_private_message', { message: message.message, from: socket.request.user.username })
            } else {

            }
        })
    })

}

export let userSocketId: { [key: string]: string } = {}