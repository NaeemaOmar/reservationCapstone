import express from 'express'
import timeController from '../controller/time.js'

const router = express.Router()

router 
    .route('/')
        .get(timeController.getAlltimes)
        .post(timeController.addAtime)
        
router 
    .route('/:id')
        .get(timeController.getAtime)
        .patch(timeController.editAtime)
        .delete(timeController.deleteAtime)


export default router