import express from 'express'
import {config} from 'dotenv'
import cors from 'cors'
import cookie from 'cookie-parser'
import slotRoutes from './routes/slotRoutes.js'
import userRoutes from './routes/userRoutes.js'
import timeRoutes from './routes/timeRoutes.js'
import bookingsRoutes from './routes/bookingsRoutes.js'


config();

const app = express()

app.use(cors())

const corsOptions = {
    // Put in the firebase address here so Godwin can access it
    origin: "http://localhost:8080",
    // Please work, amen
    optionsSuccessStatus:200
}

app.use(cors(corsOptions))

app.use(express.json())
app.use(cookie())

app.use(express.static('views'))

app.use('/slots', slotRoutes)
app.use('/users', userRoutes)
app.use('/times', timeRoutes)
app.use('/bookings', bookingsRoutes)


const PORT = process.env.MYSQL_ADDON_PORT;

app.listen(PORT, ()=>{
    console.log(`The backend is running on http://localhost:${PORT}`)
})
