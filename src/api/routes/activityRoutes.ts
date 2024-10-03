import express from 'express'
import { fetchActivity } from '../controllers/fetchActivity'
import { createActivity } from '../controllers/createActivity'
import { singUpActivity } from '../controllers/singUpActivity'
import { importActivity } from '../controllers/importActivity'
import { exportActivity } from '../controllers/exportActivity'


const activityRoutes = express.Router()

activityRoutes.get('/', fetchActivity)

activityRoutes.post('/', createActivity)

activityRoutes.put('/', singUpActivity)

activityRoutes.post('/', importActivity)

activityRoutes.get('/', exportActivity)

export default activityRoutes