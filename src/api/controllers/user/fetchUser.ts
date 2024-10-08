import { Request, Response } from 'express'
import { User } from '../../../database/schemas/userSchema'

export const fetchUser = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const user = await User.findById(id).populate({ path: 'activities', select: '-participants' })
        if (user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: 'User not found' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving user', error: err });
    }
}