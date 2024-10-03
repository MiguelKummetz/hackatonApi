import express from 'express'
import { fetchActivity } from '../controllers/activity/fetchActivity'
import { createActivity } from '../controllers/activity/createActivity'
import { singUpActivity } from '../controllers/activity/singUpActivity'
import { importActivity } from '../controllers/activity/importActivity'
import { exportActivity } from '../controllers/activity/exportActivity'
import { fetchAllActivities } from '../controllers/activity/fetchAllActivities'


const activityRoutes = express.Router()

activityRoutes.get('/all', fetchAllActivities)

activityRoutes.get('/:id', fetchActivity)

activityRoutes.post('/', createActivity)

activityRoutes.put('/:id', singUpActivity)

activityRoutes.post('/', importActivity)

activityRoutes.get('/:id', exportActivity)

export default activityRoutes