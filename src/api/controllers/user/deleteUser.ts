import {Request, Response} from 'express'
import { User } from '../../../database/userSchema'

export const deleteUser = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const deletedUser = await User.findByIdAndDelete(id)
        if (deletedUser) {
            res.status(200).json({ message: `User deleted succesfuly`, deletedUser})
        }else{
            res.status(404).json({message: 'User not found'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err });
    }
}