import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import slotRoutes from './routes/slotRoutes.js'
import userRoutes from './routes/userRoutes.js'
import timeRoutes from './routes/timeRoutes.js'


config();

const app = express()

app.use(cors())

const corsOptions = {
    // origin: "https://technoflexzone-9e840.web.app",
    // Put in the firebase address here so Godwin can access it
    origin: "http://localhost:3336/",
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

app.use(express.static('views'))

app.use('/slots', slotRoutes)
app.use('/users', userRoutes)
app.use('/times', timeRoutes)


const PORT = process.env.MYSQL_ADDON_PORT;

app.listen(PORT, ()=>{
    console.log(`The backend is running on http://localhost:${PORT}`)
})
