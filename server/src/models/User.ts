import {databases} from "../databases";

export interface UserInterface {
    id?: string
    mail: string
    username: string
    passwordHash: string
    password?: string
    firstName: string
    lastName: string
}

export default class User implements UserInterface {
    id?: string
    mail!: string
    username!: string
    passwordHash!: string
    firstName!: string
    lastName!: string
    password!: string

    static create(obj: UserInterface): User {
        let user = new User()
        user.mail = obj.mail
        user.username = obj.username
        user.firstName = obj.firstName
        user.lastName = obj.lastName
        if (obj.id != undefined) {
            user.id = obj.id
        }
        if (obj.passwordHash != undefined) {
            user.passwordHash = obj.passwordHash
        }
        if (obj.password != undefined) {
            user.password = obj.password
        }
        return user
    }

    save(): void {
        if (this.id == undefined) {
            databases.users.insert({
                mail: this.mail,
                username: this.username,
                firstName: this.firstName,
                lastName: this.lastName,
                passwordHash: this.passwordHash?this.passwordHash:databases.hash(this.password)
            }, (err: Error, user: UserInterface) => {
                this.id = user.id
            })
        } else {
            databases.users.update({_id: this.id}, {
                mail: this.mail,
                username: this.username,
                firstName: this.firstName,
                lastName: this.lastName
            })
        }
    }
}