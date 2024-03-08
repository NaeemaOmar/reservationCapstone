import {getbookings} from '../model/database.js'

export default {
    getAllBookings: async(req, res)=>{
        let theBookings = await getbookings()
        res.send(theBookings)
    },
    addASlot: async (req, res)=>{
        console.log('The addBooking fx is working now')
        let {userID, userLanguage, userTime, userService} = req.body
        await addABooking(userID, userLanguage, userTime, userService)
        res.send(await getbookings())
    }
}
