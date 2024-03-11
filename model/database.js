import configPg from '../config/config.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const pool = configPg.pool


// slots CRUD fx definitions

let getSlots = async ()=>{
    let [slotsArray] = await pool.query(`
    SELECT * FROM available_slots_April
    `)
    // console.log(SlotsArray)
    return slotsArray
}
// console.log(await getSlots());

let getASlot = async (id)=>{
    let [slot] = await pool.query(`
    SELECT * from available_slots_April WHERE slotID = ?
    `, [id])
    return slot
}
// console.log(await getASlot(8));

let addASlot = async (slotID, slotDay, slotDate) =>{
    let insertSlot = await pool.query(`
    INSERT INTO available_slots_April (slotID, slotDay, slotDate) VALUES (?, ?, ?)
    `, [slotID, slotDay, slotDate]) 
    let [newSlot] = await pool.query(`
    SELECT * FROM available_slots_April WHERE slotID = ?
    `, [slotID])
    return newSlot
}
// console.log(await addASlot("10", "wednesday", "20240410"))

// NOTE: 
//      1) This fx needs the Slot name to be unique else it will return
//         >1 item
//      2) All the fields in the "add Slot" modal need a "required" attribute since the columns in the database all have a "NOT NULL" constraint

// PROBLEM: This fx is not dynamic and requires ALL values to be present. This is necessary since the website will look untidy/uneven if there are some elements missing.


let editSlot = async (slotID, slotDay, slotDate) => {
    if(slotDay){
        let editSlotDay = await pool.query(`
        UPDATE available_slots_April SET slotDay = ? WHERE slotID = ?
        `, [slotDay, slotID])
    }
    if(slotDate){
        let editSlotDate = await pool.query(`
        UPDATE available_slots_April SET slotDate = ? WHERE slotID = ?
        `, [slotDate, slotID])
    } else {
        console.log("There are no slot details to update")
    }
    // The code below is the ternary operator version of the conditional satatment above.
    // let editQuantity = quantity ? await pool.query(`UPDATE available_slots_April SET quantity = ? WHERE slotID = ?`, [quantity, id]) : console.log("There is no quantity to be updated")

    let showSlot = await getASlot(slotID)
    return showSlot
}

// Test 1: does the 'true' condition work
// console.log(await editSlot(9, "Friday", 20240302))

// Test 2: does the 'false' condition work
// console.log(await editSlot(10, null, null))

// Test 3: does partial edit work
// console.log(await editSlot(9, "tuesday", null))
// console.log(await editSlot(9, null, 20240409))
// NOTE: by test 3, the else statement will run if even 1 item is lacking hence the ternary operator would be better


// NOTE: This function needs a required at the id since it won't work w/out the Slot id.


let deleteSlot = async (id) => {
    let deletedSlot = await getASlot(id)
    let deleteTheSlot = await pool.query(`
    DELETE FROM available_slots_April WHERE slotID = ?
    `, [id])
    return deletedSlot
}
// console.log(await deleteSlot(10))

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

// NOTE: This function needs a required at the id since it won't work w/out the user id.


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

// timeSlots crud starts here
let getTimes = async ()=>{
    let [timesArray] = await pool.query(`
    SELECT * FROM times
    `)
    // console.log(timesArray)
    return timesArray
}
// console.log(await getTimes());

let getAtime = async (id)=>{
    let [time] = await pool.query(`
    SELECT * from times WHERE timeID = ?
    `, [id])
    return time
}
// console.log(await getAtime(2));

let addAtime = async (timeID, time, timeLength) =>{
    let insertTime = await pool.query(`
    INSERT INTO times (timeID, time, timeLength) VALUES (?, ?, ?)
    `, [timeID, time, timeLength]) 
    let [newtime] = await pool.query(`
    SELECT * FROM times WHERE timeID = ?
    `, [timeID])
    return newtime
}
// console.log(await addAtime("4978", "4th test: addtime/hashPassword", "tester", "Password3"))

// NOTE: 
//      1) This fx needs the time name to be unique else it will return
//         >1 item
//      2) All the fields in the "add time" modal need a "required" attribute since the columns in the database all have a "NOT NULL" constraint

// PROBLEM: This fx is not dynamic and requires ALL values to be present. This is necessary since the website will look untidy/uneven if there are some elements missing.


let editTime = async (timeID, time, timeLength) => {
    if(time){
        let edittime = await pool.query(`
        UPDATE times SET time = ? WHERE timeID = ?
        `, [time, timeID])
    } else {
        console.log("There is no time to update")
    }
    if(timeLength){
        let editTimeLength = await pool.query(`
        UPDATE times SET timeLength = ? WHERE timeID = ?
        `, [timeLength, timeID])
    } else {
        console.log("There is no timeLength to update")
    }
    // The code below is the ternary operator version of the conditional satatment above.
    // let editQuantity = quantity ? await pool.query(`UPDATE times SET quantity = ? WHERE timeID = ?`, [quantity, id]) : console.log("There is no quantity to be updated")

    let showtime = await getAtime(timeID)
    return showtime
}

// Test 1: does the 'true' condition work
// await edittime(10, "Testing edittime() fx", 12, 15.32, "test edittime() fx", "Let's say this is a url when it's actually a prodDesc", "This actually is a url")

// Test 2: does the 'false' condition work
// await edittime(10, null, null, null, null, null)

// NOTE TO SELF: The conditional statements of the edittime() fx work when true and when values are empty/null. The ternary operator work at true and false as well

// NOTE: This function needs a required at the id since it won't work w/out the time id.


let deleteTime = async (id) => {
    let deletedtime = await getAtime(id)
    let deleteThetime = await pool.query(`
    DELETE FROM times WHERE timeID = ?
    `, [id])
    return deletedtime
}
// console.log(await deletetime(13))

let getbookings = async ()=>{
    let [bookingsArray] = await pool.query(`
    SELECT * FROM bookings
    `)
    // console.log(bookingsArray)
    return bookingsArray
}
// console.log(await getbookings());

let addABooking = async (userID, userLanguage, userTime, userService) =>{
    let insertBooking = await pool.query(`
    INSERT INTO bookings (userID, userLanguage, userTime, userService) VALUES (?, ?, ?, ?)
    `, [userID, userLanguage, userTime, userService]) 
    let [newBooking] = await pool.query(`
    SELECT * FROM bookings WHERE userID = ?
    `, [userID])
    return newBooking
}
// console.log(await addABooking(4, "hella Gibberish", "1am", "layl salaah"))

let editABooking = async (userID, userLanguage, userTime, userService) =>{
    let editBooking = await pool.query(`
    UPDATE bookings (userLanguage, userTime, userService) VALUES (?, ?, ?) WHERE userID = ?
    `, [userLanguage, userTime, userService, userID]) 
    let [newBooking] = await pool.query(`
    SELECT * FROM bookings WHERE userID = ?
    `, [userID])
    return newBooking
}
// console.log(await editABooking(1234, "newLuqad", "1am", "layl salaah"))


export {getSlots, getASlot, addASlot, editSlot, deleteSlot, getUsers, getAUser, addAUser, editUser, deleteUser, checkUser, getTimes, getAtime, addAtime, editTime, deleteTime, getbookings, addABooking}