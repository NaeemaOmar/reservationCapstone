import express from 'express'
import slotController from '../controller/slot.js'

const router = express.Router()

router 
    .route('/')
        .get(slotController.getAllSlots)
        .post(slotController.addASlot)
        
router 
    .route('/:id')
        .get(slotController.getASlot)
        .patch(slotController.editASlot)
        .delete(slotController.deleteASlot)


export default router