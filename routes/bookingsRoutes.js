import express from 'express'
import bookingsController from '../controller/bookings.js'

const router = express.Router()

router 
    .route('/')
        .get(bookingsController.getAllBookings)
        .post(bookingsController.addABooking)
        
router 
    .route('/:id')
        .get(bookingsController.getABooking)
        .patch(bookingsController.editABooking)
        .delete(bookingsController.deleteABooking)


export default router