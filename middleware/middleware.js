import {hash} from 'bcrypt'

let createHashPassword = async (id, txtPassword)=>{
   try {
       let hashThePassword = hash(txtPassword, 10, (err, hash) => {
           if(err){
               console.log(`The following error was found while trying to hash the password: ${err}`)
           } else {
               console.log(`The following is the txtPassword/hashedPassword combo for id = ${id}: ${txtPassword} -> ${hash}`)
               return hash
           }
       })
   } 
   catch(error){console.log(`The following error was found using the catch: ${error}`)}
}

// console.log(await createHashPassword("12", "Hello kitty"))


// example fr chatgpt
// let createHashPassword = async (id, txtPassword) => {
//     try {
//         const hash = await bcrypt.hash(txtPassword, 10);
//         console.log(`The following is the txtPassword/hashedPassword combo for id = ${id}: ${txtPassword} -> ${hash}`);
//         return hash;
//     } catch (err) {
//         console.error(`The following error was found while trying to hash the password: ${err}`);
//         throw err;
//     }
// };
// console.log(await createHashPassword("12", "Hello kitty"))

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

export {checkUser}