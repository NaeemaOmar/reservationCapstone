import {getUsers, getAUser, addAUser, editUser, deleteUser, checkUser} from '../model/database.js'

export default {
    getAllUsers: async(req, res)=>{
        let theUsers = await getUsers()
        res.send(theUsers)
    },
    getAUser: async (req, res)=>{
        let userID = req.params.id 
        let theUser = await getAUser(userID)
        res.send(theUser)
    },
    addAUser: async (req, res)=>{
        console.log('The addUser fx is working now')
        let {userID, firstName, lastName, txtPassword} = req.body
        await addAUser(userID, firstName, lastName, txtPassword)
        res.send(await getUsers())
    },
    editAUser: async (req, res) => {
        let userID = req.params.id
        let {firstName, lastName} = req.body
        let theEditedUser = await editUser(userID, firstName, lastName)
        res.send(theEditedUser)
    },
    deleteAUser: async (req, res) => {
        let id = req.params.id
        let deleteNow = await deleteUser(id)
        res.send(deleteNow)
    },
    checkAUser: async (req, res) => {
        let {userID, txtPassword} = req.body
        let checkNow = await checkUser(userID, txtPassword)
        res.send(checkNow)
    }
}
