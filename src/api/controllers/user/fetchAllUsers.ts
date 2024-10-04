import {Request, Response} from 'express'
import { User } from '../../../database/userSchema'

export const fetchAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find().populate({path:'activities', select:'-participants'})
        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving users', error: err });
    }
}