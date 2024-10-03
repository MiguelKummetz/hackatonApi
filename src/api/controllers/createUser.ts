import {Request, Response} from 'express'
import { User } from '../../database/userSchema'

export const createUser = async (req: Request, res: Response) => {
    console.log('create user called')
    const newUser = new User({
        name: 'Ami',
        lastname: 'Kummetz',
        age: 30,
        email: 'amimail@gmail.com'
    })
    newUser.save()
    console.log(`user created => ${newUser}`)
}
