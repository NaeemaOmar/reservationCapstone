import express from 'express'
import userController from '../controller/user.js'

const router = express.Router()

router 
    .route('/')
        .get(userController.getAllUsers)
        .post(userController.addAUser)
        
router 
    .route('/:id')
        .get(userController.getAUser)
        .patch(userController.editAUser)
        .delete(userController.deleteAUser)

router 
    .route('/login')
        .post(userController.checkAUser)

export default router