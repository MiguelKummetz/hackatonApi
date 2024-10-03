import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './database/connection'
import userRoutes from './api/routes/userRoutes'
import activityRoutes from './api/routes/activityRoutes'

dotenv.config()
const connectionString = process.env.DB_URI
connectDB(connectionString!)

//Server
const app = express()
app.use(express.json())

const PORT = process.env.PORT

app.use("/user", userRoutes);
app.use("/activity", activityRoutes)

app.get('/ping', (_req, res) => {
    console.log('someone pinged here!')
    res.send('pong')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})