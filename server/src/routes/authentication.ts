import Server from "../server"
import {Request, Response} from "express";
import {databases} from "../databases";
import User, {UserInterface} from "../models/User";
import {sign, verify, VerifyErrors} from "jsonwebtoken";
import config from "../config";
import {compareSync} from "bcrypt";

export default function initialize(): void {
    Server.addRoute("post", "/login", function (req: Request, res: Response) {
        if (req.body.username && req.body.password) {
            databases.users.findOne({
                username: req.body.username
            }, (err, user: UserInterface) => {
                if (user != undefined && compareSync(req.body.password, user.passwordHash)) {
                    sign({
                        username: user.username,
                        mail: user.mail,
                        id: user.id,
                        firstName: user.firstName,
                        lastName: user.lastName
                    },
                    config.JWT_SALT,
                    {
                        expiresIn: config.JWT_EXPIRATION
                    },
                        (err1, token) => {
                            res.json({
                                token: token
                            })
                    })
                } else {
                    res.sendStatus(403)
                }
            })
        }
    })

    Server.addRoute("post", "/verify", function(req: Request, res: Response) {
        if (req.body.token) {
            verify(req.body.token, config.JWT_SALT, (err: VerifyErrors, decoded: Object | string) => {
                res.json({
                    isValid: decoded != undefined
                })
            })
        } else {
            res.json({
                isValid: false
            })
        }
    })

    Server.addRoute("post", "/register", function (req: Request, res: Response) {
        if (req.body.password === req.body.passwordConfirm && req.body.username) {
            let user = User.create({
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                mail: req.body.mail,
                passwordHash: databases.hash(req.body.password)
            })
            user.save()
            sign({
                username: user.username,
                mail: user.mail,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName
            },
            config.JWT_SALT,
            {
                expiresIn: config.JWT_EXPIRATION
            },
            (err1, token) => {
                res.json({
                    token: token
                })
            })
        } else {
            res.sendStatus(400)
        }
    })
}
