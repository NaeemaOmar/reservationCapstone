import { createStore } from 'vuex'
import axios from 'axios'

const baseUrl = "https://reservationcapstone.onrender.com"
// const baseUrl = "http://localhost:3336"
axios.defaults.withCredentials = true

export default createStore({
  state: {
    allProductsArray: null,
    theBookingsArray: null,
    allTheUsers: null,
    loginStatus: null,
    singleUser:null,
    currentUser: null
  },
  getters: {
    getBookingsArray: (state)=>{
      return state.theBookingsArray
    }
  },
  mutations: {
    getAllProducts(state, value){
      state.allProductsArray = value
    },
    setTheBookings(state, value){
      state.theBookingsArray = value
    },
    setTheUsers(state, value){
      state.allTheUsers = value
    },
    checkUserStatus(state, value){
      state.loginStatus = value
    },
    setCurrentUser(state, value){
      state.currentUser = value
    }
  },
  actions: {
    // USERS ACTIONS START HERE
    async checkAUser({commit}, userInfo){
      try{
        let response = await axios.post(`${baseUrl}/users/login`, userInfo)
        console.log("below is the response.data of the axios.post (hopefully)")
        console.log(response.data)
        commit('checkUserStatus', response.data.worked)
        return response.data
      } catch (error){
        console.log(`in the axios, the following error was found while trying to check the user: ${error}`)
      }
    },
    async registerUser(context, newUserInfo){
      try{
        let newUser = await axios.post(`${baseUrl}/users`, newUserInfo)
        console.log("the register user axios is running. Below is the newUser variable")
        console.log(newUser)
        console.log("below is the newUser.data variable")
        console.log(newUser.data)
      } catch (error){
        console.log(`In the axios.post, the following error was found while trying to register: ${error}`)
      }
    },
    async getTheUsers({commit}){
      try{
        let theUsers = await axios.get(`${baseUrl}/users`)
        console.log(theUsers.data)
        commit('setTheUsers', theUsers.data)
      } catch (error){
        console.log(`The following error was found while trying to fetch the users in the axios.get: ${error}`)
      }
    },
    async getAUser({commit}, userID){
      try {
        let singleUser = await axios.get(`${baseUrl}/users/${userID}`)
        console.log("Below is what the getSingleUser axios returns")
        console.log(singleUser.data)
        commit('setCurrentUser', singleUser.data)
        return singleUser.data
      } catch(error){
        console.log(`The following error occured in the axios.get of the getSingleUser fx: ${error}`)
      }
    },
    async deleteAUser(context, userID){
      try{
        console.log("the deleteUser axios.delete is running now. Below is the userID that will be deleted:")
        console.log(userID)
        let deletedUser = await axios.delete(`${baseUrl}/users/${userID}`)
        console.log("The delete user axios is running now. Below is the user to be deleted")
        console.log(deletedUser)
      } catch(error){
        console.log(`The following error occured while trying to run the axios.delete in the store: ${error}`)
      }
    },
    async editTheUser(context, user){
      try{
        console.log("The axios.patch for the users is running now")
        console.log("Below is the userId that will be edited:")
        console.log(user.userID)
        await axios.patch(`${baseUrl}/users/${user.userID}`, user)
      } catch(error){
        console.log(`The following error occured while tryin to run the editUser axios in the store: ${error}`)
      }
    },
    // BOOKINGS ACTIONS START HERE
    async getBookings({commit}){
      try{
        let theBookings = await axios.get(`${baseUrl}/bookings`);
        console.log(theBookings.data)
        commit('setTheBookings', theBookings.data)
      } catch(error){
        console.log(`The following error was found while trying to fetch the bookings: ${error}`)
      }
    },
    async addBooking(context, newBooking){
      try {
        await axios.post(`${baseUrl}/bookings`, newBooking)
        console.log("the bookings.post axios is working")
      } catch (error){console.log(`The following error was found when trying to add the new booking in the store: ${error}`)}
    },
    async deleteBooking(context, userID){
      try {
        await axios.delete(`${baseUrl}/bookings/${userID}`)
        console.log("the bookings.delete axios is working")
      } catch (error){console.log(`The following error was found when trying to delete a booking in the store: ${error}`)}
    },
    async editABooking(context, editBooking){
      try {
        console.log(`In the axios.patch, this is the userID: ${editBooking.userID}`)
        await axios.patch(`${baseUrl}/bookings/${editBooking.userID}`, editBooking)
        console.log("the bookings.patch axios is working")
      } catch (error){console.log(`The following error was found when trying to edit a booking in the store: ${error}`)}
    },
    
    // SLOTS ACTIONS START HERE
    async getSlots({commit}){
      try{
        console.log("the getSLots axios is working")
        let allTheProducts = await axios.get(`${baseUrl}/slots`);
        console.log(allTheProducts.data)
        commit('getAllProducts', allTheProducts.data)
        return allTheProducts.data
      } catch(error){
        console.log(`the following error was found while trying to fetch the slots in the store: ${error}`)
      }
    },
    async editASlot(context, newDeets){
      try{
        console.log("The axios.patch for the slots is running now")
        console.log("Below is the value of the newDeets variable that the slot's axios.patch takes in")
        console.log(newDeets)
        let editedSlot = await axios.patch(`${baseUrl}/slots/${newDeets.slotID}`, newDeets)
        console.log("below is what the axios.patch for the slots returned:")
        console.log(editedSlot.data)
      } catch(error){
        console.log(`The following error occured while trying to edit a slot in the axios.patch (ie, the store): ${error}`)
      }
    },
    async deleteASlot(context, slotID){
      try{
        console.log("The axios.delete for the slots is running now")
        console.log("Below is the value of the slotID variable that the slot's axios.delete takes in")
        console.log(slotID)
        await axios.delete(`${baseUrl}/slots/${slotID}`, slotID)
      } catch(error){
        console.log(`The following error occured while trying to delete a slot in the axios.delete (ie, the store): ${error}`)
      }
    },
    async addASlot(context, newSlotInfo){
      try{
        console.log("The axios.post of the addSlots is running now. Below is the newSlotInfo variable that will be sent to the backend:")
        console.log(newSlotInfo)
        await axios.post(`${baseUrl}/slots`, newSlotInfo)
      } catch(error){
        console.log(`The following error occured in the axios.post of the slots: ${error}`)
      }
    }
  },
  modules: {
  }
})
