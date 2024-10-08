import { Request, Response } from 'express'
import { IActivity } from '../../../database/models/activityModel';
import { Activity } from '../../../database/schemas/activitySchema';
import { getRootPath } from '../../middleware/getRootPath';
import path from "path";
import fs from "fs";

export const importActivity = async (req: Request, res: Response) => {

    console.log('entra en importActivity')
    const { fileName } = req.body;
    const toRoot = getRootPath(__dirname)
    const filePath = path.join(toRoot, fileName);


    try {
        const fileContent = fs.readFileSync(filePath, 'utf8')

        const NewActivityData: IActivity = JSON.parse(fileContent)

        const { name, description, maxCapacity } = NewActivityData

        const newActivity = new Activity({
            name: name,
            description: description,
            maxCapacity: maxCapacity,
            participants: []
        })
        const savedActivity = await newActivity.save();
        res.status(201).json(savedActivity)
    } catch (parseError) {
        res.status(500).json({ message: 'Error parsing JSON' });
    }
};