import { model, Schema } from "mongoose";

const activitySchema = new Schema({
    name: {type:String, required: true, unique: true},
    description: {type:String, required: true},
    maxCapacity: {type:Number, required: true},
})

activitySchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    } 
})

export const Activity = model('Activity', activitySchema)