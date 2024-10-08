import { Request, Response } from 'express'
import { Activity } from '../../../database/schemas/activitySchema'

export const fetchAllActivities = async (_req: Request, res: Response) => {
    try {
        const activities = await Activity.find().populate({ path: 'participants', select: '-activities' })
        res.status(200).json(activities)
    } catch (err) {
        res.status(500).json({ message: 'Error retrieving activity', error: err });
    }
}