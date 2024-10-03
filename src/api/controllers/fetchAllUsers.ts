import {Request, Response} from 'express'
import { User } from '../../database/userSchema'

export const fetchAllUsers = async (req: Request, res: Response) => {
    console.log('fetch all users called')
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving users', error: err });
    }
}