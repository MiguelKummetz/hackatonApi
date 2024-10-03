import {Request, Response} from 'express'
import { User } from '../../../database/userSchema'

export const updateUser = async (req: Request, res: Response) => {
    console.log('update user called')
    const {id} = req.params
    const updatedData = req.body
    try {
        const updatedUser = await User.findByIdAndUpdate(id, updatedData)
        if (updatedUser){
            res.status(200).json(updatedUser);
        }else{
            res.status(404).json({message: 'User not found'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving users', error: err });
    }
}