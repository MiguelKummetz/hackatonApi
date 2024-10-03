import { model, Schema } from "mongoose";

export const userSchema = new Schema({
    name: String,
    lastname: String,
    age: Number,
    email: String
})

export const User = model('User', userSchema)