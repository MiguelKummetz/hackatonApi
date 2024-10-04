import {Request, Response} from 'express'
import { Activity } from '../../../database/activitySchema'

export const fetchActivity = async (req: Request, res: Response) => {
    const {id} = req.params
    try {
        const activity = await Activity.findById(id).populate({path:'participants', select:'-activities'})
        if (activity) {
            res.status(200).json(activity)
        }else{
            res.status(404).json({message: 'Activity not found'})
        }
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving activity', error: err });
    }
}