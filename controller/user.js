import {getUsers, getAUser, addAUser, editUser, deleteUser} from '../model/database.js'
import configPg from '../config/config.js'
const pool = configPg.pool
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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
        let checkUser = async(userID, txtPassword)=>{
            try {
                let [existingUser] = await pool.query(`
                SELECT * FROM users WHERE userID = ?
                `, [userID])
                if(existingUser.length>0){
                    console.log(`The following id is reg: ${userID} `)
                    let [[{hashedPassword}]] = await pool.query(`SELECT hashedPassword FROM users WHERE userID =?`, [userID])
                    let [[firstName]] = await pool.query(`SELECT firstName FROM users WHERE userID =?`, [userID])
                    let comparePassword = await bcrypt.compare(txtPassword, hashedPassword)
                    console.log(`The result of the bcrypt.compare is: ${comparePassword}`)
                    if(comparePassword===true){
                        let token = jwt.sign(firstName, process.env.SECRET_KEY, {expiresIn: '1h'})
                        console.log(`The password is correct and the following token is assigned: token = ${token}`)
                        let insertToken = await pool.query(`UPDATE users SET token = ? WHERE userID = ?`, [token, userID]);
                        console.log("the token has been assigned. attempting to set to cookie. WISH ME LUCK")
                        // res.cookie('token', token,{httpOnly:false}).sendStatus(200);
                        res.cookie('token', token,{httpOnly:false});
                        let worked = true;
                        res.send(worked)
                    } else {
                        // return getAUser(userID)
                        let worked = false;
                        res.send(worked)
                    }
                } else{
                    console.log(`The following id does not exist in the users database: ${userID}`)
                    let worked = false;
                    res.send(worked)
                }
            } catch(err){
                console.log(`The following error was found while trying to check the user in the controller: ${err}`)
            }
        }
        let checkNow = await checkUser(userID, txtPassword)
        res.send(checkNow)
    }
}
