import configPg from '../config/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const pool = configPg.pool


// slots CRUD fx definitions

let getSlots = async ()=>{
    let [slotsArray] = await pool.query(`
    SELECT * FROM available_slots
    `)
    // console.log(SlotsArray)
    return slotsArray
}
// console.log(await getSlots());

let getASlot = async (id)=>{
    let [slot] = await pool.query(`
    SELECT * from available_slots WHERE slotID = ?
    `, [id])
    return slot
}
// console.log(await getASlot(2));

let addASlot = async (slotName) =>{
    let insertSlot = await pool.query(`
    INSERT INTO available_slots (slotName) VALUES (?)
    `, [slotName]) 
    let [newSlot] = await pool.query(`
    SELECT * FROM available_slots WHERE slotName = ?
    `, [slotName])
    return newSlot
}
// console.log(await addASlot("Phone 2", 2, "28.75", "HuaWei phone", "This is a phone with good quality for its pricepoint", "This is the url"))

// NOTE TO JODIE: 
//      1) This fx needs the Slot name to be unique else it will return
//         >1 item
//      2) All the fields in the "add Slot" modal need a "required" attribute since the columns in the database all have a "NOT NULL" constraint

// PROBLEM: This fx is not dynamic and requires ALL values to be present. This is necessary since the website will look untidy/uneven if there are some elements missing.


let editSlot = async (id, slotName) => {
    if(slotName){
        let editSlotName = await pool.query(`
        UPDATE available_slots SET slotName = ? WHERE slotID = ?
        `, [slotName, id])
    } else {
        console.log("There is no slot name to update")
    }
    // The code below is the ternary operator version of the conditional satatment above.
    // let editQuantity = quantity ? await pool.query(`UPDATE available_slots SET quantity = ? WHERE slotID = ?`, [quantity, id]) : console.log("There is no quantity to be updated")

    let showSlot = await getASlot(id)
    return showSlot
}

// Test 1: does the 'true' condition work
// await editSlot(10, "Testing editSlot() fx", 12, 15.32, "test editSlot() fx", "Let's say this is a url when it's actually a prodDesc", "This actually is a url")

// Test 2: does the 'false' condition work
// await editSlot(10, null, null, null, null, null)

// NOTE TO SELF: The conditional statements of the editSlot() fx work when true and when values are empty/null. The ternary operator work at true and false as well

// NOTE TO JODIE: This function needs a required at the id since it won't work w/out the Slot id.


let deleteSlot = async (id) => {
    let deletedSlot = await getASlot(id)
    let deleteTheSlot = await pool.query(`
    DELETE FROM available_slots WHERE slotID = ?
    `, [id])
    return deletedSlot
}
// console.log(await deleteSlot(13))

// users CRUD fx definitions

let getUsers = async ()=>{
    let [usersArray] = await pool.query(`
    SELECT * FROM users
    `)
    // console.log(usersArray)
    return usersArray
}
// console.log(await getUsers());

let getAUser = async (id)=>{
    let [user] = await pool.query(`
    SELECT * from users WHERE userID = ?
    `, [id])
    return user
}
// console.log(await getAUser(2));

let createHashPassword = async (txtPassword)=>{
    try {
        let hashThePassword = await bcrypt.hash(txtPassword, 10);
        console.log(`This is what the hash method returns: ${hashThePassword}`)
        return hashThePassword
    } 
    catch(error){console.log(`The following error was found using the catch: ${error}`)}
}
 
// console.log(await createHashPassword("Hello kitty"))

let addAUser = async (userID, firstName, lastName, txtPassword) =>{
    let hashedPassword = await createHashPassword(txtPassword);
    console.log(`The addUser uses the following hashedPassword: ${hashedPassword}`)
    let insertUser = await pool.query(`
    INSERT INTO users (userID, firstName, lastName, txtPassword, hashedPassword) VALUES (?, ?, ?, ?, ?)
    `, [userID, firstName, lastName, txtPassword, hashedPassword]) 
    let [newuser] = await pool.query(`
    SELECT * FROM users WHERE userID = ?
    `, [userID])
    return newuser
}
// console.log(await addAUser("4978", "4th test: addUser/hashPassword", "tester", "Password3"))

// NOTE: 
//      1) This fx needs the user name to be unique else it will return
//         >1 item
//      2) All the fields in the "add user" modal need a "required" attribute since the columns in the database all have a "NOT NULL" constraint

// PROBLEM: This fx is not dynamic and requires ALL values to be present. This is necessary since the website will look untidy/uneven if there are some elements missing.


let editUser = async (userID, firstName, lastName) => {
    if(firstName){
        let editfirstName = await pool.query(`
        UPDATE users SET firstName = ?, lastName = ? WHERE userID = ?
        `, [firstName, lastName, userID])
    } else {
        console.log("There is no firstName to update")
    }
    // The code below is the ternary operator version of the conditional satatment above.
    // let editQuantity = quantity ? await pool.query(`UPDATE users SET quantity = ? WHERE userID = ?`, [quantity, id]) : console.log("There is no quantity to be updated")

    let showuser = await getAUser(userID)
    return showuser
}

// Test 1: does the 'true' condition work
// await edituser(10, "Testing edituser() fx", 12, 15.32, "test edituser() fx", "Let's say this is a url when it's actually a prodDesc", "This actually is a url")

// Test 2: does the 'false' condition work
// await edituser(10, null, null, null, null, null)

// NOTE TO SELF: The conditional statements of the edituser() fx work when true and when values are empty/null. The ternary operator work at true and false as well

// NOTE TO JODIE: This function needs a required at the id since it won't work w/out the user id.


let deleteUser = async (id) => {
    let deleteduser = await getAUser(id)
    let deleteTheuser = await pool.query(`
    DELETE FROM users WHERE userID = ?
    `, [id])
    return deleteduser
}
// console.log(await deleteUser(13))

let checkUser = async(id, txtPassword)=>{
    try {
        let [existingUser] = await pool.query(`
        SELECT * FROM users WHERE userID = ?
        `, [id])
        if(existingUser.length>0){
            console.log(`The following id is reg: ${id} `)
            let [[{hashedPassword}]] = await pool.query(`SELECT hashedPassword FROM users WHERE userID =?`, [id])
            let [[firstName]] = await pool.query(`SELECT firstName FROM users WHERE userID =?`, [id])
            let comparePassword = await bcrypt.compare(txtPassword, hashedPassword)
            console.log(`The result of the bcrypt.compare is: ${comparePassword}`)
            if(comparePassword===true){
                let token = jwt.sign(firstName, process.env.SECRET_KEY, {expiresIn: '1h'})
                console.log(`The password is correct and the following token is assigned: token = ${token}`)
                let insertToken = await pool.query(`UPDATE users SET token = ? WHERE userID = ?`, [token, id]);
            }
            return getAUser(id)
        } else{
            console.log(`The following id does not exist in the users database`)
            return "oof"
        }
    } catch(err){
        console.log(`The following error was found while trying to check the user: ${err}`)
    }
}
// Checking correct password
// {"id", "txtPassword"}
// console.log(await checkUser(79352,"HiThere"))
// checking incorrect id
// console.log(await checkUser(47))
// checking correct id but incorrect password
// console.log(await checkUser(79352,"Hi")) 

export {getSlots, getASlot, addASlot, editSlot, deleteSlot, getUsers, getAUser, addAUser, editUser, deleteUser, checkUser}