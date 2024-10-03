import express from 'express'
import { fetchUser } from '../controllers/fetchUser'
import { registerUser } from '../controllers/registerUser'
import { updateUser } from '../controllers/updateUser'
import { deleteUser } from '../controllers/deleteUser'


const userRoutes = express.Router()

userRoutes.get('/', fetchUser)

userRoutes.post('/', registerUser)

userRoutes.put('/', updateUser)

userRoutes.delete('/', deleteUser)

export default userRoutes