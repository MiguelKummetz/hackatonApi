import express from 'express'
import { fetchActivity } from '../controllers/activity/fetchActivity'
import { createActivity } from '../controllers/activity/createActivity'
import { singUpActivity } from '../controllers/activity/singUpActivity'
import { importActivity } from '../controllers/activity/importActivity'
import { exportActivity } from '../controllers/activity/exportActivity'


const activityRoutes = express.Router()

activityRoutes.get('/', fetchActivity)

activityRoutes.post('/', createActivity)

activityRoutes.put('/', singUpActivity)

activityRoutes.post('/', importActivity)

activityRoutes.get('/', exportActivity)

export default activityRoutes