import {Request, Response} from 'express'
import { User } from '../../../database/userSchema'

export const fetchUser = async (req: Request, res: Response) => {
    console.log('fetch user called')
    const {id} = req.params
    try {
        const user = await User.findById(id)
        if (user) {
            res.status(200).json(user)
        }else{
            res.status(404).json({message: 'User not found'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving user', error: err });
    }
}