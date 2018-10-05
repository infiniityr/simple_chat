import {io} from "../../../socket";

export default function () {

    console.log("writing")

    io.emit("is-writing", {
        test: "test"
    })

}