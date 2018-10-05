import {Socket} from "socket.io";
import {databases} from "../databases";

declare module "socket.io" {
    interface Socket {
        token: Token | Object | string | any
    }

    interface Token {
        username: string,
        mail?: string,
        id: string,
        firstName?: string,
        lastName?: string
    }
}
