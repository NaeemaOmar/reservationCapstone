import express from 'express'
import bookingsController from '../controller/bookings.js'

const router = express.Router()

router 
    .route('/')
        .get(bookingsController.getAllBookings)
        .post(bookingsController.addABooking)


export default router