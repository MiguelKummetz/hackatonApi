import { model, Schema } from "mongoose";

export const userSchema = new Schema({
    name: {type:String, required: true},
    lastname: {type:String, required: true},
    age: {type:Number, required: true},
    email: {type:String, required: true, unique: true}
})

export const User = model('User', userSchema)