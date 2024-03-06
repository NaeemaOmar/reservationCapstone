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
