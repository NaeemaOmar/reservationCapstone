import {getSlots, getASlot, addASlot, editSlot, deleteSlot} from '../model/database.js'

export default {
    getAllSlots: async(req, res)=>{
        let theSlots = await getSlots()
        res.send(theSlots)
    },
    getASlot: async (req, res)=>{
        let SlotID = req.params.id 
        let theSlot = await getASlot(SlotID)
        res.send(theSlot)
    },
    addASlot: async (req, res)=>{
        console.log('The addSlot fx is working now')
        let {slotID, slotDay, slotMonth} = req.body
        await addASlot(slotID, slotDay, slotMonth)
        res.send(await getSlots())
    },
    editASlot: async (req, res) => {
        let slotID = req.params.id
        let {slotDay, slotMonth} = req.body
        let theEditedSlot = await editSlot(slotID, slotDay, slotMonth)
        res.send(theEditedSlot)
    },
    deleteASlot: async (req, res) => {
        let id = req.params.id
        let deleteNow = await deleteSlot(id)
        res.send(deleteNow)
    }
}
