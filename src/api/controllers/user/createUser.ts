import {Request, Response} from 'express'
import { User } from '../../../database/userSchema'

export const createUser = async (req: Request, res: Response) => {
    //falta implementar un mensaje si el email ya existe
    const {name, lastname, age, email} = req.body;
    try {
        const newUser = new User({
            name: name,
            lastname: lastname,
            age: age,
            email: email
        })
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err });
    }
}
