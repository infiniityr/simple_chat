import {Socket} from "socket.io";
import writing from "./writing";
import asRead from "./asRead";
import sending from "./sending";

export default function (socket: Socket) {

    console.log("connected messages")

    socket.on("writing", writing)

    socket.on("as-read", asRead)

    socket.on("sending", sending)


}