import {Request, Response} from 'express'
import { Activity } from '../../../database/activitySchema'

export const singUpActivity = async (req: Request, res: Response) => {
    const {id} = req.params

    const userId = req.body.userId

    try {
        const updatedActivity = await Activity.findByIdAndUpdate(
            id, 
            { $addToSet: { participants: userId } }, 
            { new: true, runValidators: true });
        if (updatedActivity){
            res.status(200).json(updatedActivity);
        }else{
            res.status(404).json({message: 'Activity not found'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving activity', error: err });
    }
}