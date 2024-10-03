import express from 'express'
import { createUser } from '../controllers/createUser'
import { fetchUser } from '../controllers/fetchUser'
import { updateUser } from '../controllers/updateUser'
import { deleteUser } from '../controllers/deleteUser'
import { fetchAllUsers } from '../controllers/fetchAllUsers'


const userRoutes = express.Router()

userRoutes.get('/', fetchAllUsers)

userRoutes.get('/:id', fetchUser)

userRoutes.post('/', createUser)

userRoutes.put('/', updateUser)

userRoutes.delete('/', deleteUser)

export default userRoutes