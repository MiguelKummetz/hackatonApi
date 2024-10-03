import express from 'express'
import { createUser } from '../controllers/user/createUser'
import { fetchUser } from '../controllers/user/fetchUser'
import { updateUser } from '../controllers/user/updateUser'
import { deleteUser } from '../controllers/user/deleteUser'
import { fetchAllUsers } from '../controllers/user/fetchAllUsers'


const userRoutes = express.Router()

userRoutes.get('/', fetchAllUsers)

userRoutes.get('/:id', fetchUser)

userRoutes.post('/', createUser)

userRoutes.put('/', updateUser)

userRoutes.delete('/', deleteUser)

export default userRoutes