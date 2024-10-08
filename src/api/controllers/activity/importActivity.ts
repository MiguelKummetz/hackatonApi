import { Request, Response } from 'express'
import { IActivity } from '../../../models/activityModel'; 
import { Activity } from '../../../database/activitySchema';
import fs from "fs";
import path from "path";

export const importActivity = async (req: Request, res: Response) => {
    const fileName = req.body;
    const filePath = path.join(__dirname, fileName);
    
    try {
    const fileContent: string = fs.readFile(filePath, 'utf8', (err) => {
        if (err)
            console.log({ message: "Error during read" });
    }
    const NewActivityData: IActivity = JSON.parse(fileContent)

    const {name, description, maxCapacity} = NewActivityData

        const newActivity = new Activity({
            name: name,
            description: description,
            maxCapacity: maxCapacity,
            participants: []
        })
        const savedActivity = await newActivity.save();
        res.status(201).json(savedActivity)
        res.status(200).json(jsonData);
    } catch (parseError) {
        res.status(500).json({ message: 'Error parsing JSON'});
    }
};
