import {Request, Response} from 'express'
import { Activity } from '../../../database/activitySchema'
import { User } from '../../../database/userSchema'

export const singUpActivity = async (req: Request, res: Response) => {

    const activityId = req.params.id
    const userId = req.body.userId

    try {
        const updatedActivity = await Activity.findByIdAndUpdate(
            activityId, 
            { $addToSet: { participants: userId } }, 
            { new: true, runValidators: true });
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { $addToSet: { activities: activityId } }, 
            { new: true, runValidators: true });

        if (!updatedActivity){
            res.status(404).json({message: 'Activity not found'});
        }else if(!updatedUser){
            res.status(404).json({message: 'User not found'});
        }else{
            res.status(200).json(updatedActivity);
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving activity', error: err });
    }
}