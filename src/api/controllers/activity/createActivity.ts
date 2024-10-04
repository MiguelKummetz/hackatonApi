import {Request, Response} from 'express'
import { Activity } from '../../../database/activitySchema';

export const createActivity = async (req: Request, res: Response) => {
    const {name, description, maxCapacity} = req.body;
    try {
        const newActivity = new Activity({
            name: name,
            description: description,
            maxCapacity: maxCapacity,
            participants: []
        })
        const savedActivity = await newActivity.save();
        res.status(201).json(savedActivity)
    } catch (err) {
        res.status(500).json({ message: 'Error creating activity', error: err });
    }
}