import express from 'express'
import { createUser } from '../controllers/user/createUser'
import { fetchUser } from '../controllers/user/fetchUser'
import { updateUser } from '../controllers/user/updateUser'
import { deleteUser } from '../controllers/user/deleteUser'
import { fetchAllUsers } from '../controllers/user/fetchAllUsers'


const userRoutes = express.Router()

userRoutes.get('/all', fetchAllUsers)

userRoutes.get('/:id', fetchUser)

userRoutes.post('/', createUser)

userRoutes.put('/:id', updateUser)

userRoutes.delete('/:id', deleteUser)

export default userRoutes