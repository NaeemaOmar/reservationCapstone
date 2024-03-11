import {getbookings, addABooking, editABooking, deleteABooking, getSingleBooking} from '../model/database.js'

export default {
    getAllBookings: async(req, res)=>{
        let theBookings = await getbookings()
        res.send(theBookings)
    },
    addABooking: async (req, res)=>{
        console.log('The addBooking fx is working now')
        let {userID, userLanguage, userTime, userService} = req.body
        await addABooking(userID, userLanguage, userTime, userService)
        res.send(await getbookings())
    },
    editABooking: async (req, res)=>{
        console.log('The editBooking fx is working now')
        let userID = req.params.id
        let {userLanguage, userTime, userService} = req.body
        await editABooking(userID, userLanguage, userTime, userService)
        res.send(await getSingleBooking(userID))
    },
    deleteABooking: async (req, res)=>{
        console.log('The deleteBooking fx is working now')
        let userID = req.params.id
        await deleteABooking(userID)
        res.send(await getbookings())
    },
    getABooking: async (req, res)=>{
        console.log('The getABooking fx is working now')
        let userID = req.params.id
        let theBooking = await getSingleBooking(userID)
        res.send(theBooking)
    }
}
