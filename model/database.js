import configPg from '../config/config.js'

const pool = configPg.pool

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


export {getSlots, getASlot, addASlot, editSlot, deleteSlot}