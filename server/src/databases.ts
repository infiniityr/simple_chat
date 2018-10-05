import Nedb = require("nedb");
import {hashSync} from "bcrypt";
import config from "./config";

export let databases_name = {
    users: "users.db"
}

export default class Databases {

    users: Nedb

    constructor() {
        this.users = new Nedb({
            filename: config.DATABASE_FOLDER + databases_name.users,
            autoload: true
        })
    }

    hash(text: string): string {
        return hashSync(text, config.BCRYPT_SALT)
    }
}

export let databases = new Databases()