import { Request, Response } from "express";
import fs from "fs";
import { Activity } from "../../../database/activitySchema";
import path from "path";

export const exportActivity = async (req: Request, res: Response) => {
  const { id } = req.params;
  const fileName = req.body.name;
  try {
    const data = await Activity.findById(id).populate({
      path: "participants",
      select: "-activities",
    });
    const filePath = path.join(__dirname, fileName.replace(/\s+/g, ""));
    const jsonData = JSON.stringify(data, null, 2);

    fs.writeFile(filePath + ".json", jsonData, (err) => {
      if (err)
        console.log({ message: "Error during write" });
    });
    res.status(201).json({ message: "File created succesfuly", filePath });
  } catch (err) {
    res.status(500).json({ message: "Error exporting activity", error: err });
  }
};
