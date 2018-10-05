import * as dotenv from "dotenv"

dotenv.config()

export default {
    SERVER_PORT: process.env.SERVER_PORT?parseInt(process.env.SERVER_PORT):8080,
    BCRYPT_SALT: process.env.BCRYPT_SALT?parseInt(process.env.BCRYPT_SALT):10,
    DATABASE_FOLDER: process.env.DATABASE_FOLDER?process.env.DATABASE_FOLDER:"./databases/",


    JWT_SALT: process.env.JWT_SALT?process.env.JWT_SALT:"webToken",
    JWT_EXPIRATION: process.env.JWT_EXPIRATION?process.env.JWT_EXPIRATION:"1h"
}
