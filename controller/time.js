import {getTimes, getAtime, addAtime, editTime, deleteTime} from '../model/database.js'

export default {
    getAlltimes: async(req, res)=>{
        let thetimes = await getTimes()
        res.send(thetimes)
    },
    getAtime: async (req, res)=>{
        let timeID = req.params.id 
        let thetime = await getAtime(timeID)
        res.send(thetime)
    },
    addAtime: async (req, res)=>{
        console.log('The addtime fx is working now')
        let {timeID, time, timeLength} = req.body
        await addAtime(timeID, time, timeLength)
        res.send(await getTimes())
    },
    editAtime: async (req, res) => {
        let timeID = req.params.id
        let {time, timeLength} = req.body
        let theEditedtime = await editTime(timeID, time, timeLength)
        res.send(theEditedtime)
    },
    deleteAtime: async (req, res) => {
        let id = req.params.id
        let deleteNow = await deleteTime(id)
        res.send(deleteNow)
    }
}
