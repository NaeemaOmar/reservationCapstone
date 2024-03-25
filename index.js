import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import slotRoutes from './routes/slotRoutes.js'
import userRoutes from './routes/userRoutes.js'
import timeRoutes from './routes/timeRoutes.js'
import bookingsRoutes from './routes/bookingsRoutes.js'


config();

const app = express()

// app.use(cors())
// above line is commented out because i can't have 2 cors so keep the one w/ the options

const corsOptions = {
    // Put in the firebase address here so Godwin can access it
    origin: "https://capstone-f71a3.web.app/",
    credentials:true,
    // Please work, amen
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(cookieParser())

app.use(express.static('views'))

app.use('/slots', slotRoutes)
app.use('/users', userRoutes)
app.use('/times', timeRoutes)
app.use('/bookings', bookingsRoutes)


const PORT = process.env.MYSQL_ADDON_PORT;

app.listen(PORT, ()=>{
    console.log(`The backend is running on http://localhost:${PORT}`)
})
