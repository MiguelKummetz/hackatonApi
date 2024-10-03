import { model, Schema } from "mongoose";

const userSchema = new Schema({
    name: {type:String, required: true},
    lastname: {type:String, required: true},
    age: {type:Number, required: true},
    email: {type:String, required: true, unique: true}
})

userSchema.set('toJSON', {
    transform: (_document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    } 
})

export const User = model('User', userSchema)